const express = require('express')
const morgan = require('./utils/morgan')
const error404 = require('./middlewares/error404')

// Módulos de Rutas
const entriesApiRoutes = require('./routes/entriesApiRoutes')
const authorsApiRoutes = require('./routes/authorsApiRoutes')

const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));
//Public folder
app.use(express.static('public'))

//Rutas 
app.use('/api/entries',entriesApiRoutes); // Rutas API entries
app.use('/api/authors',authorsApiRoutes); // Rutas API authors
app.use(error404); // Middleware Para ruta no encontrada (404)

app.listen(port, () => console.log(`listening on port http://localhost:${port}`));