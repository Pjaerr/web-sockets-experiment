const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports =
    {
        mode: 'development',
        entry:
        {
            entry: __dirname + '\\src\\main.js'
        },
        devtool: 'source-map',
        output:
        {
            path: __dirname + "/build/static/",
            filename: 'bundle.js'
        },
    }