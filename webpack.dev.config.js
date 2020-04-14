// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
  entry: __dirname + "/src/index.js",//已多次提及的唯一入口文件
  output: {
    path: path.resolve(__dirname, 'bundle'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },
  resolve: {
    modules: ['node_modules', 'web_modules'],
    extensions: ['.js', '.jsx', 'css', '.json', '.csv', '.xlsx'],
  },
  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
    'shineout': 'Shineout',
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]__[local]--[hash:base64:5]']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
    })
  ],
};
