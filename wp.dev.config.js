'use strict';

var path = require('path');
var config = require('./wp.config');

config.output.path = path.resolve(__dirname, 'app');

module.exports = config;
