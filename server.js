/**
* Dependencies
*/
var logger        = require('./app/lib/logger/logger.js');
var http          = require('http');
var ExpressServer = require('./app/expressServer.js');
var mongoose      = require('mongoose');
// var socketIO      = require('./app/socketIO.js');
var conf          = require('./conf.json'); 

//normalizePort();
var port    = process.env.PORT || conf.port;
var express = new ExpressServer();
//create a web server
//express.app is the request listener 
//- to handle request and responses
//- added to the 'request' event.
//returns an instance of http.Server
var server  = http.createServer(express.app);

mongoose.connect('mongodb://'+conf.mongoDB.host+'/'+conf.mongoDB.name);

//parent module here is for testing
if (!module.parent) {
	server.listen(port, function (){
		logger.info('http://localhost:'+port);
	});
}else{
	//se exporta el servicio - app para que las pruebas lo consuman
	module.exports = server;
}