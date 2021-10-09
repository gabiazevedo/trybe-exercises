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
const getBooksById = async (authorId) => {
  const [booksById] = await connection.execute(
    'SELECT * FROM model_example.books WHERE author_id=?;', [authorId]
  );
  return booksById.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
}

// Busca livros por Id via parâmetro;
const findBookById = async (id) => {
  const [booksFound] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books WHERE id = ?;', [id]
  );

  if (booksFound.length === 0) return null;
  
  return booksFound.map(serializeBooks)[0];
};

module.exports = {
    getAllBooks, getBooksById, findBookById,
};
