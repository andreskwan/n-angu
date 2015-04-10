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
		nota:{
				title       : 'Title Note 1',
				description: "Description 1",
				content    : "Content 1"
		  }
		 };
	return request.post('/notas')
		.set('Accept', 'application/json')
		.send(data)
		.expect(201)
		.then(function getnota (res){
			this.id = res.body.nota._id;
			// logger.info("TEST - createNote() - res.body",res.body);
		}.bind(this));
}

function createNotes(){
	var id;
	var data1 = {
					"nota":{
				title       : 'Title Note data3',
				description: "Description data3",
				content    : "Content data3"
		  }
			};
	var data2 = {
					"nota":{
				title       : 'Title Note data2',
				description: "Description data2",
				content    : "Content data2"
		  }
			};
	request.post('/notas')
		.set('Accept', 'application/json')
		.send(data1)
		.expect(201)
		.end();
	request.post('/notas')
		.set('Accept', 'application/json')
		.send(data2)
		.expect(201)
		.end();
}
//hacer una prueba del resource notas.js
//esta funcion describe el contexto de la prueba inicial
describe('resource /notas', function (){
	//La primera prueba sera POST
	describe('POST', function () {
		it('should return/create a new Object', function (done){
			// throw new Error('tengo hambre');
			// return true;
			//crear nota nueva
			var data = {
					"nota":{
				title       : 'Title Note data3',
				description: "Description data3",
				content    : "Content data3"
		  }
			};
			request.post('/notas')
				.set('Accept', 'application/json')
				.send(data)
				.expect(201)
				.expect('Content-Type', /application\/json/)
				.end(function (err, res){
					var body = res.body;
					expect(body).to.have.property('nota');
					var nota = body.nota;
					var _id = body.nota._id;
					// logger.info("TEST - POST - _id:",_id);
					// logger.info("TEST - POST - res.body:",res.body);
					//does the Object exist?
					expect(nota).to.have.property('title', 'Title Note data3');
					expect(nota).to.have.property('description', 'Description data3');
					expect(nota).to.have.property('content', 'Content data3');
					expect(nota).to.have.property('_id');
					done();
				});
		});
	});
	describe('GET', function() {
		beforeEach(createNote);
		it('deberia obtener un nota existente', function (done) {
			var id = this.id;
			// logger.info("TEST - GET - this.id: ",id);
			return request.get('/notas/'+id)
				.set('Accept', 'application/json')
				.send()
				.expect(200)
				.expect('Content-type', /application\/json/)
			.then(function assertions (res){
				var notas = res.body.notas;
				// logger.info("TEST - GET - res.body.notas['0']",notas['0']);
				var nota  = notas[0];
				expect(res.body).to.have.property('notas');
				expect(nota).to.have.property('_id', id);
				expect(nota).to.have.property('title', 'Title Note 1');
				expect(nota).to.have.property('description', 'Description 1');
				expect(nota).to.have.property('content', 'Content 1');
				done();
			}, done);
		});
		it('deberia obtener una lista de todas las notas', function (done){
			// createNotes();
			return request.get('/notas/')
				.send()
				.expect(200)
				.expect('Content-type', /application\/json/)
			.then(function assertions (res){
				var nota = res.body;
				// logger.info("TEST - GET-ALL - res.body",res.body);
				// logger.info("TEST - GET-ALL - nota['notas'][0]",nota['notas'][0]);
				expect(res.body).to.have.property('notas')
					.and.to.be.an('array')
					.and.to.have.length.above(0);
					var nota1 = nota[0];
					// logger.info("TEST - GET-ALL - nota1",nota[0]);
				done();
			}, done);
		});
	});
	describe('PUT', function() {
		beforeEach(createNote);
		it('deberia actualizar un nota existente', function (done) {
			var _id = this.id;
			return request.get('/notas/'+_id)
				.set('Accept', 'application/json')
				.send()
				.expect(200)
				.expect('Content-type', /application\/json/)
			.then(function putnota (res){
				var notas   = res.body.notas;
				var notaActualizado = notas['0'];
				notaActualizado.title = "nota actualizada Kwan";
				return request.put('/notas/'+_id)
					.send({nota:notaActualizado})
					.expect(200)
					.expect('Content-type', /application\/json/);
			}, done)
			//eveluar que la nota se haya actualizado correctamente
			.then(function assertions (res){
				// logger.info("in assertions");

				var notaValidar = res.body.nota;
				// logger.info('res.body:',res.body);
				// logger.info('notaValidar',notaValidar);
				expect(res.body).to.have.property('nota');
				expect(notaValidar).to.have.property('_id', _id);
				expect(notaValidar).to.have.property('title', 'nota actualizada Kwan');
				expect(notaValidar).to.have.property('description', 'Description 1');
				expect(notaValidar).to.have.property('content', 'Content 1');
				done();
			}, done);
		});
	});
	describe('DELETE', function() {
		beforeEach(createNote);
		it('deberia borrar un nota existente', function (done){
			var id = this.id;
			return request.delete('/productos/'+id)
			.expect(204)
			// .then(function assertObjectDestroyed(res){
			// 	return request.get('/productos/'+id)
			// 	.expect(400);
			// }, done)
			.then( function (){
				done();
			});
		});
	});
});