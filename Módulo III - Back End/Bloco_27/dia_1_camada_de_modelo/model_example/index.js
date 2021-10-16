const express = require('express');
const Author = require('./models/Author');
const Books = require('./models/Books');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Rota para buscar todos os autores;
app.get('/authors', async (_req, res) => {
    const authors = await Author.getAll();

    res.status(200).json(authors);
});

// Rota para buscar autores pelo id do parâmetro;
app.get('/authors/:id', async (req, res) => {
    const { id } = req.params;
  
    const author = await Author.findById(id);
  
    if (!author) return res.status(404).json({ message: 'Not found' });
  
    res.status(200).json(author);
  });

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

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
      return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso! '});
});

// Ainda usando a tabela books como referência crie uma rota books do tipo POST
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
