'use strict';

var path = require('path');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var config = {
  devtool: 'source-map',
  context: path.resolve(__dirname, 'app'),
  entry: {
    app: './app.js',
  },
  output: {
    filename: '[name].bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'app')
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'babel' },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.scss$/, loader: 'style!css!postcss!sass' },
      { test: /\.css$/, loader: 'style!css!postcss' }
    ]
  },
  postcss: function() {
    return [autoprefixer];
  },
  sassLoader: {
    includePaths: [
      path.join(__dirname, 'node_modules/bootstrap/scss')
    ]
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
      hash: true
    })
  ]
};

module.exports = config;
