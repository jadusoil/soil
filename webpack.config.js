const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || "8080";


module.exports = {
    entry: './src/index.js',
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules:  [
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Disqus',
            template: './public/index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin("[name].css")
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: '/dist/',
        host:HOST,
        port:PORT,
        compress: true,
        disableHostCheck: true,
        stats: {
            assets: true,
            timings: true,
            warnings: true,
            publicPath: true
        }
    }
};
