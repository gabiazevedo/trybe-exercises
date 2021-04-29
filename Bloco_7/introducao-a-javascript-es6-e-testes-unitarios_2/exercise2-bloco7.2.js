const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Exercício 1

const turnoManha = () => {

  let newKey = 'turno';
  const value = 'manhã';
  lesson2[newKey] = value;
  console.log(lesson2);
}
turnoManha();

//Exercício 2

const returnKeys = () => {
  console.log(Object.keys(lesson1));
}
returnKeys();

// Exercício 3

const objectKey = (obj) => Object.keys(obj).length;
console.log(objectKey(lesson3));

// Exercício 4

const objectValue = (obj) => Object.values(obj).length;
console.log(objectValue(lesson2));

// Exercício 5 

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// Exercício 6 

const numberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
};
console.log(numberOfStudents(allLessons));

// Exercício 7 

const position = () => {
  const parChaveValor = Object.values(lesson3);
  console.log(parChaveValor[2]);
}
position();

// Exercício 8 

// const parChaveValor = Object.entries(lesson3);
// console.log(lesson3, parChaveValor);

// console.log(Object.value(lesson3)).includes

