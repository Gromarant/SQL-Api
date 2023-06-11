const queries = {
  getAuthorByEmail: `
  SELECT a.name, a.surname, a.email, a.image
  FROM authors AS a
  WHERE a.email=$1;`,
  getAllAuthors: ` SELECT a.name, a.surname, a.email, a.image
  FROM authors AS a
  ORDER BY a.name;`,
  createAuthors: `INSERT INTO authors(name, surname,email, image) 
  VALUES ($1,$2,$3,$4)`,
};
module.exports = queries;