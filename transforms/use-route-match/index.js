module.exports = function transformer(file, api) {
  const j = api.jscodeshift;

  const root = j(file.source);

  root
    .find(j.CallExpression, {
      callee: { name: 'useRouteMatch' },
    })
    .forEach((path) => {
      path.value.callee.name = 'useMatch';

      if (path.value.arguments.length > 0) {
        const args = path.value.arguments;

        args
          .filter((a) => a.type === 'ObjectExpression')
          .forEach((a) => {
            const [strictVal] = a.properties.filter((p) => p.key.name === 'strict');
            if (strictVal) {
              strictVal.key.name = 'end';
            }
            const [sensitiveVal] = a.properties.filter((p) => p.key.name === 'sensitive');
            if (sensitiveVal) {
              sensitiveVal.key.name = 'caseSensitive';
            }
          });
      }
    });

  return root.toSource();
};

module.exports.type = 'js';
