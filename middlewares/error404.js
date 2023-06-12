const error404 = function (req,res,next){
	res.status(404).json({msj:`Error! 404. Ruta ${req.url} no encontrada`});
};

module.exports = error404;