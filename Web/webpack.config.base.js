var webpack = require('webpack');
var path = require('path');
require('es6-promise').polyfill();

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
  entry: [APP_DIR + '/index.jsx'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
      root: APP_DIR,
      extensions: ['', '.js', '.jsx'],
      modulesDirectories: ['node_modules']
  },
  module: {
   preLoaders: [
        {
            test: /(\.jsx|\.js)$/,
            loaders: ['eslint'],
            include: APP_DIR,
            exclude: /node_modules/
        }
   ],
   loaders : [
     {
       test: /(\.jsx|\.js)$/,
       include : APP_DIR,
       loaders: ['react-hot', 'babel'],
       exclude: /node_modules/
     },
     {
         test: /\.css$/, 
         loader: "style-loader!css-loader"
     }
   ],
   noParse: /\.min\.js/
 }
};

module.exports = config;
