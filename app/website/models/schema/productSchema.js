var logger   = require('../../../lib/logger/logger.js');
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var productSchema = new Schema({
		// _id        : Schema.Types.ObjectId,
		name       : String,
		email      : String,
		gender     : String,
		description: String,
		shine      : String,
		price      : String,
		rarity     : String,
		color      : String,
		faces      : String,
		images     : [String],
		reviews    : [Schema.Types.Mixed]
});


productSchema.methods.blablabla = function (){
	// debugger;
	this.title = this.title + '-bla bla bla';
	return this.title;
};

var Product = mongoose.model('Product', productSchema);

module.exports = Product;