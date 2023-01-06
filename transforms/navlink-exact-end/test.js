'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({
  name: 'navlink-exact-end',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`,
});
