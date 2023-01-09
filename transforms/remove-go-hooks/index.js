module.exports = function transformer(file, api) {
  const j = api.jscodeshift;

  const root = j(file.source);

  // Rename useHistory import to useNavigate
  root
    .find(j.ImportDeclaration)
    .filter((i) => {
      return i.value.specifiers.filter((s) => s.imported.name === 'useHistory');
    })
    .forEach((path) => {
      const [oldSpec] = path.value.specifiers.filter((s) => s.imported.name === 'useHistory');
      if (oldSpec) {
        oldSpec.imported.name = 'useNavigate';
      }
    });

  root
    .find(j.VariableDeclarator, {
      init: { callee: { name: 'useHistory' } },
    })
    .forEach((path) => {
      path.value.init.callee.name = 'useNavigate';
      const prop = j.objectProperty(j.identifier('navigate'), j.identifier('navigate'));
      path.value.id.properties = [prop];
    });

  root.find(j.CallExpression, { callee: { name: 'go' } }).forEach((path) => {
    path.value.callee.name = 'navigate';
  });

  root
    .find(j.JSXExpressionContainer)
    .filter((path) => path.value.expression.name === 'goBack')
    .forEach((path) => {
      path.value.expression = j.arrowFunctionExpression(
        [],
        j.callExpression(j.identifier('navigate'), [j.literal(-1)])
      );
    });

  root
    .find(j.JSXExpressionContainer)
    .filter((path) => path.value.expression.name === 'goForward')
    .forEach((path) => {
      path.value.expression = j.arrowFunctionExpression(
        [],
        j.callExpression(j.identifier('navigate'), [j.literal(1)])
      );
    });

  return root.toSource();
};

module.exports.type = 'js';
