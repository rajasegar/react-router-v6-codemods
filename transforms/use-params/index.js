module.exports = function transformer(file, api) {
  const j = api.jscodeshift;

  const root = j(file.source);

  const isCompatRouteImportFound = root.find(j.ImportDeclaration, {
    source: { value: 'react-router-dom-v5-compat' },
  }).length;

  if (!isCompatRouteImportFound) {
    let computedImport = j.importDeclaration(
      [j.importSpecifier(j.identifier('useParams'))],
      j.literal('react-router-dom-v5-compat')
    );

    let body = root.get().value.program.body;
    body.unshift(computedImport);
  }

  root
    .find(j.VariableDeclarator, {
      init: { object: { name: 'props' }, property: { name: 'match' } },
    })
    .forEach((path) => {
      const newDecl = j.variableDeclaration('const', [
        j.variableDeclarator(
          j.identifier('params'),
          j.callExpression(j.identifier('useParams'), [])
        ),
      ]);

      path.parent.replace(newDecl);
    });

  return root.toSource({ quote: 'single' });
};

module.exports.type = 'js';
