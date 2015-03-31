var logger      = require('../../lib/logger/logger.js');

var Home = function (conf){
	conf = conf || {};
};

Home.prototype.add = function (res, object){
	// debugger;
	logger.info('####################################################');
	logger.info('homeView.js: object', object);
	logger.info('####################################################');
	res.render('index', object);
};

module.exports = Home;