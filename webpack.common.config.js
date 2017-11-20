'use strict';

var path                      = require('path');
var webpack                   = require('webpack');
var webpackSassLintPlugin     = require('sasslint-webpack-plugin');

var appEntryPath = path.resolve(__dirname, 'src', 'index.tsx');
var appHtmlEntryPath = path.resolve(__dirname, 'index.html');
var buildPath = path.resolve(__dirname, 'build');

module.exports = {
    context: __dirname,
    devtool: 'source-map',
    target: 'web',
    entry: [
        appEntryPath,
        appHtmlEntryPath,
    ],
    output: {
        path: buildPath,
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            // preloaders
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                exclude: /node_modules/,
            },
            // fonts and images
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: ['file-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jp(e*)g|svg|woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            },
            // code
            {
                test: /\.html$/,
                use: ['file-loader?name=[name].[ext]'],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1},
                    },
                    'postcss-loader',
                    'sass-loader',
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1},
                    },
                    'postcss-loader',
                ],
            },
            {
                test: /\.jsx?$/,
                use: [
                    'strict-loader',
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                'es2015',
                                'react',
                            ],
                            plugins: [
                                'react-html-attrs',
                                'transform-class-properties',
                                'transform-decorators-legacy',
                            ],
                            compact: false,
                            cacheDirectory: true,

                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                use: [
                    'strict-loader',
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                'es2015',
                                'react',
                            ],
                            plugins: [
                                'react-html-attrs',
                                'transform-class-properties',
                                'transform-decorators-legacy',
                            ],
                            compact: false,
                            cacheDirectory: true,

                        },
                    },
                    'awesome-typescript-loader'
                ],
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    resolve: {
        modules: [
            __dirname,
            path.join(__dirname, 'src'),
            'node_modules',
        ],
        extensions: ['.js', '.ts', '.tsx', '.jsx', 'png', 'scss'],
    }
}