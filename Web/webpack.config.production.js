var config = require('./webpack.config.base.js');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

config.plugins = [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      },
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false,
      __AUTH_API_URL__: JSON.stringify('http://localhost:51407/'),
      __RESOURCE_API_URL__: JSON.stringify('http://localhost:51407/')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    }),
    new HtmlWebpackPlugin({
        template: 'index.html'
    }),
    new ExtractTextPlugin("stylesheets.css")
];
config.module.loaders[0].loaders = ['babel'];
module.exports = config;
