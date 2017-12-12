const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry:  './app.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    "presets": ["env"]                    
                }
            }
        ]
    }
}




