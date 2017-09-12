module.exports = function () {

  return {
    files: ['src/sum.js'],

    tests: ['__tests__/*.js'],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest',

    setup: function (wallaby) {
      const jestConfig = require('./package.json').jest;
      jestConfig.modulePaths = jestConfig.modulePaths.map(p => p.replace('<rootDir>', wallaby.projectCacheDir));
      wallaby.testFramework.configure(jestConfig);
    }
  };
};
