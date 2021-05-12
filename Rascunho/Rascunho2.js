const persons = [
{ firstName: 'Gabriela', lastName: 'Azevedo' },

{ firstName: 'Ana', lastName: 'Giorgiani'}
]

// 1 - Retornar um objeto com os pares de chave/valor do objeto persons

const newObj = persons.reduce((acc, curr) => {
acc[curr.firstName] = curr.lastName
return acc;
}, {});
console.log(newObj);

// 2 - Retornar um array com os valores das propriedades lastName

const arrayLastName = persons.map((lastName) => lastName.lastName);
console.log(arrayLastName);
