// Selecione todos os clientes com as suas respectivas transações feitas;

db.clients.aggregate([
  { $lookup: {
    from: "transactions",
    let: { client_name: "$name" },
    pipeline: [ { $match: { $expr: { $eq: [ "$from", "$$client_name"]}}}],
    as: "transactions_info"}}
  ]);

// Selecione os quatro primeiros clientes com as suas respectivas transações recebidas ordenados pelo estado em ordem alfabética;

db.clients.aggregate([
  { $lookup: {
    from: "transactions",
    let: { client_name: "$name" },
    pipeline: [ { $match: { $expr: { $eq: [ "$to", "$$client_name"]}}}],
    as: "transactions_done"}},
    { $sort: { State: 1 }},
    { $limit: 4 }
]);

// Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.

db.clients.aggregate([
  { $match: { State: "Florida" }}, 
  { $lookup: { 
    from: "transactions", 
    let: { client_name: "$name" }, 
    pipeline: [ { $match: { $expr: { $eq: [ "$to", "$$client_name"]}}}], 
    as: "transactions_done"}}
]);

// Calcule qual o custo total de cada produto, considerando o preço de compra e os impostos.

db.products.aggregate([{ $project: { _id: 0, name: 1, total_cost: { $add: ["$purchase_price", "$taxes"]}}}]);

// Retorne o menor número inteiro relativo ao preço de venda de cada produto;

db.products.aggregate([{ $project: { _id: 0, name: 1, IntValue: { $floor: ["$sale_price"]}}}]);

// Retorne o maior número inteiro relativo ao lucro total sobre cada produto. Nota: Desconsiderar taxas (taxes)

db.products.aggregate([{ $project: { _id: 0, name: 1, profitValue: { $ceil: { $subtract: ["$sale_price", "$purchase_price"]}}}}]);

// Calcule o valor absoluto do lucro total de cada produto.

db.products.aggregate([{ $project: { _id: 0, name: 1, profitValue: { $abs: { $subtract: [ { $add: ["$taxes", "$purchase_price"]}, "$sale_price"]}}}}]);

// Calcule qual o valor total em estoque de cada produto, considerando o preço de venda e a quantidade;

db.products.aggregate([{ $project: { name: 1, _id: 0, storage_total_profit: { $multiply: ["$purchase_price", "$quantity"]}}}]);

// ----- EXERCÍCIOS DO DIA -----

// Exercício 1 : Utilize uma combinação das expressões aritméticas e adicione um campo chamado idade à coleção clientes . Algumas dicas:

// arredonde para baixo o valor da idade;
// calcule a idade usando a diferença entre a data corrente e a data de nascimento;
// 1 dia é igual a 86400000 milissegundos.

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$NOW", "$dataNascimento"] },
            { $multiply: [86400000, 365] },
          ],
        },
      },
    },
  },
]);

// Exercício 2 : Utilizando o novo campo idade , conte quantos clientes têm entre 18 e 25 anos.

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$NOW", "$dataNascimento"] },
            { $multiply: [86400000, 365] },
          ],
        },
      },
    },
  },
  {
    $match: {
      idade: { $gte: 18, $lte: 25 },
    },
  },
  {
    $count: "total_clientes",
  },
]);

// Exercício 3 : Remova os estágios $count e $match do exercício anterior e adicione um estágio no
// pipeline que coloque as compras do cliente no campo compras.

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$NOW", "$dataNascimento"] },
            { $multiply: [86400000, 365] },
          ],
        },
      },
    },
  },
  {
    $lookup: {
      from: "vendas",
      localField: "$clienteId",
      foreignField: "$clienteId",
      as: "compras_do_cliente",
    },
  },
]);

// Exercício 4 : Selecione TODOS os clientes que compraram entre Junho de 2019 e Março de 2020.

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$NOW", "$dataNascimento"] },
            { $multiply: [86400000, 365] },
          ],
        },
      },
    },
  },
  {
    $lookup: {
      from: "vendas",
      localField: "$clienteId",
      foreignField: "$clienteId",
      as: "compras_do_cliente",
    },
  },
  {
    $match: {
      "$compras_do_cliente.dataVenda": {
        $gte: ISODate("2019-06-01"),
        $lte: ISODate("2020-03-31"),
      },
    },  
  },
]);

// Exercício 5 : Confira o número de documentos retornados pelo pipeline com o método itcount().
// Até aqui, você deve ter 486 documentos sendo retornados.

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$NOW", "$dataNascimento"] },
            { $multiply: [86400000, 365] },
          ],
        },
      },
    },
  },
  {
    $lookup: {
      from: "vendas",
      localField: "$clienteId",
      foreignField: "$clienteId",
      as: "compras_do_cliente",
    },
  },
  {
    $match: {
      "$compras_do_cliente.dataVenda": {
        $gte: ISODate("2019-06-01"),
        $lte: ISODate("2020-03-31"),
      },
    },  
  },
]).itCount();

// Exercício 6 : Ainda nesse pipeline , descubra os 5 estados com mais compras.

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor:{
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            { $multiply: [86400000, 365] }
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras'
    }
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: ISODate('2019-06-01'),
        $lte: ISODate('2020-03-31')
      }
    }
  },
  { $unwind: "$compras" },
  {
    $addFields: {
      "compras.valorComDesconto": {
        $subtract: [
          "$compras.valorTotal",
          { $multiply: ["$compras.valorTotal", 0.10] }
        ]
      }
    }
  },
  {
    $group: {
      _id: "$endereco.uf",
      totalCompras: {
        $sum: 1
      }
    }
  },
  {
    $sort: {
      totalCompras: -1
    }
  },
  { $limit: 5 }
]);

// Exercício 7 : Descubra o cliente que mais consumiu QUEIJO PRATO.

db.vendas.aggregate([
  { $unwind: "$itens" },
  {
match: {
      "itens.nome": "QUEIJO PRATO"
    }
  },
  {
group: {
      _id: "$clienteId",
      totalConsumido: {
sum: "$itens.quantidade"
      }
    }
  },
  {
sort: { totalConsumido: -1 }
  },
  { $limit: 1 },
  {
lookup: { 
      from: 'clientes',
      localField: '_id',
      foreignField: 'clienteId',
      as: 'cliente'
    }
  },
  { $unwind: "$cliente" },
  {
project: {
      nomeCliente: "$cliente.nome",
      uf: "$cliente.endereco.uf",
      totalConsumido: "$totalConsumido",
      _id: 0
    }
  }
]);

// Exercício 8 : Selecione todas as vendas do mês de Março de 2020 , com status EM SEPARACAO.
// Acrescente um campo chamado dataEntregaPrevista com valor igual a três dias após a data da venda.
// Retorne apenas os campos clienteId , dataVenda e dataEntregaPrevista.

db.vendas.aggregate([
  {
match: {
      dataVenda: {
gte: ISODate('2020-03-01'),
lte: ISODate('2020-03-31')
      },
      status: "EM SEPARACAO"
    }
  },
  {
addFields: {
      dataEntregaPrevista: {
add: ["$dataVenda", 3 * 24 * 60 * 60000]
      }
    }
  },
  {
project: {
      _id: 0,
      clienteId: 1,
      dataVenda: 1,
      dataEntregaPrevista: 1
    }
  }
]);
