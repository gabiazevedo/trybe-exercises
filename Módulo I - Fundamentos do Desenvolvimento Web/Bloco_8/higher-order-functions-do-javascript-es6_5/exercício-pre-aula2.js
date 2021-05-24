// Exercício pré-aula 1
// Neste exemplo, produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a 
// função e a saudação.
 
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

(saudacoes[1](saudacoes[0])); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

// ------------------------------

// Exercício pré-aula 2
// A seguir, temos alguns valores que estão descritos em variáveis incoerentes. 
// Através da desestruturação de arrays, corrija os valores das variáveis.
// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

const comida = arroz.bebida;
const animal = gato.comida;
const bebida = 

console.log(comida, animal, bebida); // arroz gato água

// ---------------------------------

// Exercício pré-aula 3

const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const person = {
    firstName: 'João',
    lastName: 'Jr II',
    
};

const otherPerson = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
};
const { nationality = 'Brazilian' } = person;

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person, nationality));

// -----------------------------------------------

// Exercício pré-aula - property shorthand - resolvido 
const getPosition = (latitude, longitude) => ({

    latitude,
    longitude,
  });

console.log(getPosition(-19.8157, -43.9542));

// ------------------------------------------------

// Exercício pré-aula - default parameter - resolvido

// Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. 
// Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.

const multiply = (number, value = 1) => {
return number * value;
};

console.log(multiply(8));