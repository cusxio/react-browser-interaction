var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname,
    entry: './app.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.modernizrrc$/, loader: 'modernizr' },
        ]
    },
    resolve: {
    alias: {
        modernizr$: path.resolve(__dirname, '.modernizrrc'),
    },
},
}
