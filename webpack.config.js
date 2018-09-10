var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CriticalPlugin = require('webpack-plugin-critical').CriticalPlugin;

var commonConfig = {
    entry: {
        songs: ['babel-polyfill', path.join(__dirname, 'src', 'pages', 'songs', 'index')],
        contact: ['babel-polyfill', path.join(__dirname, 'src', 'pages', 'contact', 'index')]
    },
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
            },
            chunks: ['songs']
        }, {
            title: 'Contact',
            template: path.join(__dirname, 'src', 'index.html'),
            minify: {
                collapseWhitespace: true
            },
            chunks: ['contact']
        })
    ],
    module: {
        rules: [{
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader'
                    },
                ],
            }
        ]
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src', 'components'),
            assets: path.resolve(__dirname, 'src', 'assets'),
            styles: path.resolve(__dirname, 'src', 'styles'),
            utils: path.resolve(__dirname, 'src', 'utils'),
            data: path.resolve(__dirname, 'src', 'data')
        }
    },
    devtool: 'source-map'
};

var devConfig = {
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }, ]
    },
    devServer: {
        overlay: true,
        port: 3000
    },
};

var prodConfig = {
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        }),
        new CleanWebpackPlugin(['dist']),
        new CriticalPlugin({
            src: path.join(__dirname, 'src', 'index.html'),
            inline: true,
            minify: true,
            dest: path.join(__dirname, 'dist', 'index.html')
        })
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        }, ]
    },
};

module.exports = (env, argv) =>
    argv.mode === 'development' ?
    merge(commonConfig, devConfig) :
    merge(commonConfig, prodConfig);