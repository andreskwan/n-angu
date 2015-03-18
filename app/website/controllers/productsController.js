var app          = require('express')();
var logger       = require('../../lib/logger/logger.js');
var ProductModel = require('../models/productModel.js');

app.route('/productos/:id?')
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
		var productoDB       = new ProductModel();
		// logger.info("req.body.producto:",req.body.producto);
		var productoNuevo    = req.body.producto;
		productoDB.save(productoNuevo, function(doc){
			// debugger;
			// logger.info("doc.toJSON",doc.toJSON());
			res
			.status(201)
			.json({
				producto: doc
			});
		});
		// productoNuevo.id     = Date.now();
		// db[productoNuevo.id] = productoNuevo;
	})
	//GET
	.get( function (req, res, next){
		var id   = req.params.id;
		// logger.info("REST - GET - id: ",id);
		// var producto = db[id];
		// if (!id){
		// 	return next();
		// }
		// if (!producto) {
		// 	res.status(400);
		// 	return res.send('Not Found');
		// }
		var productoDB = new ProductModel();
		productoDB.get(id, function(doc){
			// logger.info("REST - GET - doc:",doc);
			res
			.json({
				productos:doc
			});
		});
	})
	//PUT
	.put( function (req, res, next){
		// logger.info("REST - PUT method");
		//obtengo id from params y la producto modificada
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

		var productoActualizada = req;
		// logger.info("REST - PUT - req: ", req.body);
		// logger.info("PUT - req.params: ",req.body);

		//remplazar la producto, con la nueva info
		//req.body.producto
		// db[id]              = req.body.producto;
		// logger.info("PUT - db[id] ",db[id]);
		// //respondo
		// var producto = db[id];
		// res
		// .status(200)
		// .json({
		// 	producto : db[id]
		// });
		var productoDB       = new ProductModel();
		// logger.info("req.body.producto:",req.body.producto);
		var productoNuevo    = req.body.producto;
		//el id es importante
		productoDB.put(productoNuevo, function(doc){
			// debugger;
			// logger.info("doc.toJSON",doc.toJSON());
			res
			.status(200)
			.json({
				producto: doc
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
		var productoDB       = new ProductModel();
		// logger.info("req.body.producto:",req.body.producto);
		// var producto    = req.body.producto;
		// el id es importante
		productoDB.delete(id, function(){
			// debugger;
			// logger.info("REST - DELETE - success");
			res
			.status(204)
			.send();
		});
	});

module.exports = app;
