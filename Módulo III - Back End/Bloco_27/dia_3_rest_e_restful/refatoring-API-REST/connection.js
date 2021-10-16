const mysql = require('mysql2/promise');

// const connection = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE
// });

const connection = mysql.createPool({
  host: 'localhost',
  user: 'gabiazevedo',
  password: '',
  database: 'rest_exercicios'
});

module.exports = connection;
