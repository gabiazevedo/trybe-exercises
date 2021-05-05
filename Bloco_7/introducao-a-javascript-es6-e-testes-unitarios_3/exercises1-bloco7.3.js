const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

const expected1 = sum(4, 5);
const expected2 = sum(0, 0);
const expected3 = sum(4, '5');

assert.strictEqual(expected1, 9, 'quatro mais cinco é igual a 9');
assert.strictEqual(expected2, 0, 'zero mais zero é igual a zero');
assert.strictEqual(expected3, 9, 'atenção parâmetros devem ser do tipo number');

