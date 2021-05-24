//Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. 
//Caso contrário, ele retorna false .
//Bonus: use somente um if .

let a = 32;
let b = 44;
let c = 109;

let oddNumber = false;

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
    oddNumber = true;
};
  console.log(oddNumber);