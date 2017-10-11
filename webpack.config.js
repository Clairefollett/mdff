var webpack = require('webpack')
var path = require('path')

var config = {
  entry: [
  './src/index.js',
  ],
  output: {
    path: path.join(__dirname, '/public/bundle.js'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module : {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
        {
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react']
          }
        }

    ]
  }
}

module.exports = config;