const express = require('express');
// Rutas de productos
const authorsApiController = require("../controllers/authorsApiController");
const authorsApiRouter = express.Router();

authorsApiRouter.get('/', authorsApiController.getAuthors);

module.exports = authorsApiRouter;