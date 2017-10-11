import webpack from 'webpack'

var config = {
  entry: __dirname + '/index.js',
  output: {
    path: __dirname,
    filename: '/public/bundle.js'
  }
};

module.exports = config;