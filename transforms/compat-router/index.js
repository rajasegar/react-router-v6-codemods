module.exports = function transformer(file, api) {
  const j = api.jscodeshift;

  const root = j(file.source);

  const isCompatRouteImportFound = root.find(j.ImportDeclaration, {
    source: { value: 'react-router-dom-v5-compat' },
  }).length;

  if (!isCompatRouteImportFound) {
    let computedImport = j.importDeclaration(
      [j.importSpecifier(j.identifier('CompatRouter'))],
      j.literal('react-router-dom-v5-compat')
    );

    let body = root.get().value.program.body;
    body.unshift(computedImport);

    root
      .find(j.JSXElement, {
        openingElement: { name: { name: 'BrowserRouter' } },
      })
      .forEach((path) => {
        const children = path.value.children;
        const newEl = j.jsxElement(
          j.jsxOpeningElement(j.jsxIdentifier('CompatRouter'), [], false),
          j.jsxClosingElement(j.jsxIdentifier('CompatRouter')),
          children
        );
        path.value.children = [j.jsxText('\n  '), newEl, j.jsxText('\n')];
      });
  }

  return root.toSource({ quote: 'single' });
};

module.exports.type = 'js';
