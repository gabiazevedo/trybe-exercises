const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Agua Mineral 500 ml', price: 5.0 },
];

app.get('/drinks/search', (req, res) => {
  const { name, maxPrice, minPrice } = req.query;
  const filteredDrinks = drinks.filter((d) => d.name.includes(name)
    && d.price < parseInt(maxPrice)
    && d.price >= parseInt(minPrice));

    if(!name) return res.status(404).json('Drink não encontrado');

  res.status(200).json(filteredDrinks);
});

app.post('/drinks', (req, res) => {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });

  res.status(201).json({ message: 'Drink created successfully!!!' });
});

app.get('/drinks', (req, res) => {
  res.json(drinks.sort(function (a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  }));
});

app.post('/drinks', function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price });
  res.status(201).json({ message: 'Drink created successfully!'});
});

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drink = drinks.find((d) => d.id === parseInt(id));

  if(!drink) return res.status(404).json('Drink not found!!!');

  res.status(200).json(drink);
});

app.put('/drinks/:id',  (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const editDrinks = drinks.find((d) => d.id === parseInt(id));
  if(editDrinks === -1) {
    return res.status(404).json({ message: 'Drink not found' });
  };

  drinks[editDrinks] = { ...drinks[editDrinks], name, price };
  res.status(204).end();
});

app.delete('/drinks/:id', (req, res) => {
  const { id } = req.params;

  const deleteDrink = drinks.find((d) => d.id === parseInt(id));

  if(deleteDrink === -1) {
    return res.status(404).json({ message: 'Drink not found' });
  }
  
  drinks.splice(deleteDrink, 1);
  res.status(204).end();
});

app.put('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinkIndex = drinks.findIndex((d) => d.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Drink not found!' });

  drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };

  res.status(204).end();
});

app.delete('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drinkIndex = drinks.findIndex((d) => d.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Drink not found!' });

  drinks.splice(drinksIndex, 1);

  res.status(204).end();
});

app.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3000, () => {
  console.log('Rota "/drinks" sendo ouvida na porta 3000');
});
