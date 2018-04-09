const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'vendor': ['react', 'react-dom'],
    'app': path.resolve(__dirname, '..', 'src', 'App.tsx'),
  },
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      'components': path.resolve(__dirname, '..', 'src', 'components'),
      'containers': path.resolve(__dirname, '..', 'src', 'containers'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('awesome-typescript-loader'),
            options: {
              // compile with TypeScript, then transpile with Babel
              useBabel: true,
            },
          },
        ],
      },
    ],
  },
  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};