/// <binding ProjectOpened='Hot' />
module.exports = process.env.NODE_ENV === 'production' ? require('./webpack.config.production.js') : require('./webpack.config.dev.js');
