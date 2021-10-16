const connection = require('./connection');
const { ObjectId } = require('mongodb');

const createUser = async (_id, firstName, lastName, email) => {
  const newUser = await connection()
    .then((db) => db.collection('users').insertOne({ _id, firstName, lastName, email }))
    .then((result) => ({ id: result.insertedId, firstName, lastName, email }));
    return newUser;
};

const getAllUsers = async () => {
  const allUsers = await connection()
    .then((db) => db.collection('users').find().toArray());
    return allUsers.map(({ _id, firstName, lastName, email}) => {
      return {
        id: _id, 
        firstName,
        lastName,
        email,
    };
  });
};

const getUserById = async (id) => {
  const userById = await connection()
    .then((db) => db.collection('users').findOne(ObjectId(id)));
  return userById;
};

const updateUserById = async (id, { firstName, lastName, email, password }) => {
  const updateUser = await connection()
    .then((db) => {
      const userId = ObjectId(id);
      const newData = { firstName, lastName, email, password };

    return db.collection('users')
      .findOneAndUpdate({ _id: userId }, { $set: newData }, { returnNewDocument: true })
      .then((result) => result.value);
  });
  return updateUser;
}

const deleteUserById = async (id) => {
  const deleteUser = await connection()
    .then((db) => db.collection('users').findOneAndDelete({ _id: new ObjectId(id) }));
    return deleteUser;
}

module.exports = { createUser, getAllUsers, getUserById, updateUserById, deleteUserById };
