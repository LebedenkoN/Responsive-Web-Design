var config = require('./webpack.config.base.js');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

config.devServer = {
    contentBase: './build',
    host: 'localhost',
    port: 3000,
    historyApiFallback: true
};
config.entry = [
  'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
  'webpack/hot/only-dev-server' // "only" prevents reload on syntax errors
].concat(config.entry);
config.plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('development')
        },
        __DEVELOPMENT__: true,
        __DEVTOOLS__: false,
        __AUTH_API_URL__: JSON.stringify('http://localhost:63691/'),
        __RESOURCE_API_URL__: JSON.stringify('http://localhost:51407/')
    }),
    new HtmlWebpackPlugin({
        template: 'index.html'
    }),
    new ExtractTextPlugin("stylesheets.css")
];
config.debug = true;
config.devtool = 'source-map';
module.exports = config;
