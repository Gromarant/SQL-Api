const queries = {
  getAuthorByEmail: `
  SELECT a.name, a.surname, a.email, a.image
  FROM authors AS a
  WHERE a.email=$1;`,
  getAllAuthors: ` SELECT a.name, a.surname, a.email, a.image
  FROM authors AS a
  ORDER BY a.name;`,
  createAuthor: `INSERT INTO authors(name, surname,email, image) 
  VALUES ($1,$2,$3,$4)`,
  updateAuthor: `UPDATE public.authors
	SET name=$1,
      surname=$2,
      email=$3,
      image=$4
	WHERE email=$5;`,
  deleteAuthor: `DELETE FROM public.authors
	WHERE email=$1`
};

module.exports = queries;