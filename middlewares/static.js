var express = require('express');
var path    = require('path');
var logger  = require('../lib/logger/logger.js');

var myPath = express.static('./public');

module.exports = myPath;