const validateUserName = (req, res, next) => {
  const { username } = req.body;

  if (!username || username.length < 3)
    return res.status(400).json({ message: 'invalid data' });

  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

  if (!regex.test(email))
    return res.status(400).json({ message: 'invalid data' });
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (password.length < Number(3) || password.length > Number(8)) {
    return res.status(400).json({ message: 'invalid data' });
  };
  next();
};

module.exports = { validateUserName, validateEmail, validatePassword };
