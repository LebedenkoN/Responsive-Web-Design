/*
eslint-import-resolver-webpack did not extracted modulesDirectories from dev/prod webpack config.
Reason is not identified.
This file has been created to make eslint happy and eliminate modules resolving errors
*/
const config = {
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['app', 'node_modules']
    }
};

module.exports = config;
