var path = require('path');

const config = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader', options: {sourceMap: true}},
          {loader: 'sass-loader', options: {sourceMap: true}}
        ]
      }
    ]
  }
};

module.exports = config;
