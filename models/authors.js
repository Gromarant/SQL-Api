const pool = require('../utils/db_pgsql'); // Conexión a la BBDD
const queries = require('../queries/author.queries'); // Queries SQL

// GET
const getAuthorByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAuthorByEmail, [email])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    };
    return result
};

// GET
const getAllAuthors = async () => {
  let client, result;
  try {
      client = await pool.connect(); // Espera a abrir conexion
      const data = await client.query(queries.getAllAuthors)
      result = data.rows
  } catch (err) {
      console.log(err);
      throw err;
  } finally {
      client.release();
  };
  return result
};

// CREATE
const createAuthor = async (author) => {
  const { name, surname, email, image } = author;
  let client, result;
  try {
      client = await pool.connect(); // Espera a abrir conexion
      const data = await client.query(queries.createAuthor,[name, surname, email, image])
      result = data.rowCount
  } catch (err) {
      console.log(err);
      throw err;
  } finally {
      client.release();
  };
  return result
};

//UPDATE
const updateAuthor = async (author) => {
  const { name, surname, new_email, image, email } = author;
  let client, result;
  try {
      client = await pool.connect(); // Espera a abrir conexion
      const data = await client.query(queries.updateAuthor, [name, surname, new_email, image, email])
      result = data.rowCount
  } catch (err) {
      console.log(err);
      throw err;
  } finally {
      client.release();
  };
  return result
};

const authors = {
  getAuthorByEmail,
  getAllAuthors,
  createAuthor,
  updateAuthor,
};

module.exports = authors;