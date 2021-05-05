// Exercícios feitos em conjunto com Ana Giorgiani e ajuda do gabarito.

function createAlgarisms(algarism) {

  const romano = {
I : 1,        
V : 5,       
X : 10,     
L : 50,      
C : 100,   
D : 500,    
M : 1000, 
  }
  let arrayNum = [];
  let result = 0;

  for (let index in algarism) {
    arrayNum[index] = romano[algarism[index]];
  }

  for (let index in arrayNum) {
    if (arrayNum[index] < arrayNum[index + 1]) {
    arrayNum[index + 1] = arrayNum[index + 1] - arrayNum[index];
    } else {
      result += arrayNum[index];
    }
    }
    return result;
  }
  console.log(createAlgarisms('XL'));

// Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. 
// Através de um loop for , percorra essa variável, busque os números pares e os adicione a um 
// novo array que deverá ser retornado ao final pela pela função.

function arrayOfNumbers(vector) {

  let arrayNum = [];

  for (let index = 0; index < vector.length; index += 1) {
    let numbers = vector[index];
  for (let index2 = 0; index2 < numbers.length; index2 += 1) {
    let current = numbers[index2];
    if (current % 2 === 0) {
      arrayNum.push(current);
    }
  }
    }
  return arrayNum;
}
console.log(arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]));

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

const result = {};

for (let index = 0; index < basket.length; index += 1) {
  const fruit = basket[index];
  if (!result[fruit]) result[fruit] = 0;
  result[fruit] += 1;
}

const summaries = [];
for (fruit in result) {
  let message = `${result[fruit]} ${fruit}`;
  if (result[fruit] > 1) message += 's';
  summaries.push(message);
}

console.log(`Sua cesta possui: ${summaries.join(', ')}.`);