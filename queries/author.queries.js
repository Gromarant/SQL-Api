const queries = {
  getAuthorByEmail: `
  SELECT a.name, a.surname, a.email, a.image
  FROM authors AS a
  WHERE a.email=$1;`,
  getAllAuthors: ` SELECT a.name, a.surname, a.email, a.image
  FROM authors AS a
  ORDER BY a.name;`
};
module.exports = queries;