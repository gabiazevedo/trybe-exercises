const express = require('express');
const app = express();

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

app.get('/drinks', (req, res) => {
  res.json(drinks.sort(function (a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  }));
});

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drink = drinks.find((d) => d.id === parseInt(id));

  if(!drink) return res.status(404).json('Drink not found!!!');

  res.status(200).json(drink);
});

app.listen(3000, () => {
  console.log('Rota "/drinks" sendo ouvida na porta 3000');
});
