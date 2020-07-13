'use strict';

module.exports = {
  // Compile ./browser/index.js
  // this is what triggers line 11 on browser > index.js
  // translate all of this stuff to regular JavaScript,
  // starting with index.js
  entry: ['babel-polyfill', './browser/index.js'],
  output: {
    path: __dirname,
    //write the output to ./public/bundle.js
    filename: './public/bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    // What file extensions will webpack look
    extensions: ['.jsx', '.js', '.json'],
  },
  module: {
    loaders: [
      {
        // Use babel for files that end in js or jsx.
        test: /jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
    ],
  },
};
