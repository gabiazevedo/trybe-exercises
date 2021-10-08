const { expect } = require('chai');

const verifyNumber = require('./index');


describe('Quando o número for menor que 0', () => {
  it('retorna "negativo"', () => {
    const resposta = verifyNumber.verifyNumber(-20);
    
    expect(resposta).to.be.equals('negativo');
  });
});

describe('Quando o número for igual a 0', () => {
  it('retorna "neutro"', () => {
    const resposta = verifyNumber.verifyNumber(0);
    
    expect(resposta).to.be.equals('neutro');
  });
});

describe('Quando o número for maior que 0', () => {
  it('retorna "positivo"', () => {
    const resposta = verifyNumber.verifyNumber(154);
    
    expect(resposta).to.be.equals('positivo');
  });
});

describe('Quando o parâmetro for diferente de Number', () => {
  it('retorna "diferente de Number"', () => {
    const resposta = verifyNumber.verifyNumber('não sou um número');
    
    expect(resposta).to.be.equals('diferente de Number');
  });
});

const writeFile = require('./index');

const fs = require('fs');

const sinon = require('sinon');

describe('Executa a função "escreveArquivo"', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync')
  });

  after(() => {
    fs.writeFileSync.restore()
  });

  describe('a resposta', () => {
    it('é uma string', () => {
      const resposta = writeFile.escreveArquivo('arquivo.txt', 'Meu teste funciona');
      expect(resposta).to.be.a('string');
    });

    it('é igual a OK', () => {
      const resposta = writeFile.escreveArquivo('arquivo.txt', 'Meu teste funciona');
      expect(resposta).to.be.equals('OK');
    });
  });
});
