'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({
  name: 'remove-active-classname',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`,
});
