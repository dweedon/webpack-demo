'use strict';

var path = require('path');
var webpack = require('webpack');
var config = require('./wp.config');

config.output.path = path.resolve(__dirname, 'dist');
config.plugins = [
  new webpack.optimize.UglifyJsPlugin({
    mangle: {
      except: ['$super', '$', 'exports', 'require']
    }
  })
].concat(config.plugins);

module.exports = config;
