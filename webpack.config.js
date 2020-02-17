const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    resolve: {
        extensions: ['.js','.jsx']
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
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
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React App',
            template: `./src/index.html`,
            inject: 'body',
            alwaysWriteToDisk: true,
        }),
        new HtmlWebpackHarddiskPlugin()
    ],
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
};
