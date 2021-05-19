const { expect } = require('@jest/globals');
const { encode, decode } = require('../exercisesParteII/encodeDecode');

describe('Testa a função encode e decode', () => {
  it('a função encode é definida', () => {
    expect(encode).toBeDefined();
  });
  it('teste se encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  })
});