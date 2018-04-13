const webpackConfig = require('./tools/dev.config');

module.exports = function (config) {
  config.set({
    // framework
    frameworks: ['mocha', 'chai', 'phantomjs-shim'],
    // target browser
    browsers: ['PhantomJS'],
    // files
    files: [
      // { pattern: 'node_modules/babel-polyfill/browser.js', instrument: false },
      './tools/webpack.test.config.js',
    ],
    reporters: ['verbose'],
    preprocessors: {
      './tools/test.config.js': ['webpack', 'sourcemap'],
    },
    webpack: {
      mode: webpackConfig.mode,
      module: webpackConfig.module,
      resolve: webpackConfig.resolve,
    },
    webpackServer: {
      noInfo: true,
    },
  });
};