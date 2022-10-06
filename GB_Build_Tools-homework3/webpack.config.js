const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: resolve(__dirname, 'js', 'main.js'),
    output: {
        filename: 'main.[contenthash].js',
        path: resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'img-optimize-loader',
                        options: {
                            compress: {
                                mode: 'high', 
                                webp: true,
                                gifsicle: true,
                                disableOnDevelopment: false,
                            },
                            outputPath:'image'
                        },
                    },
                ]
            },
            {
                test: /\.(mp3)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath:'audio'
                        },
                    },
                ]
            },
            {
                test: /\.(mp4)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath:'video'
                        },
                    },
                ]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({ template: resolve(__dirname, 'index.html')})
    ]
}
