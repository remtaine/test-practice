const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        main: './src/javascript/main.js',
        header: './src/javascript/layout/header.js',
        footer: './src/javascript/layout/footer.js',
        nav: './src/javascript/layout/nav.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Template Website",
            template: './src/html/main.html',
            filename: 'index.html',
            favicon: './src/images/favicon.ico',
            chunks: ['main', 'header', 'footer', 'nav']
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
    rules: [
        {
            test: /\.scss$/i,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ]
        },
        // {
        //     test: /\.css$/i,
        //     use: [
        //         'style-loader',
        //         'css-loader',
        //     ]
        // },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'images/[name][ext]',
            }
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },
    ]
    }
};