// Crie um modelo Book e defina o método getAll para retornar a lista de todos os livros.

const connection = require('./connection');

const serializeBooks = (bookData) => ({
  id: bookData.id,
  title: bookData.title,
  authorId: bookData.author_id
});

// Busca todos os Books;
const getAllBooks = async () => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books;',
  );
  return books.map(serializeBooks);
}

// Busca livros por Author;
const getBooksById = async (author_id) => {
  const [booksById] = await connection.execute(
    'SELECT * FROM model_example.books WHERE author_id=?;', [author_id]
  );
  return booksById;
}

// Busca livros por Id via parâmetro;
const findBookById = async (id) => {
  const [booksFound] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books WHERE id = ?;', [id]
  );

  if (booksFound.length === 0) return null;
  
  return booksFound.map(serializeBooks)[0];
};

const bookIsValid = (title, author_id) => {
  if (!title || title.length === '') return false;
  if (title.length < 3) return false;
  if (!author_id || author_id === '') return false;
  return true;
};

const createNewBook = async (title, author_id) => {
  const newBook = await connection.execute(
    'INSERT INTO model_example.books (title, author_id) VALUES (?,?);',
    [title, author_id],
    );
    return newBook;
}

module.exports = {
    getAllBooks, getBooksById, findBookById, bookIsValid, createNewBook,
};
