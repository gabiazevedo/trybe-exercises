function numRandom() {
  const createRandomNumbers = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  let array = [];

  for(let index = 0; index < 3; index += 1) {
    array.push(createRandomNumbers(1, 100));
  };
  return array;
}

console.log(numRandom());
