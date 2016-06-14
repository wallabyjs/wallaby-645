var babel = require('babel-core');

module.exports = function (wallaby) {
  return {
    files: [
      'src-cls/**/*.js*',
      {pattern: 'src-cls/**/__tests__/*', ignore: true},
      {pattern: 'node_modules/babel-polyfill/dist/polyfill.js', instrument: false},
      {pattern: 'node_modules/react/dist/react-with-addons.js', instrument: false}
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
