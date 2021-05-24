// Crie uma função que faça requisição para a api dog pictures. Mocke a requisição e crie dois testes. 
// O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". 

function dogsApi() {
  const apiDogs = 'https://dog.ceo/api/breeds/image/random';

  fetch(apiDogs).then((response) => response
  .json()
  .then((json) => response.ok ? Promise.resolve(json) : Promise.reject(json)));
}

module.exports = dogsApi;