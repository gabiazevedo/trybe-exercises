// Importar o módulo fs/promises e realizar a leitura do arquivo
const fs = require('fs').promises;

const simpsons = './simpsons.json';

// fs.readFile(simpsons, 'utf-8')
// // Converter o conteúdo do arquivo de JSON para um Array utilizando JSON.parse
//   .then((simpsonsContent) => {
//     return JSON.parse(simpsonsContent);
//   })
// // Mapear cada objeto do Array para uma string no formato correto
//   .then((arraySimpsons) => {
//     return arraySimpsons.map(({ id, name }) => `${id} - ${name}`);
//   })
// // Printar no console cada resultado
//   .then((simpsons) => {
//     return simpsons.forEach((eachSimpson) => console.log(eachSimpson));
//   });

  function findSimpson(id) {
    fs.readFile(simpsons, 'utf8')
      .then((findedSimpson) => {
        return JSON.parse(findedSimpson);
      })
      .then((simpsonData) => {
        return simpsonData.find((simpsonId) => simpsonId.id === id);
      })
      .then((simpsonId) => console.log(simpsonId))
      .catch((error) => console.log(`Erro: ${error} - id não encontrado`));
  };


  // async function findSimpson(id) {
  //   const simpsonId = await fs
  //     .readFile(simpsons, 'utf8')
  //     .then((findedSimpson) => JSON.parse(findedSimpson));

  //     const findSimpson = simpsonId.find((simpsonId) => simpsonId.id === id);
      
  //     if(!findSimpson) {
        
  //       throw new Error('id não encontrado');
  //     } 

  //     return findSimpson;
  // };