var logger       = require('../../lib/logger/logger.js');
var NoteModel = require('./schema/NoteSchema.js');

var Note = function (conf){
	conf = conf || {};
	//inicializacion del modelo
	this.model = NoteModel;
};

Note.prototype.post = function (data, callback){
	// logger.info("MODEL - SAVE - Note.prototype.save");
	// logger.info("MODEL - SAVE - data:", data);
	// A.findOneAndUpdate(conditions, update, options)
	this.model.findOneAndUpdate({
		title      : data.title,
		description: data.description,
		content    : data.content
	},
	data,
	//options
	{upsert:true})//creates a new document if it doesn't exist
	//returns a callback
	.exec(function (err, doc){
		//callback al controlador por que ya llego el objeto
		callback(doc);
		// debugger;
	});
};
Note.prototype.get = function (query, callback){
	// logger.info("MODEL - GET - query: ",query);
	//aqui deberia cambiar este objeto y solo dejar el query
	//de esta manera es mas plural, puedo buscar por otros criterios
	var obj = {"_id":query};
	// logger.info("MODEL - GET - data:", query);
	this.model.find(obj)
	.exec(function (err, doc){
		// logger.info("MODEL - GET - doc: ",doc);
		//callback al controlador
		if (err) logger.info("REST - GET - error",err);
		callback(doc);
	});
};
Note.prototype.getAll = function (callback){
	// logger.info("MODEL - GET - query: ",query);
	//aqui deberia cambiar este objeto y solo dejar el query
	//de esta manera es mas plural, puedo buscar por otros criterios
	// logger.info("MODEL - GET - data:", query);
	this.model.find()
	.exec(function (err, docs){
		// logger.info("MODEL - GET - doc: ",doc);
		//callback al controlador
		if (err) logger.info("REST - GET - error",err);
		// docs.map(function (doc){return doc.toObject();});
		for(var i = 0; i < docs.length; i++){
			docs[i] = docs[i].toJSON();
		}
		// debugger;
		callback(docs);
	});
};
Note.prototype.put = function (data, callback){
	// logger.info("MODEL - PUT - query: ",data);
	// logger.info("MODEL - PUT - data._id:",data._id);
	this.model.findByIdAndUpdate(data._id,
		{$set : {
			title      : data.title,
			description: data.description,
			content    : data.content
			}},
		{upsert:false}
	)
	//returns a callback
	.exec(function (err, doc){
		// debugger;
		//callback al controlador por que ya llego el objeto
		callback(doc);
	});
};

Note.prototype.delete = function (id, callback){
	// logger.info("MODEL - PUT - query: ",data);
	// logger.info("MODEL - DELETE - data._id:",data._id);
	this.model.findByIdAndRemove(id)
	//returns a callback
	.exec(function (err, doc){
		// debugger;
		//callback al controlador por que ya llego el objeto
		// logger.info("MODEL - DELETE - doc: ",doc);
		callback(doc);
	});
};

module.exports = Note;