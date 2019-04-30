/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const _externals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  entry: {
    app: ['./../app.ts'],
  },
  output: {
    path: path.resolve(__dirname, '../server/dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  target: 'node',
  externals: _externals(),
  context: __dirname,
  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true,
    __filename: true,
    __dirname: true,
    setImmediate: true,
    path: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/,
        options: {
          fix: true,
        },
      },
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(ts)$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
};
