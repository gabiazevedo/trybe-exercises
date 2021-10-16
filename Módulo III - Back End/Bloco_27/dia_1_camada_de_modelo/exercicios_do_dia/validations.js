const isValidPassword = (req, res, next) => {
  const { password } = req.body;
  const PASSWORD_REGEX = /[a-z0-9]{6,}/ig;

  if (!password || password === '') {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  };

  if (typeof password !== 'string') {
    return res.status(400).json({ message: 'O campo "password" deve ser uma string' });
  }

  if (!PASSWORD_REGEX.test(password)) {
    return res.status(400).json({ error: 'true', message: 'O campo "password" deve ter pelo menos 6 caracteres' });
  };
  next();
};

const isValidEmail = (req, res, next) => {
  const { email } = req.body;
  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.([a-z]+))?$/i;

  if (!email || email === '') {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  };

  if (!regex.test(email)) {
    return res.status(400).json({ message: 'O campo "email" é inválido' });
  };
  next();
};

const isValidFirstName = (req, res, next) => {
  const { firstName } = req.body;

  if (!firstName || firstName === '') {
    return res.status(400).json({ message: 'O campo "firstName" é obrigatório' });
  }

  if (firstName.length < 3) {
    return res.status(400).json({ message: 'O campo "firstName" deve ter pelo menos 3 caracteres' });
  }
  next();
};

const isValidLastName = (req, res, next) => {
  const { lastName } = req.body;

  if (!lastName || lastName === '') {
    return res.status(400).json({ message: 'O campo "lastName" é obrigatório' });
  }
  next();  
};

module.exports = {
  isValidPassword,
  isValidEmail,
  isValidFirstName,
  isValidLastName,
};
