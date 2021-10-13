const connection = require('./connection');

const getCep = async (cep) => {
  const [findCep] = await connection.execute(
    `SELECT * FROM cep_lookup.ceps WHERE cep = ?;`, [cep]
  );
  return findCep;
};

const createAddressByCep = async (cep, logradouro, bairro, localidade, uf) => {
  const [createCep] = await connection.execute(
    `INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?);`,
    [cep, logradouro, bairro, localidade, uf]
  );
  return createCep;
};

module.exports = { getCep, createAddressByCep };
