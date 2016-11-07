var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        common:[
            "./src/js/common/rem.js"
        ],
        index: "./src/js/index.js"
    },
    output: {
        path: "./dist/",
        filename: "js/[name].js",
        chunkFilename: "js/[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                // loader: "style-loader!css-loader"  初始
                // loader: "style-loader!css-loader?root=./img" root参数
                // loader: "style-loader!css-loader?modules" modules参数
                // loader: "style-loader!css-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]" localIdentName参数
                // loader: "style-loader!css-loader?minimize" minimize参数
                loader: "style!css-loader?modules&camelCase"
            },
            {
                // 在页面中加载图片示例：var imgstr = require("./imgs/3.png");
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url?limit=8&name=[name]_[hash].[ext]'
                    // 'image-webpack?{bypassOnDebug:true, progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(ejs|tpl|tmpl)$/,
                loader: 'ejs'
            },
            {
                // 编译es6
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            //把common中的所有的js打包成一个common.js
            name: "common",
            // filename: "common.js"
            // (Give the chunk a different name)
            minChunks: Infinity
            // (with more entries, this ensures that no other module
            //  goes into the vendor chunk)
        }),
        new HtmlWebpackPlugin({
            title: '标题标题',
            template: './src/index.html', // 源模板文件
            filename: './index.html', // 输出文件【注意：这里的根路径是module.exports.output.path】
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            chunks: ["common","index"]
        })
    ]
};
