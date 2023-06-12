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
const createAuthor = async (req, res) => {
  const newAuthor = req.body; // {name, surname, email, image}
  const response = await authors.createAuthor(newAuthor);
  res.status(201).json({
    message: `usuario creado: ${newAuthor.email}`
  });
};

// [PUT] http://localhost:3000/api/authors/ 
//{message: "usuario actualizado: guillermu@thebridgeschool.es"}
const updateAuthor = async (req, res) => {
  const dataAuthor = req.body; // {name, surname, new_email, image, email}
  const response = await authors.updateAuthor(dataAuthor);
  res.status(200).json({
    message: `usuario actualizado: ${dataAuthor.email}`
  });
};

// [DELETE] http://localhost:3000/api/authors/
//{message: "Se ha borrado guillermu@thebridgeschool.es"}
const deleteAuthor = async (req, res) => {
  const dataAuthor = req.body; // {email}
  const response = await entry.deleteAuthor(dataAuthor);
  res.status(200).json({message: `Se ha borrado ${dataAuthor.email} `});
};

module.exports = {
  getAuthors,
  createAuthor,
  updateAuthor,
  deleteAuthor
};