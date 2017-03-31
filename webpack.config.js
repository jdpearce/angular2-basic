const aotLoader = require('@ultimate/aot-loader');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: ['./src/main.ts']
    },
    output: {
        filename: '[name].js',
        publicPath: '/',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader", 
                    options: {
                        minimize: true
                    }
                }]
            },
            {
                test: /\.ts$/,
                loaders: ['@ultimate/aot-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, '../src')
        ),
        new aotLoader.AotPlugin({
            entryModule: './src/app/app.module#AppModule',
            tsConfig: './tsconfig.json'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};