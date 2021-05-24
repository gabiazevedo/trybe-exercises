const assert = require('assert');

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

const wordLengths = () => {
let expected = [];

for (let index = 0; index < words.length; index += 1) {
    wordLetters = words[index].length;
    expected.push(wordLetters);
}
return expected;
}

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);