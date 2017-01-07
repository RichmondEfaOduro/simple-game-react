let webpack = require('webpack');
let path = require('path');

var BUILD_DIR = './static'
var APP_DIR = './src'

module.exports = {
//  entry: APP_DIR + '/index.jsx',
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/index.js'
    ]
  },
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
        test : /\.js?/,
        exclude: /node_modules/,
        loader : 'babel'
      }
    ]
  },
  plugins : [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true,
    contentBase: BUILD_DIR,
    inline: true,
    progress: true
  },
};
