//Crie uma função que receba uma frase e retorne qual a maior palavra.

const biggerWord = frase => {
let longestWord = frase.split(' ');
let returnWord = '';

for (let index = 0; index < longestWord.length; index += 1) {
  for (let index2 = 0; index2 < longestWord.length; index2 += 1) {
    if (longestWord[index].length > longestWord[index2].length) {
      returnWord = longestWord[index];
    }
  }
}
return returnWord;
}
console.log(biggerWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
