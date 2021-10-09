const express = require('express');
const rescue = require('express-rescue');
const { readSimpsons, writeSimpsons } = require('./functionsAsync');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ message: `Hello, ${name}!` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (age > 17) return res.status(200).json({ message: `Hello, ${name}!`});
  if (age <= 17) return res.status(401).json({ message: 'Unauthorized' });
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.body;

  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.get('/simpsons', rescue(async (_req, res) => {
  const simpsons = await readSimpsons();
  
  if (!simpsons) return res.status(404).json({ message: 'File not found' });
  res.status(200).json(simpsons);
}));

app.get('/simpsons/:id', rescue(async (req, res) => {
  const simpsons = await readSimpsons();
 
  const findSimpsonsById = simpsons.find(({ id }) => id === req.params.id);

  if (!findSimpsonsById) return res.status(404).json({ message: 'Simpsons not found' });

  res.status(200).json(findSimpsonsById);
}));

app.post('/simpsons/:id', rescue(async (req, res) => {
  const simpsons = await readSimpsons();
  const { id, name } = req.body;

  if (simpsons.map(({ id }) => id).includes(id)) {
    return res.status(409).json({ message: 'id already exists' });
  }

  simpsons.push({ id, name });
  await writeSimpsons(simpsons);
  res.status(204).end();
}))

app.use((err, _req, res, _next) => {
  res.status(500).send(`Algo deu errado ${err.message}`);
});

app.listen(3000, () => {
  console.log('Ouvindo na porta 3000');
});
