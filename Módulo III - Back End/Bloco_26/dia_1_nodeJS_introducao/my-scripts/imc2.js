const readLine = require('readline-sync');

function calculoIMC2() {
  
  const name = readLine.question('Qual seu nome? ');
  const peso = readLine.questionFloat('Qual o seu peso (em kg)? ');
  const altura = readLine.questionInt('Qual a sua altura (em cm)? ');

    const calculo = (peso / Math.pow(altura / 100, 2)).toFixed(2);

    if(calculo < 18.5) {
      console.log(`Seu IMC é: ${calculo}, seu status é: Abaixo do peso (magreza).`);
    } else if (calculo >= 18.5 && calculo <= 24.9) {
      console.log(`Seu IMC é: ${calculo}, seu status é: Peso normal.`);
    } else if (calculo >= 25.0 && calculo <= 29.9) {
      console.log(`Seu IMC é: ${calculo}, seu status é: Acima do peso (sobrepeso).`);
    } else if (calculo >= 30.0 && calculo <= 34.9) {
      console.log(`Seu IMC é: ${calculo}, seu status é: Obesidade grau I.`);
    } else if (calculo >= 35.0 && calculo <= 39.9) {
      console.log(`Seu IMC é: ${calculo}, seu status é: Obesidade grau II.`);
    } else if (calculo >= 40.0) {
      console.log(`Seu IMC é: ${calculo}, seu status é: Obesidade graus III e IV.`);
    }
}

calculoIMC2();
