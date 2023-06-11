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
const authors = {
  getAuthorByEmail,
  getAllAuthors,
};

module.exports = authors;