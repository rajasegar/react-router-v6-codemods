module.exports = function transformer(file, api) {
  const j = api.jscodeshift;

  const root = j(file.source);
  const isCompatRouteImportFound = root.find(j.ImportDeclaration, {
    source: { value: 'react-router-dom-v5-compat' },
  }).length;

  if (!isCompatRouteImportFound) {
    let computedImport = j.importDeclaration(
      [j.importSpecifier(j.identifier('useLocation'))],
      j.literal('react-router-dom-v5-compat')
    );

    let body = root.get().value.program.body;
    body.unshift(computedImport);
  }

  root
    .find(j.VariableDeclarator, {
      init: { object: { name: 'props' }, property: { name: 'location' } },
    })
    .forEach((path) => {
      const newDecl = j.variableDeclaration('const', [
        j.variableDeclarator(
          j.identifier('location'),
          j.callExpression(j.identifier('useLocation'), [])
        ),
      ]);

      path.parent.replace(newDecl);
    });

  return root.toSource({ quote: 'single' });
};

module.exports.type = 'js';
