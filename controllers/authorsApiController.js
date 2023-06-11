const authors = require('../models/authors'); // Importar el modelo de la BBDD

// GET http://localhost:3000/authors --> ALL
// GET http://localhost:3000/authors?email=hola@gmail.com --> por email
const getAuthors = async (req, res) => {
  let author;
  console.log('req.query.email', req.query.email);
  if (req.query.email) {
    author = await authors.getAuthorByEmail(req.query.email);
  }
  else {
    author = await authors.getAllAuthors();
  };
  res.status(200).json(author); // [] con las entries encontradas
};

// [POST] http://localhost:3000/api/authors/ 
const createAuthors = async (req, res) => {
  const newAuthor = req.body; // {title,content,email,category}
  const response = await authors.createAuthors(newAuthor);
  res.status(201).json({
      "items_created": response,
      data: newAuthor
  });
};

module.exports = {
  getAuthors,
  createAuthors,
};