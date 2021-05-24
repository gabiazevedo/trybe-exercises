const assert = require('assert');

const numbers = [9, 23, 10, 3, 8];
const expected = 53;

const sumAllNumbers = () => {
  let expected = 0;

  for (let index in numbers) {
  expected += numbers[index];
  }
return expected;
}

const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);