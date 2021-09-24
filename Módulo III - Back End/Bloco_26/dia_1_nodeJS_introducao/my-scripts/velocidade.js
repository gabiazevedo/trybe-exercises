const readLine = require('readline-sync');


function avgVelocity() {
  
  const context = readLine.question('Vamos calcular a velocidade média da sua viagem? ');
  const distancia = readLine.questionInt('Qual a distância percorrida em metros? ');
  const tempo = readLine.questionInt('Qual o tempo gasto em segundos? ');

  const avg = (distancia / tempo).toFixed(2);
  console.log(`A velocidade média da sua viagem é: ${avg}.`);
}

avgVelocity();
