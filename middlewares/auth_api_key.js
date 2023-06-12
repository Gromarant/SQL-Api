//http://localhost:3000/api/authors?API_KEY=API_KEY_TO_USE
//http://localhost:3000/api/entries?API_KEY=API_KEY_TO_USE

const checkApiKey = function (req, res, next) {

    if (req.query.API_KEY === process.env.API_KEY_TO_USE) {
        next(); 
    } 
    else {
        res.status(401).send("Error. API KEY no proveída");
    }
  }
  
  module.exports = checkApiKey;