const express = require('express');
const entriesApiController = require("../controllers/entriesApiController");
const checkApiKey = require('../middlewares/auth_api_key');

const entriesApiRouter = express.Router();

entriesApiRouter.get('/', entriesApiController.getEntries);
entriesApiRouter.post('/', checkApiKey, entriesApiController.createEntry);
entriesApiRouter.put('/', checkApiKey, entriesApiController.updateEntry);
entriesApiRouter.delete('/', checkApiKey, entriesApiController.deleteEntry);

module.exports = entriesApiRouter;