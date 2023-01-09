'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({ 
  name: 'remove-active-style',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`,
});