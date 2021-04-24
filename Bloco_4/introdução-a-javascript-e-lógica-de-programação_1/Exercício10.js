//1 - Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. 
//2 - A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) 
//    a empresa terá ao vender mil desses produtos.
//3 - Atente que, sobre o custo do produto, incide um imposto de 20%.
//4 - Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
//5 - O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, 
//    sendo que o imposto de 20% também faz parte do valor de custo.
//6 - valorCustoTotal = valorCusto + impostoSobreOCusto
//7 - lucro = valorVenda - valorCustoTotal (lucro de um produto).
// Checked
let productCost = 170;
let taxProduct = 20 * (170/100);
let saleValue = 510;

totalProductCost = productCost + taxProduct;
profit = (saleValue - totalProductCost) * 1000;

if (totalProductCost < 0 || profit < 0) {
    console.log('erro: invalid value');
} else {
    console.log(profit);
}












