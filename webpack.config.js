const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports =
    {
        mode: 'development',
        entry:
        {
            entry: __dirname + '\\Game.js'
        },
        devtool: 'source-map',
        output:
        {
            path: __dirname + "/build/static/",
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        }
    }