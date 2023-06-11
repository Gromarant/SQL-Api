const entry = require('../models/entries'); // Importar el modelo de la BBDD

// GET http://localhost:3000/entries --> ALL
// GET http://localhost:3000/entries?email=hola@gmail.com --> por email
const getEntries = async (req, res) => {
    let entries;
    if (req.query.email) {
        entries = await entry.getEntriesByEmail(req.query.email);
    }
    else {
        entries = await entry.getAllEntries();
    };
    res.status(200).json(entries); // [] con las entries encontradas
};

// POST http://localhost:3000/api/entries
const createEntry = async (req, res) => {
    const newEntry = req.body; // {title,content,email,category}
    const response = await entry.createEntry(newEntry);
    res.status(201).json({
        "items_created": response,
        data: newEntry
    });
};

// [PUT] http://localhost:3000/api/entries/
const updateEntry = async (req, res) => {
    const dataEntry = req.body; // {new_title,content,email,category, title}
    const response = await entry.updateEntry(dataEntry);
    res.status(200).json({
        "items_updates": response,
        data: dataEntry
    });
};

// [DELETE] http://localhost:3000/api/entries/ {message: "Se ha borrado la entry 'Título de noticia' "}
const deleteEntry = async (req, res) => {
    const dataEntry = req.body; // {new_title,content,email,category, title}
    const response = await entry.deleteEntry(dataEntry);
    res.status(200).json({message: `Se ha borrado la entry '${dataEntry.title}' `});
};

module.exports = {
    getEntries,
    createEntry,
    updateEntry,
    deleteEntry
};