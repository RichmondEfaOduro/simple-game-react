let webpack = require('webpack');
let path = require('path');

var BUILD_DIR = './static'
var APP_DIR = './src'

module.exports = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        exclude: /node_modules/,
        loader : 'babel'
      }
    ]
  }
};
