const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

const expected1 = myRemove([1, 2, 3, 4], 3);
const expected2 = myRemove([1, 2, 3, 4], 5);

assert.deepStrictEqual(expected1, [1, 2, 4]);
assert.notDeepStrictEqual(expected1, [1, 2, 3, 4]);
assert.deepStrictEqual(expected2, [1, 2, 3, 4]);