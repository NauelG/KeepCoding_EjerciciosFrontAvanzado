var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var webpack = require('webpack');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');


var commonConfig = {
    entry: path.join(__dirname, 'src', 'index'),
    output: {
        filename: 'bundle[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Play',
            template: path.join(__dirname, 'src', 'index.html'),
            minify: {
                collapseWhitespace: true
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        })
    ],
    module: {
        rules: [{
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(jpg|png|svg|gif|jpe?g)$/,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src', 'components'),
            assets: path.resolve(__dirname, 'src', 'assets'),
            styles: path.resolve(__dirname, 'src', 'styles'),
            utils: path.resolve(__dirname, 'src', 'utils'),
        }
    }
};

var devConfig = {
    devServer: {
        open: true,
        overlay: true,
        port: 3000,
        hot: true,
        contentBase: path.join(__dirname, 'src'),
        watchContentBase: true
    }
};

var prodConfig = {};

module.exports = (env, argv) =>
    argv.mode === 'development' ?
    merge(commonConfig, devConfig) :
    merge(commonConfig, prodConfig);