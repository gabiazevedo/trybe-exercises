const bodyParser = require('body-parser');
const servicesCep = require('../services/cepServices');
const express = require('express');
const app = express();
const rescue = require('express-rescue');
app.use(bodyParser.json());

const getCep = rescue(async (req, res) => {
  const { cep } = req.params;

  const response = await servicesCep.isValidCep(cep);
  const CODE = response.error ? 400 : 200;

  res.status(CODE).json(response);
});

const createNewCep = rescue(async (req, res) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const response = await servicesCep.createNewCep(
    cep,
    logradouro,
    bairro,
    localidade,
    uf
  );

  const CODE = response.error ? 400 : 201;

  res.status(200).json(response);
});

module.exports = { getCep, createNewCep };