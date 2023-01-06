'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({
  name: 'rename-compat-imports',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`,
});
