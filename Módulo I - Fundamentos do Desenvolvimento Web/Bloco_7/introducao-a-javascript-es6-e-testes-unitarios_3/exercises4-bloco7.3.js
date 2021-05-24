const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

const expected1 = myFizzBuzz(12);
const expected2 = myFizzBuzz(10);
const expected3 = myFizzBuzz(15);
const expected4 = myFizzBuzz(22);
const expected5 = myFizzBuzz('Sou uma string');

assert.strictEqual(expected1, 'fizz');
assert.strictEqual(expected2, 'buzz');
assert.strictEqual(expected3, 'fizzbuzz');
assert.strictEqual(expected4, Error, 'Número precisa ser divisível por 3 ou 5 / 3 && 5');
assert.strictEqual(expected5, 'false');


