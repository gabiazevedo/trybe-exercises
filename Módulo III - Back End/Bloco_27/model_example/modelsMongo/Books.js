const { ObjectId } = require('bson');
const connection = require('./connection');

// Busca todos os Books;
const getAllBooks = async () => connection()
  .then((db) => db.collection('books').find({}).toArray());


const getBooksById = async (author_id) => {
  const authorId = await connection()
  .then((db) => db.collection('books').find({ author_id: Number(author_id) }));
  return authorId;
}
      
// Busca livros por Id via parâmetro;
const findBookById = async (id) => {
  const booksFound = await connection()
    .then((db) => db.collection('books').findOne(new ObjectId(id)));

  if (!booksFound) return null;
  
  return booksFound;
};
      
const bookIsValid = (title, author_id) => {
  if (!title || title === '') return false;
  if (!author_id || author_id === '') return false;
  return true;
};

const createNewBook = async (title, author_id) => {
  await connection()
    .then((db) => db.collection('books').insertOne({ title, author_id }))
};

module.exports = { getAllBooks, getBooksById, findBookById, createNewBook, bookIsValid };
