const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const { isValidPassword, isValidEmail,
  isValidFirstName, isValidLastName, } = require('./validations');
const Users = require('./models/User');
const app = express();

app.use(bodyParser.json());

app.get('/user', rescue( async (_req, res) => {
  const allUsers = await Users.getAllUsers();
  
  (allUsers) ? res.status(201).json(allUsers) : res.status(201).json([]);

}));

app.get('/user/:id', rescue( async (req, res) => {
  const { id } = req.params;
  const userById = await Users.getUserById(id);

  (userById) ? res.status(200).json(userById) : res.status(404).json({ message: 'User not found' });
}));

app.put('/user/:id',
  isValidPassword,
  isValidEmail,
  isValidFirstName,
  isValidLastName,
  rescue( async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;

  const newUser = await Users.updateUserById(id, { firstName, lastName, email, password });

  if (!newUser) return res.status(404).json({ message: 'User not found' })
  
  res.status(200).json(newUser)
}));

app.post('/user',
  isValidPassword,
  isValidEmail,
  isValidFirstName,
  isValidLastName,
  rescue(async (req, res) => {
    const { id, firstName, lastName, email } = req.body;
    const newUser = await Users.createUser(id, firstName, lastName, email);
    res.status(201).json(newUser);
}));

app.delete('/user/:id', rescue( async (req, res) => {
  const { id } = req.params;

  const deletedUser = Users.deleteUserById(id);

  res.status(200).json(deletedUser);
}));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
 console.log(`Ouvindo a porta ${PORT}`);
});
