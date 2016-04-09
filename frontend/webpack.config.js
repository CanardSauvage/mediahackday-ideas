// Modules
var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}

var ENV = process.env.npm_lifecycle_event;
var isTest = ENV === 'test';
var isMock = ENV === 'start';
var isBuild = ENV === 'build';

module.exports = function makeWebpackConfig() {

    var config = {

        devtool: 'source-map',
        debug: true,
        entry: isMock ? './src/app/app.mock' : './src/app/app',
        //entry: './src/app/app',
        //entry: {
        //    'polyfills': './app/js/polyfills.ts',
        //    'vendor': './app/js/vendor.ts',
        //    'main': './app/js/boot.ts'
        //},
        resolve: {
            extensions: ['', '.js', '.css', '.sass', '.html']
        },
        output: {
            path: './build/resources/main/public',
            filename: 'app/bundle.js'
        },
        module: {
            preLoaders: [
                {test: /\.js$/, loaders: ['source-map-loader'], exclude: /node_modules/,},
            ],
            loaders: [
                {test: /\.js$/, loader: 'babel', exclude: /node_modules/, query: {presets: ['es2015']}},
                {test: /\.scss$/, loaders: ['style', 'css', 'sass']},
                {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap')},
                {test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file?name=app/[path][name].[ext]?[hash]&context=./src/'},
                {test: /\.html$/, loader: 'file?name=[path][name].[ext]?[hash]&context=./src/'},
                {test: /\.json$/, loader: 'file?name=[path][name].[ext]?[hash]&context=./src/'}
            ]
        },
        devServer: {
            historyApiFallback: true
        },
        plugins: [
            new ExtractTextPlugin('styles.css')
        ]
    };


    return config;
}();
