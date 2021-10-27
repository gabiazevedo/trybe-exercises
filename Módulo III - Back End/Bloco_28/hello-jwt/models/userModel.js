const connection = require('./connection');

const createUser = async (username, password) => {
  const user = await connection()
   .then((db) => db.collection('users').insertOne({ username, password }));
   return user;
};

module.exports = {
  createUser,
};
