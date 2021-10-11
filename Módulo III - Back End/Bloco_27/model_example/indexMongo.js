const express = require('express');
const Books = require('./modelsMongo/Books');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Busca livros pelo author;
app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  const books = (author_id) ?
    await Books.getBooksById(author_id) :
    await Books.getAllBooks();

  res.status(200).json(books);
});

// Busca livros pelo id via parâmetro de requisição;
app.get('/books/:id', async (req, res) => {
    const { id } = req.params;
    const books = await Books.findBookById(id);
    
    if (!books) return res.status(404).json({ message: 'Book not  found' });
    res.status(200).json(books);
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  if (!await Books.bookIsValid(title, author_id)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  };

  await Books.createNewBook(title, author_id);

  res.status(201).json({ message: 'Livro criado com sucesso!' });
}); 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
