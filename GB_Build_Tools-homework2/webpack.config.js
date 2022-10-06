const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: resolve(__dirname, 'js', 'main.js'),
    output: {
        filename: 'main.[contenthash].js',
        path: resolve(__dirname, 'myBuild')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({ template: resolve(__dirname, 'index.html')}),
        new BundleAnalyzerPlugin
    ]
}