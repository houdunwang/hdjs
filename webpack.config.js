const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        app: './src/app.js',
        hdjs: './src/hdjs.js'
    },
    output: {
        //输出目录
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[name].min.js',
        libraryTarget: "umd",
        library: "util"
    },
    devServer: {
        //热加载使用的项目目录
        contentBase: path.join(__dirname, "dist"),
        port: 9000
    },
    plugins: [
        //压缩代码
        // new UglifyJSPlugin({
        //     output: {
        //         comments: false
        //     }
        // }),
        //清理打包目录
        new CleanWebpackPlugin(['dist']),
        //生成css文件
        new ExtractTextPlugin("app.css"),
        //模板文件并生成到dist目录中，用于热加载使用
        new HtmlWebpackPlugin({
            title: 'hdjs-vue',
            template: __dirname + '/src/module.html'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new CopyWebpackPlugin([
            {from: 'static', to: 'static'}
        ])
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            // {
            //     test: /\.(eot)$/,
            //     use: [
            //         {
            //             loader: "file-loader"
            //         }
            //     ]
            // },
            {
                test: /\.(woff|woff2|eot|ttf|svg|jpg|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: '[path][name].[ext]',
                        }
                    }
                    // {
                    //     loader: "url-loader",
                    //     options: {
                    //         limit: 10000,
                    //         prefix: 'img'
                    //         // mimetype: 'application/font-woff'
                    //     }
                    // }
                ]
            },
            // {
            //     test: /\.ttf$/,
            //     use: [
            //         {
            //             loader: "url-loader",
            //             options: {
            //                 limit: 10000,
            //                 mimetype: 'application/octet-stream'
            //             }
            //         }
            //     ]
            // },
            // {
            //     test: /\.svg$/, use: [
            //     {
            //         loader: "url-loader",
            //         options: {
            //             limit: 10000,
            //             mimetype: 'image/svg+xml'
            //         }
            //     }
            // ]
            // },
            // {
            //     test: /\.jpg|\.png$/, use: [
            //     {
            //         loader: "url-loader",
            //         options: {
            //             limit: 10000
            //         }
            //     }
            // ]
            // },
            {
                test: /\.css/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
                    use: ['css-loader']
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
                    use: ['css-loader', 'sass-loader'],
                })
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    }
};