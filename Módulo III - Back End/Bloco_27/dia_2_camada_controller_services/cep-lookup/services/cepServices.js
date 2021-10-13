const cepModel = require('../models/cepModel');

const isValidCep = async (cep) => {
const regexCep = /\d{5}-\d{3}/;

  if(!regexCep.test(cep)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      }
    }
  }

const findedCep = await cepModel.getCep(cep);

  if (!findedCep) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado'
      },
    };
  }
  return findedCep;
};

const createNewCep = async (cep, log, bairro, local, uf) => {
  if ([cep, log, bairro, local, uf].includes(undefined)) {
    return { error: { code: 'invalidData', message: 'Preencha todos campos' } };
  }

  if (!/^\d{5}-?\d{3}$/.test(cep)) {
    return { error: { code: 'invalidData', message: 'CEP inválido' } };
  }

  const returnedCep = await cepModel.getCep(cep);

  if (returnedCep[0]) {
    return {
      error: { code: 'alreadyExists', message: 'CEP já existente' },
    };
  }

  await cepModel.createAddressByCep(cep, log, bairro, local, uf);

  return { cep, log, bairro, local, uf };
};

module.exports = { isValidCep, createNewCep };
