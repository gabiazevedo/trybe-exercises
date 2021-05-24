const getAnimal = require('../testes-automatizados-com-jest_2/exercise6.2');

describe('Testando promise - findAnimalByAge', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal(5).then(animal => {
        expect(animal).toEqual([{ name: 'Preguiça', age: 5, type: 'Cat' }]);
      });
    });

    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal(7).catch(error => {
        expect(error).toEqual('Nenhum animal com essa idade!')
      });
    });
  });   