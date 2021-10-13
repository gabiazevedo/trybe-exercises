require('dotenv').config();
const express = require('express');
const cepController = require('./controllers/cepController');
const app = express();

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong!' });
});

app.get('/cep/:cep', cepController.getCep(cep));

app.post('/cep', cepController.createNewCep);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
