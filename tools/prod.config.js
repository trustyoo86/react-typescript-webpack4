const merge = require('webpack-merge');
const config = require('./base.config');

module.exports = merge(config, {
  mode: 'production',
});