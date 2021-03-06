var path = require('path');

var config = {
    context: path.join(__dirname, 'client'),
    entry: [
        './index.js',
    ],
    output: {
        path: path.join(__dirname, 'public'),
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel'],
            },
        ],
    },
    resolveLoader: {
        root: [
            path.join(__dirname, 'node_modules'),
        ],
    },
    resolve: {
        root: [
            path.join(__dirname, 'node_modules'),
        ],
    },
};

module.exports = config;
