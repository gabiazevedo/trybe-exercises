const router = require('express').Router();

const {
  validateUserName,
  validateEmail,
  validatePassword
} = require('./validations');

router.post('/register',
  validateUserName,
  validateEmail,
  validatePassword,
  (_req, res) => {
  res.status(201).json({ message: 'user created' });
});

module.exports = router;