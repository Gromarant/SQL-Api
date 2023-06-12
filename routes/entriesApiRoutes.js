const express = require('express');
// Rutas de productos
const entriesApiController = require("../controllers/entriesApiController");
const entriesApiRouter = express.Router();

entriesApiRouter.get('/', entriesApiController.getEntries);
entriesApiRouter.post('/', entriesApiController.createEntry);
entriesApiRouter.put('/', entriesApiController.updateEntry);
entriesApiRouter.delete('/', entriesApiController.deleteEntry);

module.exports = entriesApiRouter;

/* 
{
    "title":"noticia desde Node",
    "content":"va a triunfar esto2",
    "email":"alejandru@thebridgeschool.es",
    "category":"sucesos"
}
    */
