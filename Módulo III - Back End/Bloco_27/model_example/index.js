const express = require('express');
const Author = require('./models/Author');
const Books = require('./models/Books');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
    const authors = await Author.getAll();

    res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
    const { id } = req.params;
  
    const author = await Author.findById(id);
  
    if (!author) return res.status(404).json({ message: 'Not found' });
  
    res.status(200).json(author);
  });

app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  const books = (author_id) ?
    await Books.getBooksById(authorID) :
    await Books.getAllBooks();

  res.status(200).json(books);
});

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

// A essa aplicação, adicionamos uma nova rota GET /authors .
// Então fazemos como já havíamos aprendido anteriormente, passamos uma função que
// acessa os parâmetros req e res , que chama a função getAll do nosso model ,
// aguarda sua execução e então retorna um JSON com os dados enviados pelo banco.
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});