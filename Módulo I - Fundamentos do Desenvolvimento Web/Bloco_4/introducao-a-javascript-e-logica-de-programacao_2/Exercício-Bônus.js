let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }
console.log(array);

let array2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < array2.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array2[index] > array2[secondIndex]) {
      let position = array2[index];
      array2[index] = array2[secondIndex];
      array2[secondIndex] = position;
    }
  }
}

console.log(array2);

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index + 1]) {
  newArray.push(numbers[index] * numbers[index + 1]);

  } else {
  newArray.push(numbers[index] * 2);
  }

}

console.log(newArray);





