var app       = require('express')();
var logger    = require('../../lib/logger/logger.js');
var NoteModel = require('../models/noteModel.js');

app.route('/notas/:id?')
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
		var notaDB       = new NoteModel();
		// logger.info("REST - POST - req.body:",req.body);
		// logger.info("REST - POST - req.body.nota:",req.body.nota);
		var notaNueva    = req.body.nota;
		notaDB.post(notaNueva, function(doc){
			// debugger;
			// logger.info("doc.toJSON",doc.toJSON());
			res
			.status(201)
			.json({
				nota: doc
			});
		});
		// notaNueva.id     = Date.now();
		// db[notaNueva.id] = notaNueva;
	})
	//GET
	.get( function (req, res, next){
		var id   = req.params.id;
		var notaDB = new NoteModel();
		// debugger;
		if (!id){
			//in get all reach this place.
			//but next() delivers it
			return next();
		}
		// logger.info("REST - GET - id: ",id);
		notaDB.get(id, function(doc){
			// logger.info("REST - GET - doc:",doc);
			if (!doc) {
				res
				.status(400);
				return res.send('Not Found');
			}
			res
			.status(200)
			.json({
				notas:doc
			});
		});
	})
	//PUT
	.put( function (req, res, next){
		// logger.info("REST - PUT method");
		//obtengo id from params y la nota modificada
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

		var notaActualizada = req;
		// logger.info("REST - PUT - req: ", req.body);
		// logger.info("PUT - req.params: ",req.body);

		//remplazar la nota, con la nueva info
		//req.body.nota
		// db[id]              = req.body.nota;
		// logger.info("PUT - db[id] ",db[id]);
		// //respondo
		// var nota = db[id];
		// res
		// .status(200)
		// .json({
		// 	nota : db[id]
		// });
		var notaDB       = new NoteModel();
		// logger.info("req.body.nota:",req.body.nota);
		var notaNueva    = req.body.nota;
		//el id es importante
		notaDB.put(notaNueva, function(doc){
			// debugger;
			// logger.info("doc.toJSON",doc.toJSON());
			res
			.status(200)
			.json({
				nota: doc
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
		var notaDB       = new NoteModel();
		// logger.info("req.body.nota:",req.body.nota);
		// var nota    = req.body.nota;
		// el id es importante
		notaDB.delete(id, function(){
			// debugger;
			// logger.info("REST - DELETE - success");
			res
			.status(204)
			.send();
		});
	});
	app.get('/notas/', function (req, res){
		var notaDB = new NoteModel();
		notaDB.getAll(function(docs){
		// logger.info("REST - GET-ALL doc:",docs);
			res
			.json({
				notas:docs
			});
			// debugger;
		});
	});

module.exports = app;
