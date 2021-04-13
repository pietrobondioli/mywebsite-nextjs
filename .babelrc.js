module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        alias: { '^@(.+)': './src/\\1', tests: './src/tests', underscore: 'lodash' },
      },
    ],
  ],
};
