const express = require('express');
const authorsApiController = require("../controllers/authorsApiController");
const checkApiKey = require('../middlewares/auth_api_key');
const authorsApiRouter = express.Router();

authorsApiRouter.get('/', authorsApiController.getAuthors);
authorsApiRouter.post('/', checkApiKey, authorsApiController.createAuthor);
authorsApiRouter.put('/', checkApiKey, authorsApiController.updateAuthor);
authorsApiRouter.delete('/', checkApiKey, authorsApiController.deleteAuthor);

module.exports = authorsApiRouter;