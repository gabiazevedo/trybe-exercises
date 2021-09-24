const readLine = require('readline-sync');

function randomNum() {

  const saudacao = readLine.question('Vamos sortear um numero? ');
  const int = readLine.questionInt('Tente a sorte digitando um número entre 0 e 10...');
  const randomNum = Math.floor(Math.random() * 11);
  
  if (randomNum === int) {
    console.log('Parabéns, número correto!!!');
    return;
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${randomNum}`);
    return;
  }
};

randomNum();

const jogarNovamente = readLine.question('Você quer tentar de novo? Digite "sim" para jogar novamente ou digite qualquer outra coisa para finalizar o jogo. ');

function repeteJogo() {
  if (jogarNovamente !== 'sim') return console.log('Ok! Até a próxima, quem sabe com a sorte a seu favor...?');
   
  randomNum();
}

repeteJogo();
