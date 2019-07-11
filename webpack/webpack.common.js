const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/index.tsx'),
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, '../public')
    },
    context: path.resolve("src"),
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.tsx?$/,
                loader: "babel-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin({}),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            inject: 'body'
        })
    ]
};
