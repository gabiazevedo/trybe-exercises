// Checklist de ambiente bloco - 27.1;
// Criar a pasta model;
// Criar o arquivo connection.js dentro do diretório model;
// Criar o arquivo Example.js que vai conter tudo o que diz respeito àquela rota/radical;
// Importar a connection dentro do nosso arquivo Example.js para criar a conexão com o banco de dados;
// Criar o nosso script node com o seguinte comando: npm init -y;
// Instalar via linha de comando o driver mysql2 com o seguinte comando: npm i mysql2;
// Instalar via linha de comando o módulo express com o seguinte comando: npm i express;
// Instalar via linha de comando o nodemon para rodar automaticamente nosso servidor a cada modificação com o seguinte comando: npm i nodemon -D;
// Instalar o pacote body-parser com o seguinte comando: npm i body-parser;
// Acrescentar à aplicação as seguintes linhas de código: 

const bodyParser = require('bodyParser');
app.use(bodyParser.json());

// Ou utilizar essa linha de código;
const express = require('express');
const app = express();
app.use(express());

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'gabiazevedo',
    password: 'Ektopak110910#',
    database: 'model_example' });

module.exports = connection;

// Criar arquivo index.js neste arquivo ficarão armazenadas nossas requisições API;

// Para conectar com o MongoDB;
// É necessário instalar o driver MongoDB com o seguinte comando: npm install mongodb;

// models/connection.js

const { MongoClient } = require('mongodb');

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

let db = null;

const connection = () => {
    return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
    db = conn.db('model_example');
    return db;
    })
};

module.exports = connection;