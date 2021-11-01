const upload = (req, res, _next) => {

  if (req.fileDuplicated) {
    return res.status(409).send({ error: { message: 'File already exists' } });
  }

  if (req.validationError) {
    return res.status(403).send({ error: { message: 'Extension must be `png`' } });
  }
  return res.sens();
};

module.exports = upload;