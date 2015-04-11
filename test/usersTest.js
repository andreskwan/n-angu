//---------------------------
//Supertest
//para hacer solicitud al
//hace lo mismo que postman
var request  = require('supertest-as-promised');
var api      = require('../server.js');
var logger   = require('../lib/logger/logger.js');
// var async = require('async');
//correr pruebas con diferentes host
var host     = process.env.API_TEST_HOST || api;
request      = request(host);

function createNote(){
	// logger.info("TEST - BeforeEach");
	var id;
	var data = {
		usuario:{
				name : 'name Note 1',
				bio  : "bio 1",
				email: "email 1"
		  }
		 };
	return request.post('/usuarios')
		.set('Accept', 'application/json')
		.send(data)
		.expect(201)
		.then(function getusuario (res){
			this.id = res.body.usuario._id;
			// logger.info("TEST - createNote() - res.body",res.body);
		}.bind(this));
}

function createNotes(){
	var id;
	var data1 = {
					"usuario":{
				name : 'name Note data3',
				bio  : "bio data3",
				email: "email data3"
		  }
			};
	var data2 = {
					"usuario":{
				name : 'name Note data2',
				bio  : "bio data2",
				email: "email data2"
		  }
			};
	request.post('/usuarios')
		.set('Accept', 'application/json')
		.send(data1)
		.expect(201)
		.end();
	request.post('/usuarios')
		.set('Accept', 'application/json')
		.send(data2)
		.expect(201)
		.end();
}
//hacer una prueba del resource usuarios.js
//esta funcion describe el contexto de la prueba inicial
describe('resource /usuarios', function (){
	//La primera prueba sera POST
	describe('POST', function () {
		it('should return/create a new Object', function (done){
			// throw new Error('tengo hambre');
			// return true;
			//crear usuario nueva
			var data = {
					"usuario":{
				name : 'name Note data3',
				bio  : "bio data3",
				email: "email data3"
		  }
			};
			request.post('/usuarios')
				.set('Accept', 'application/json')
				.send(data)
				.expect(201)
				.expect('Content-Type', /application\/json/)
				.end(function (err, res){
					var body = res.body;
					expect(body).to.have.property('usuario');
					var usuario = body.usuario;
					var _id = body.usuario._id;
					// logger.info("TEST - POST - res.body:",res.body);
					// logger.info("TEST - POST - _id:",_id);
					//does the Object exist?
					expect(usuario).to.have.property('name', 'name Note data3');
					expect(usuario).to.have.property('bio', 'bio data3');
					expect(usuario).to.have.property('email', 'email data3');
					expect(usuario).to.have.property('_id');
					done();
				});
		});
	});
	describe('GET', function() {
		beforeEach(createNote);
		it('deberia obtener un usuario existente', function (done) {
			var id = this.id;
			// logger.info("TEST - GET - this.id: ",id);
			return request.get('/usuarios/'+id)
				.set('Accept', 'application/json')
				.send()
				.expect(200)
				.expect('Content-type', /application\/json/)
			.then(function assertions (res){
				var usuarios = res.body.usuarios;
				// logger.info("TEST - GET - res.body.usuarios['0']",usuarios['0']);
				var usuario  = usuarios[0];
				expect(res.body).to.have.property('usuarios');
				expect(usuario).to.have.property('_id', id);
				expect(usuario).to.have.property('name', 'name Note 1');
				expect(usuario).to.have.property('bio', 'bio 1');
				expect(usuario).to.have.property('email', 'email 1');
				done();
			}, done);
		});
		it('deberia obtener una lista de todas las usuarios', function (done){
			// createNotes();
			return request.get('/usuarios/')
				.send()
				.expect(200)
				.expect('Content-type', /application\/json/)
			.then(function assertions (res){
				var usuario = res.body;
				// logger.info("TEST - GET-ALL - res.body",res.body);
				// logger.info("TEST - GET-ALL - usuario['usuarios'][0]",usuario['usuarios'][0]);
				expect(res.body).to.have.property('usuarios')
					.and.to.be.an('array')
					.and.to.have.length.above(0);
					var usuario1 = usuario[0];
					// logger.info("TEST - GET-ALL - usuario1",usuario[0]);
				done();
			}, done);
		});
	});
	describe('PUT', function() {
		beforeEach(createNote);
		it('deberia actualizar un usuario existente', function (done) {
			var _id = this.id;
			return request.get('/usuarios/'+_id)
				.set('Accept', 'application/json')
				.send()
				.expect(200)
				.expect('Content-type', /application\/json/)
			.then(function putusuario (res){
				var usuarios   = res.body.usuarios;
				var usuarioActualizado = usuarios['0'];
				usuarioActualizado.name = "usuario actualizada Kwan";
				return request.put('/usuarios/'+_id)
					.send({usuario:usuarioActualizado})
					.expect(200)
					.expect('Content-type', /application\/json/);
			}, done)
			//eveluar que la usuario se haya actualizado correctamente
			.then(function assertions (res){
				// logger.info("in assertions");

				var usuarioValidar = res.body.usuario;
				// logger.info('res.body:',res.body);
				// logger.info('usuarioValidar',usuarioValidar);
				expect(res.body).to.have.property('usuario');
				expect(usuarioValidar).to.have.property('_id', _id);
				expect(usuarioValidar).to.have.property('name', 'usuario actualizada Kwan');
				expect(usuarioValidar).to.have.property('bio', 'bio 1');
				expect(usuarioValidar).to.have.property('email', 'email 1');
				done();
			}, done);
		});
	});
	describe('DELETE', function() {
		beforeEach(createNote);
		it('deberia borrar un usuario existente', function (done){
			var id = this.id;
			return request.delete('/usuarios/'+id)
			.expect(204)
			// .then(function assertObjectDestroyed(res){
			// 	return request.get('/usuarios/'+id)
			// 	.expect(400);
			// }, done)
			.then( function (){
				done();
			});
		});
	});
});