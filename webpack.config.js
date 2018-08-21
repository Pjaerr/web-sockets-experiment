const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports =
    {
        mode: 'development',
        entry:
        {
            entry: __dirname + '\\src\\main.js'
        },
        devtool: 'inline-source-map',
        output:
        {
            path: __dirname + "/build",
            filename: 'bundle.js'
        },
    }