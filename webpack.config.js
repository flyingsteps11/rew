const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATH  = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist')
};

module.exports = {
    entry: `${PATH.src}/index.js`,
    mode: "development",
    resolve: {
        extensions: ['.js','.jsx']
    },
    output: {
        path: PATH.dist,
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    esModule: false,
                    name: '[path][name].[ext]',
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.(json)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[folder]/[name].[ext]',
                    }
                }
            },
        ]
    },
    devServer: {
        stats: 'errors-only',
        historyApiFallback: true,
        open: true,
        contentBase: '/dist/',
        port: 3000,
        disableHostCheck: true,
        proxy: {
            '/api/**': {
                target: 'http://localhost:5000'
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React App',
            template: `${PATH.src}/index.html`,
            inject: 'body',
            alwaysWriteToDisk: true,
        }),
        new CopyWebpackPlugin([{
            from: `${PATH.src}/assets`,
            to:''
        }]),
        new HtmlWebpackHarddiskPlugin(),
    ],
};
