'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({ 
  name: 'remove-redirect-inside-switch',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`,
});