const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


app.get('/ping', (_req, res) => {
  res.json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;

  if(!name) return res.status(404).json({ message: 'User not found!' });
  res.status(200).json({ message: `Hello, ${name}!` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if(parseInt(age, 10) > 17) {
    return res.status(200).json({ message: `Hello, ${name}!` })
  };

  if(parseInt(age, 10) <= 17) {
    return res.status(401).json({ message: 'Unathorized' })
  };
});

app.put('/users/:name/:age', (req, res) => {
   const { name, age } = req.body;

   res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade.`});
});

app.listen(3000, () => {
  console.log('Ouvindo a porta 3000')
});
