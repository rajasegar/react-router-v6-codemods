'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({
  name: 'match-path-arguments',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`,
});
