'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({
  name: 'redirect-to-navigate',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`,
});
