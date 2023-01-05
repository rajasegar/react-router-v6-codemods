'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({
  name: 'link-to-props',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`,
});
