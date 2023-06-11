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

// [PUT] http://localhost:3000/api/authors/ Actualiza los datos de un autor y retorna un status 200. Payload {message: "usuario actualizado: guillermu@thebridgeschool.es"}
const updateAuthor = async (req, res) => {
  const dataAuthor = req.body; // {name, surname, email, image}
  const response = await authors.updateAuthor(dataAuthor);
  res.status(200).json({
    message: `usuario actualizado: ${dataAuthor.email}`
  });
};



module.exports = {
  getAuthors,
  createAuthor,
  updateAuthor,
};