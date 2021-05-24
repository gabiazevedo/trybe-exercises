// Spread Operator;
// Faça uma lista com as suas frutas favoritas

const specialFruit = ['Morango', 'Abacaxi', 'Amora'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Laranja', 'Limão-Doce', 'Framboesa'];

const fruitSalad = (fruit, additional) => {
  const allFruits = [...specialFruit, ...additionalItens];
  return allFruits;
};

console.log(fruitSalad(specialFruit, additionalItens));

//Parâmetro rest

function quantosParams(...args) {
    console.log('parâmetros:', args);
    return `Você passou ${args.length} parâmetros para a função.`;
  }
  
  console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
  console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

  const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
  console.log(sum(4, 7, 8, 9, 60)); // 88

// Object destructuring

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

// Maneira antiga de capturar as propriedades de um objeto

console.log(product.name);
console.log(product.price);
console.log(product.seller);

// Utilizando o object destructuring basta armazenar em uma variável a propriedade que se quer capturar, 
//colocando-a entre chaves e à direita do sinal de atribuição, o nome do objeto;

const { name } = product;
console.log(name);

// Para capturar mais de uma propriedade, podemos fazer isso em uma linha usando o object destructuring.

const { name, price, seller } = product;
console.log(name);
console.log(price);
console.log(seller);

// Podemos usá-lo dentro de uma função, colocando as propriedades do objeto como parâmetro de input da função
// na chamada da função setar o nome do objeto e executar a função.

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas

// Array destructuring 

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

// acessando posições do array do modo aprendido antes do array destructuring;

const firstCountry = arrayCountries[0];
const secondCountry = arrayCountries[1];
const thirdCountry = arrayCountries[2];
const forthCountry = arrayCountries[3];

console.log(firstCountry);
console.log(secondCountry);
console.log(thirdCountry);
console.log(forthCountry);

// usando a sintaxe do array destructuring, conseguimos fazer isso em uma linha, atribundo todas as variáveis em uma.

const [firstCountry, secondCountry, thirdCountry, forthCountry] = arrayCountries;
console.log(firstCountry);
console.log(secondCountry);
console.log(thirdCountry);
console.log(forthCountry);