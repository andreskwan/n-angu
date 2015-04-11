var logger   = require('../../../lib/logger/logger.js');
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var UserSchema = new Schema({
		// _id        : Schema.Types.ObjectId,
		name : String,
		bio  : String,
		email: String
});


UserSchema.methods.blablabla = function (){
	// debugger;
	this.title = this.title + '-bla bla bla';
	return this.title;
};

var User = mongoose.model('User', UserSchema);

module.exports = User;