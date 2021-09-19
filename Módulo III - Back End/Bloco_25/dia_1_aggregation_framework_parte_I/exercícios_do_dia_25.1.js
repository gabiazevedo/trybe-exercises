// -------------- EXERCÍCIOS DE FIXAÇÃO --------------

// Selecione todas as transações feitas pelo cliente chamado "Dave America".

db.transactions.aggregate([{ $match: { from: "Dave America" } }]);

// Selecione todas as transações com o valor entre 700 e 6000, ou que sejam recebidas pela cliente "Lisa Simpson".

db.transactions.aggregate([{ $match: { $or: [{ value: { $gt: 700, $lt: 6000 }}, { from: "Lisa Simpson" }]}}]);

// Selecione três transações com o valor acima de 1000.

db.transactions.aggregate([{ $match: { value: { $gt: 1000 }}}, { $limit: 3 }]);

// Selecione todos os bancos, ou seja, valores do campo bank;

db.transactions.aggregate([{ $group: { _id: "$bank", bank: { $sum: 1 }}}]);

// Selecione o valor total das transações em cada banco e quantas são;

db.transactions.aggregate([{ $group: { _id: "$bank", value: { $sum: "$value" }, transacoes: { $sum: 1 }}}]);

// Selecione o valor total de transações por banco;

db.transactions.aggregate([{ $group: { _id: "$bank", total_value: { $sum: "$value" }}}]);

// Selecione os bancos que têm o valor total de transações maior que 1000.

db.transactions.aggregate([{ $group: { _id: "$bank", total_value: { $sum: "$value" }}}, { $match: { "total_value": { $gt: 1000 }}}]);

// Selecione todos os clientes com as suas respectivas transações feitas;

db.clients.aggregate([{ $lookup: { from: "transactions", localField: "name", foreignField: "from", as: "transactions_done" }}]);

// Selecione quatro clientes com as suas respectivas transações recebidas;

db.clients.aggregate([{ $lookup: { from: "transactions", localField: "name", foreignField: "to", as: "received_transactions" }}, { $limit: 4 }]);

// Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.

db.clients.aggregate([{ $lookup: { from: "transactions", localField: "name", foreignField: "to", as: "received_transactions" }}, { $match: { State: "Florida" }}]);

// ------------ EXERCÍCIOS DO DIA -------------

// Exercício 1: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes
// do sexo "MASCULINO".

db.clientes.aggregate([{ $match: { sexo: "MASCULINO" }}]);

// Exercício 2: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes 
// do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005.

db.clientes.aggregate([
  { $match: { $and: [{ sexo: "FEMININO" },
  { dataNascimento: { $gte: ISODate("1995-01-01"), $lte: ISODate("2005-12-31")}}]}}
]);

// Exercício 3: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes
// do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005 , limitando a quantidade de
// documentos retornados em 5.

db.clientes.aggregate([
  { $match: { $and: [{ sexo: "FEMININO" },
  { dataNascimento: { $gte: ISODate("1995-01-01"), $lte: ISODate("2005-12-31")}}]}},
  { $limit: 5 }
]);

// Exercício 4: Conte quantos clientes do estado SC existem na coleção. Retorne um documento em que o
// campo _id contenha a UF e outro campo com o total.

db.clientes.aggregate([
  { $match: { "endereco.uf": "SC" }},
  { $group: { _id: "$endereco.uf", total: { $sum: 1 }}}
]);

// Exercício 5: Agrupe os clientes por sexo. Retorne o total de clientes de cada sexo no campo total.

db.clientes.aggregate([{ $group: { _id: "$sexo", total: { $sum: 1 }}}]);

// Exercício 6: Agrupe os clientes por sexo e uf . Retorne o total de clientes de cada sexo no campo
// total.

db.clientes.aggregate([
  { $group: { _id: { sexo: "$sexo", uf: "$endereco.uf" }, total: { $sum: 1 }}}
]);

// Exercício 7 : Utilizando a mesma agregação do exercício anterior, adicione um estágio de projeção para modificar os
// documentos de saída.

db.clientes.aggregate([
  { $group: { _id: { sexo: "$sexo", uf: "$endereco.uf" }, total: { $sum: 1 }}},
  { $project: { _id: 0, estado: "$_id.uf", sexo: "$_id.sexo", total: 1 }}
]);

// Exercício 8 : Descubra quais são os 5 clientes que gastaram o maior valor.

db.vendas.aggregate([
  { $match: { status: { $in: ["ENTREGUE", "EM SEPARACAO"]}}},
  { $group: { _id: "$clienteId", valorTotal: { $sum: "$valorTotal" }}},
  { $sort: { valorTotal: -1 }},
  { $limit: 5 }
]);

// Exercício 9 : Descubra quais são os 10 clientes que gastaram o maior valor no ano de 2019 .

db.vendas.aggregate([
  { $match: { dataVenda: { $gte: ISODate('2019-01-01'), $lte: ISODate('2019-12-31')}}},
  { $group: { _id: "$clienteId", valorTotal: { $sum: "$valorTotal" }}},
  { $sort: { valorTotal: -1 }},
  { $limit: 10 }
]);

// Exercício 10 : Descubra quantos clientes compraram mais de 5 vezes. Retorne um documento que contenha somente o
// campo clientes com o total de clientes.
// Dica: O operador $count pode simplificar sua query .

db.vendas.aggregate([
  { $group: { _id: "$clienteId", total_clientes: { $sum: 1 }}},
  { $match: { total_clientes: { $gt: 5 }}},
  { $count: "clientes" }
]);

// Exercício 11 : Descubra quantos clientes compraram menos de três vezes entre os meses de Janeiro de 2020 e Março de 2020 .

db.vendas.aggregate([
  { $match: { dataVenda: { $gte: ISODate("2020-01-01"), $lte: ISODate("2020-03-31")}}},
  { $group: { _id: "$clienteId", total_vendas: { $sum: 1 }}},
  { $match: { total_vendas: { $lte: 3 }}},
  { $count: "total_vendas_jan_mar"}
]);

// Exercício 12 : Descubra quais as três uf s que mais compraram no ano de 2020 .

db.vendas.aggregate([
  { $match: { dataVenda: { $gte: ISODate("2020-01-01"), $lte: ISODate("2020-12-31") }}},
  { $lookup: { from: "clientes", localField: "clienteId", foreignField: "clienteId", as: "clientesInfo" }},
  { $unwind: "$clientesInfo" },
  { $group: { _id: "$clientesInfo.endereco.uf", total_vendas: { $sum: 1 }}},
  { $project: { _id: 0, uf: "$_id", totalVendas: "$total_vendas" }},
  { $sort: { totalVendas: -1 }},
  { $limit: 3 }]);

// Exercício 13 : Encontre qual foi o total de vendas e a média de vendas de cada uf no ano de 2019 . Ordene os resultados pelo nome da uf.

  db.vendas.aggregate([
    { $match: { dataVenda: { $gte: ISODate("2019-01-01"), $lte: ISODate("2019-12-31") }}},
    { $lookup: { from: "clientes", localField: "clienteId", foreignField: "clienteId", as: "clientesInfo" }},
    { $unwind: "$clientesInfo" },
    { $group: { _id: "$clientesInfo.endereco.uf", total_vendas: { $sum: 1 }, media_vendas: { $avg: "$valorTotal" }}},
    { $project: { _id: 0, uf: "$_id", totalVendas: "$total_vendas", mediaVendas: "$media_vendas" }},
    { $sort: { uf: 1 }}
  ]);