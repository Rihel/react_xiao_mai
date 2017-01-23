let webpack = require('webpack'),
    htmlwebpackplugin = require('html-webpack-plugin'),
    path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");


let ROOT = path.resolve(__dirname),
    APP_PATH = path.resolve(ROOT, 'app'),
    BUILD_PATH = path.resolve(ROOT, 'build');

module.exports = {
    entry: {
        app: path.resolve(APP_PATH, 'app.jsx'),
        vendors: ['react', 'react-dom', 'react-router']
    },
    output: {
        path: BUILD_PATH,
        filename: 'build.js'
    },
    module: {
        loaders: [{
                test: /\.(js|jsx)?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    compact: false,
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {
                test: /\.scss?$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?{browsers:["last 2 version","ios 7",">1%"]}!sass-loader'),
            },

            {
                test: /\.(gif|jpg|png)\??.*$/,
                loader: 'url-loader?limit=50000&name=img/[name].[ext]'
            },

            {
                test: /\.(svg|ttf|eot|woff|woff2)\??.*$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
        ]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new ExtractTextPlugin('main.css'),
        new htmlwebpackplugin({
            title: '你猜'
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}