var app          = require('express')();
var logger       = require('../../lib/logger/logger.js');
var UserModel = require('../models/UserModel.js');

app.route('/usuarios/:id?')
	.all( function (req, res, next) {
		// logger.info("REST - req.method: ",req.method);
		// logger.info("REST - req.path: ",req.path);
		// logger.info("REST - req.body: ",req.body);
		res.set('Content-Type', 'application/json');
		next();
	})
	//POST
	.post( function (req, res){
		// logger.info("REST - POST - method");
		var usuarioDB       = new UserModel();
		// logger.info("REST - POST - req.body:",req.body);
		// logger.info("REST - POST - req.body.usuario:",req.body.usuario);
		var usuarioNuevo    = req.body.usuario;
		usuarioDB.post(usuarioNuevo, function(doc){
			// debugger;
			// logger.info("doc.toJSON",doc.toJSON());
			res
			.status(201)
			.json({
				usuario: doc
			});
		});
		// usuarioNuevo.id     = Date.now();
		// db[usuarioNuevo.id] = usuarioNuevo;
	})
	//GET
	.get( function (req, res, next){
		var id   = req.params.id;
		var usuarioDB = new UserModel();
		// debugger;
		if (!id){
			//in get all reach this place.
			//but next() delivers it
			return next();
		}
		// logger.info("REST - GET - id: ",id);
		usuarioDB.get(id, function(doc){
			// logger.info("REST - GET - doc:",doc);
			if (!doc) {
				res
				.status(400);
				return res.send('Not Found');
			}
			res
			.status(200)
			.json({
				usuarios:doc
			});
		});
	})
	//PUT
	.put( function (req, res, next){
		// logger.info("REST - PUT method");
		//obtengo id from params y la usuario modificada
		// logger.info("PUT - server")
		// logger.info("REST - PUT - req.params: ",req.params);
		var id              = req.params.id;
		//if not id
		//what about if it is invalid?
		//what about if it not exist a note related?
		if (!id) {
	      return next();
    	}

		// logger.info("PUT - id",id);
		// //without modification
		// logger.info("PUT - db[id] ",db[id]);

		var usuarioActualizada = req;
		// logger.info("REST - PUT - req: ", req.body);
		// logger.info("PUT - req.params: ",req.body);

		//remplazar la usuario, con la nueva info
		//req.body.usuario
		// db[id]              = req.body.usuario;
		// logger.info("PUT - db[id] ",db[id]);
		// //respondo
		// var usuario = db[id];
		// res
		// .status(200)
		// .json({
		// 	usuario : db[id]
		// });
		var usuarioDB       = new UserModel();
		// logger.info("req.body.usuario:",req.body.usuario);
		var usuarioNuevo    = req.body.usuario;
		//el id es importante
		usuarioDB.put(usuarioNuevo, function(doc){
			// debugger;
			// logger.info("doc.toJSON",doc.toJSON());
			res
			.status(200)
			.json({
				usuario: doc
			});
		});
	})
	.delete( function (req, res){
		var id = req.params.id;
		//if null id but what about if there is not an obj
		//correlated with id in the db?
		if (!id){
			return next();
		}
		// logger.info("En Delete Antes db content: ",db)
		// delete db[id];
		// logger.info("En Delete Despues db content: ",db)
		// res
		// .status(204)
		// .send();
		var usuarioDB       = new UserModel();
		// logger.info("req.body.usuario:",req.body.usuario);
		// var usuario    = req.body.usuario;
		// el id es importante
		usuarioDB.delete(id, function(){
			// debugger;
			// logger.info("REST - DELETE - success");
			res
			.status(204)
			.send();
		});
	});
	app.get('/usuarios/', function (req, res){
		var usuarioDB = new UserModel();
		usuarioDB.getAll(function(docs){
		// logger.info("REST - GET-ALL doc:",docs);
			res
			.json({
				usuarios:docs
			});
			// debugger;
		});
	});

module.exports = app;
