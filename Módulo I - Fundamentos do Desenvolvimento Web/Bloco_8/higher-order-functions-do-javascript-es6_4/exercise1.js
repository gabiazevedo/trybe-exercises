
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

// Dada uma matriz de matrizes, transforme em uma única matriz.

function flatten() {
  const matrix = arrays.reduce((accumulator, array) => accumulator.concat(array), []);
  return matrix;
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);