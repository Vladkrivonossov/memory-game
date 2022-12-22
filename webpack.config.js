const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: './src/script.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.[contenthash].js"
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(ts|tsx)$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.(png|jpg|gif)$/i,
      use: 'url-loader'
    }]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })],
  devServer: {
    open: true
  }
}