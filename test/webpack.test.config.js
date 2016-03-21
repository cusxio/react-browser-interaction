var path = require('path');

module.exports = {
    context: __dirname,
    entry: './component.js',
    output: {
        path: __dirname,
        filename: 'component-bundle.js',
        libraryTarget: 'commonjs2',
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.modernizrrc$/, loader: 'modernizr' },
        ],
    },
    resolve: {
        alias: {
            modernizr$: path.resolve(__dirname, '.modernizrrc'),
        },
    },
    externals:[{ //eslint-disable-line
        react: true,
        'lodash/debounce': true,
        'lodash/throttle': true,
    }],
};
