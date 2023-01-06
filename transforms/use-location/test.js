'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({ 
  name: 'use-location',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`,
});