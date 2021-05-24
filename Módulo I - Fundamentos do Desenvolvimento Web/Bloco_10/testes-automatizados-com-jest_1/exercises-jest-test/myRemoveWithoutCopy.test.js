const myRemoveWithoutCopy = require('../exercises-jest/myRemoveWithoutCopy');

describe('Requisito 3', () => {
  it('Verifica se a chamada da função myRemoveWithoutCopy retorna o array esperado', () => {
    expect([1, 2, 4]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3));
  });
  
  it('Verifica se a chamada da função myRemove NÃO retorna o array esperado', () => {
    expect([1, 2, 3, 4]).not.toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3));
  });
  
  it('Verifica se o array passado por parâmetro não sofreu alteração', () => {
    expect([1, 2, 3, 4]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5));
  });
  
  it('Verifica se a chamada da função myRemoveWithoutCopy retorna o array esperado', () => {
    expect([1, 2, 3, 4]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4]), 5);
  });
  });

// A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento 
// item caso ele exista no array
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado