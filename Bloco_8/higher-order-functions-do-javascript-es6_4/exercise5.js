// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const letterA = names.reduce((result, letter) => {
    return result + letter.toUpperCase().split('A').length - 1;
  }, 0)
return letterA;
}

assert.deepStrictEqual(containsA(), 20);