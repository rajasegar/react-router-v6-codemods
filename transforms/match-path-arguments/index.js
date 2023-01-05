module.exports = function transformer(file, api) {
  const j = api.jscodeshift;

  const root = j(file.source);

  root
    .find(j.CallExpression, {
      callee: { name: 'matchPath' },
    })
    .forEach((path) => {
      const args = path.value.arguments;
      if (args[1].properties) {
        const [exact] = args[1].properties.filter((p) => p.key.name === 'exact');
        if (exact) {
          exact.key.name = 'caseSensitive';
          exact.value.value = false;
        }
        const [strict] = args[1].properties.filter((p) => p.key.name === 'strict');
        if (strict) {
          strict.key.name = 'end';
          strict.value.value = true;
        }
        // reset args
        path.value.arguments = [];
        // swap arg positions
        path.value.arguments[0] = args[1];
        path.value.arguments[1] = args[0];
      }
    });

  return root.toSource();
};

module.exports.type = 'js';
