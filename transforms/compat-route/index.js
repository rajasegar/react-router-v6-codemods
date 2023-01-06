module.exports = function transformer(file, api) {
  const j = api.jscodeshift;

  const root = j(file.source);

  const isCompatRouteImportFound = root.find(j.ImportDeclaration, {
    source: { value: 'react-router-dom-v5-compat' },
  }).length;

  if (!isCompatRouteImportFound) {
    let computedImport = j.importDeclaration(
      [j.importSpecifier(j.identifier('CompatRoute'))],
      j.literal('react-router-dom-v5-compat')
    );

    let body = root.get().value.program.body;
    body.unshift(computedImport);
  }

  root
    .find(j.JSXElement, {
      openingElement: { name: { name: 'Route' } },
    })
    .forEach((path) => {
      path.value.openingElement.name.name = 'CompatRoute';
    });

  return root.toSource({ quote: 'single' });
};

module.exports.type = 'js';
