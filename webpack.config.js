const path = require('path');
require('babel-register');

const config = {

  target: 'web',
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, 'dist', 'js'),
    filename: 'client.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [],
  devtool: 'source-map',
}

module.exports = config;
