const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

const expected1 = myRemoveWithoutCopy([1, 2, 3, 4], 3);
const expected2 = myRemoveWithoutCopy([1, 2, 3, 4], 5);

assert.deepStrictEqual(expected1, [1, 2, 4]);
assert.notDeepStrictEqual(expected1, [1, 2, 3, 4]);
assert.deepStrictEqual(expected2, [1, 2, 3, 4]);