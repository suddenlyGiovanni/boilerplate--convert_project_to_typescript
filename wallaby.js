module.exports = function(wallaby) {
  return {
    files: [
      'tsconfig.json',
      'jest.config.js',
      'src/**/*.js',
      'src/**/*.ts',
      '!src/**/*.test.ts',
      '!src/**/*.spec.ts',
    ],

    tests: ['test/*.test.ts', 'src/**/*.spec.ts', 'src/**/*.test.ts'],

    env: {
      type: 'node',
      runner: 'node',
    },

    testFramework: 'mocha',
    debug: true,
    reportConsoleErrorAsError: true,
    lowCoverageThreshold: 80,

    compilers: {
      '**/*.ts': wallaby.compilers.typeScript({ module: 'commonjs' }),
    },

    preprocessors: {
      '**/*.js': file =>
        require('@babel/core').transform(file.content, {
          sourceMap: true,
          filename: file.path,
          presets: [require('babel-preset-jest')],
        }),
    },
  }
}
