// var objDB = {};
var app      = require('express')();
var logger   = require('../logger/logger.js');
var objDB    = require('../../website/models/productsModel.js');

app.get('/objetos', function (req, res){
	objDB.find({}, function(err, objetos){
	   res
		.status(200)
		.set('Content-Type', 'application/json')
		.json({
		 	objetos: objetos
		});
	});
});

app.route('/objetos/:id?')
	.all( function (req, res, next) {
		// logger.info("req.method: ",req.method);
		// logger.info("req.path: ",req.path);
		// logger.info("req.body: ",req.body);
		res.set('Content-Type', 'application/json');
		next();
	})
	//POST /objetos + send(data)
	.post(function (req, res){
		var objetoNuevo    = req.body.objeto;
		// objetoNuevo.id     = Date.now();
		// objDB[objetoNuevo.id] = objetoNuevo;
		objDB.create(objetoNuevo, function (err, objeto){
			res
			.status(201)
			.json({
				objeto: objetoNuevo
			});
		});
	})
	//GET /objetos/:id
	.get( function (req, res, next){
		var id   = req.params.id;
		// logger.info("objDB content: ",objDB)
		var objeto = objDB[id];
		if (!id){
			return next();
		}
		if (!objeto) {
			res.status(400);
			return res.send('Not Found');
		}
		res
		.json({
			objetos:objeto
		});
	})
	//PUT /objetos/:id send(data)
	.put( function (req, res, next){
		//obtengo id from params y la objeto modificada
		// logger.info("PUT - server")
		// logger.info("PUT - req.params: ",req.params);
		var id              = req.params.id;
		//if not id
		//what about if it is invalid?
		//what about if it not exist a note related?
		if (!id) {
	      return next();
    	}

		// logger.info("PUT - id",id);
		// //without modification
		// logger.info("PUT - objDB[id] ",objDB[id]);

		var objetoActualizada = req;
		// logger.info("req: ", req);
		// logger.info("PUT - req.params: ",req.body);

		//remplazar la objeto, con la Nuevo info
		//req.body.objeto
		objDB[id]              = req.body.objeto;
		// logger.info("PUT - objDB[id] ",objDB[id]);
		//respondo
		var objeto = objDB[id];
		res
		.status(200)
		.json({
			objeto : objDB[id]
		});
	})
	.delete( function (req, res){
		var id = req.params.id;
		//if null id but what about if there is not an obj
		//correlated with id in the objDB?
		if (!id){
			return next();
		}
		// logger.info("En Delete Antes objDB content: ",objDB)
		delete objDB[id];
		// logger.info("En Delete Despues objDB content: ",objDB)
		res
		.status(204)
		.send();
	});

module.exports = app;
