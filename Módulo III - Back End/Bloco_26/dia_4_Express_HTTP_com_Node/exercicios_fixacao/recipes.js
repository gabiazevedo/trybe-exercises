const express = require('express');
const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function (req, res) {
  res.json(recipes.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  }));
});

app.post('/recipes', function (req, res) {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime });
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name)
    && r.price < parseInt(maxPrice)
    && r.price >= parseInt(minPrice));
  
  if(!name) return res.status(404).json('Receita não encontrada!');
  res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));
  if(!recipe) return res.status(404).json('Recipe not found!');

  res.status(200).json(recipe);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
