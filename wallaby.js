var babel = require('babel-core');

module.exports = function (wallaby) {
  return {
    files: [
      'src-cls/**/*.js*',
      {pattern: 'src-cls/**/__tests__/*', ignore: true},
    ],

    tests: [
      'src-cls/**/__tests__/*.js'
    ],

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },

    env: {
      type: 'node', runner: 'node'
    },

    testFramework: 'mocha',

    debug: true,
    setup: function () {
      require('babel-polyfill');
    }
  };
};
