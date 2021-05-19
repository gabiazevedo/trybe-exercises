const myRemove = require('../exercises-jest/myRemove');

describe('Requisito 2', () => {
it('Verifica se a chamada da função myRemove retorna o array esperado', () => {
  expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
});

it('Verifica se a chamada da função myRemove NÃO retorna o array esperado', () => {
  expect([1, 2, 3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 3));
});

it('Verifica se o array passado por parâmetro não sofreu alteração', () => {
  expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5));
});

it('Verifica se a chamada da função myRemove retorna o array esperado', () => {
  expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4]), 5);
});
});
// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento 
// item caso ele exista no array
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Verifique se o array passado por parâmetro não sofreu alterações
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado