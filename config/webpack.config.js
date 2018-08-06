const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const PATHS = {
  build: path.join(__dirname, '..', 'server_dist'),
};

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    index: './app/index'
  },
  output: {
    path: PATHS.build,
    publicPath: '/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js|.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.json$/,
        use: {
          loader: 'json-loader'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('server_dist', {})
  ]
};
