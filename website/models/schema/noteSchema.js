var logger   = require('../../../lib/logger/logger.js');
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var noteSchema = new Schema({
		// _id        : Schema.Types.ObjectId,
		title      : String,
		description: String,
		content    : String
});

noteSchema.methods.blablabla = function (){
	// debugger;
	this.title = this.title + '-bla bla bla';
	return this.title;
};

var note = mongoose.model('note', noteSchema);

module.exports = note;