const express = require('express');
const ProductModel = require('../models/productModel');
const router = express.Router();

router.get('/', async (_req, res) => {
  const products = await ProductModel.getAll();
  if (!products) {
    res.status(404).json({ message: 'Not found'});
  };
  res.status(200).json(products);
  console.log('estou no GET');
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await ProductModel.getById(id);
  if (!product) {
    res.status(404).json({ message: 'Product not found' })
  };
  res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;
  const newProduct = await ProductModel.add(name, brand);

  if (!newProduct) {
    res.status(400).json({ message: 'Bad Request' });
  };
  res.status(201).json(newProduct);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, brand } = req.body;
  const products = await ProductModel.update(id, name, brand);
  
  if (!products || products === null) {
    res.status(400).json({ message: 'Bad Request' });
  };
  res.status(200).json(products);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deleteProduct = await ProductModel.exclude(id);
  
  res.status(204).json(deleteProduct);
});

module.exports = router;
