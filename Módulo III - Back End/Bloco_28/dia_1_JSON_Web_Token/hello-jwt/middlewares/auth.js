/* Esse arquivo conterá uma função que será usada como middleware
para as nossas requisições, validando todas as rotas em que nós 
solicitarmos autenticação. */

const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    const err = new Error('Token não encontrado');

    err.statusCode = 401;
    return next(err);
  }
  try {
    const payload = jwt.verify(token, SECRET);
    req.body = payload;
    return next();
  } catch (err) {
    err.statusCode = 401;
    return (err);
  }
};