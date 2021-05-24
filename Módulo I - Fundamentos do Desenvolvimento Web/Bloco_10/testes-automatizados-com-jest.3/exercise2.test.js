const functions = require('../testes-automatizados-com-jest.3/exercise2');
jest.mock('../testes-automatizados-com-jest.3/exercise2');

describe('Testa implementações mockando funções', () => {

  test('Testa função toUpperCase', () => {

    const spy = jest.spyOn(functions, 'toUpperCase').mockImplementation((string) => string.toLowerCase());
    functions.toUpperCase('HEITOR');
  
  expect(functions.toUpperCase('HEITOR')).toBe('heitor');
  expect(functions.toUpperCase).toHaveBeenCalled();
  expect(functions.toUpperCase).toHaveBeenCalledTimes(2);
  expect(functions.toUpperCase).toHaveBeenCalledWith('HEITOR');
  
  
  functions.toUpperCase.mockRestore();
  expect(functions.toUpperCase('gabi')).toBe('GABI');
  
  });

  test('Testa função substring', () => {

  functions.substring.mockImplementation((string) => string.slice(-1));
  functions.substring('heitor');

  expect(functions.substring).toHaveBeenCalled();
  expect(functions.substring).toHaveBeenCalledTimes(1);
  expect(functions.substring).toHaveBeenCalledWith('heitor');
  expect(functions.substring('heitor')).toBe('r');
});

  test('Testa função concat', () => {

  functions.concat.mockImplementation((stringA, stringB, stringC) => `${stringA} ${stringB} ${stringC}`);
  functions.concat('Gabi', 'ama', 'Heitor');

  expect(functions.concat).toHaveBeenCalled();
  expect(functions.concat).toHaveBeenCalledTimes(1);
  expect(functions.concat).toHaveBeenCalledWith('Gabi', 'ama', 'Heitor');
  expect(functions.concat('Gabi', 'ama', 'Heitor')).toBe('Gabi ama Heitor');
});
});
