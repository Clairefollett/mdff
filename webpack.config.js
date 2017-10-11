import webpack from 'webpack'

var config = {
  entry: __dirname + 'src/index.js',
  output: {
    path: __dirname,
    filename: '/public/bundle.js'
  },
  module : {
    loaders : [
      {
        test : '/\.jsx?/',
        include : __dirname + 'src/index.js',
        loader : 'babel'
      }
    ]
  }
}

module.exports = config;