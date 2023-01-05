'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({
  name: 'use-navigate',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`,
});
