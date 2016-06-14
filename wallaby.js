module.exports = function (wallaby) {

  process.env.NODE_PATH = require('path').join(wallaby.projectCacheDir, 'src-cls', 'app');

  return {
    files: [
      'src-cls/**/*.js*',
      {pattern: 'src-cls/**/__tests__/*-test.js', ignore: true}
    ],

    tests: [
      'src-cls/**/__tests__/*-test.js'
    ],

    compilers: {
      '**/*.js*': wallaby.compilers.babel()
    },

    env: {
      type: 'node', runner: 'node'
    },

    testFramework: 'mocha',

    debug: true,
    setup: function () {
      require.extensions['.jsx'] = require.extensions['.js'];
      require('./src-cls/__tests__/setup');
    }
  };
};
