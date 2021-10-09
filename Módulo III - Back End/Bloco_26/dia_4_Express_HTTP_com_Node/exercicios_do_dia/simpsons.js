const express = require('express');
const fs = require('fs').promises;
const app = express();

function getSimpsons() {
  return fs.readFile('./simpsons.json', 'utf8')
           .then(data => JSON.parse(data));
};

const simpsons = getSimpsons();

app.get('/simpsons', simpsons, (_req, res) => {
  res.status(500).json({ message: 'Internal Server Error' });
  res.status(200).send(simpsons);
});

app.listen(3001, () => {
  console.log('Ouvindo a porta 3000')
});