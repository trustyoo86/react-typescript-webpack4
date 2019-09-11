'use strict';

const merge = require('webpack-merge');
const base = require('./base.config');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'cheap-eval-sourcemap',
  devServer: {
    port: 9000,
  },
});