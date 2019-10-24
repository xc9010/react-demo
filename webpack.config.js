const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './app.js', // 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'), // 定义输出目录
        filename: 'bundle.js' // 输出文件名
    },
    mode: 'production',
    module: {
        rules: [
          {
            test: /\.js$/, // 匹配.js文件
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            }
          }
        ]
      },
    plugins: [
        // 使用HtmlWebPackPlugin 编译html文件到dist下面
        new HtmlWebPackPlugin({
        template: './index.html',
        filename: path.resolve(__dirname, 'dist/index.html')
        })
    ]

};

