module.exports = function transformer(file, api) {
  const j = api.jscodeshift;

  const root = j(file.source);

  const isCompatRouteImportFound = root.find(j.ImportDeclaration, {
    source: { value: 'react-router-dom-v5-compat' },
  }).length;

  if (!isCompatRouteImportFound) {
    let computedImport = j.importDeclaration(
      [j.importSpecifier(j.identifier('useNavigate'))],
      j.literal('react-router-dom-v5-compat')
    );

    let body = root.get().value.program.body;
    body.unshift(computedImport);
  }

  root
    .find(j.ImportDeclaration, {
      source: {
        value: 'react-router-dom',
      },
    })

    .forEach((path) => {
      path.value.specifiers
        .filter((s) => s.imported.name === 'useHistory')
        .forEach((s) => {
          s.imported.name = 'useNavigate';
        });
    });

  root
    .find(j.VariableDeclarator, {
      id: {
        name: 'history',
      },
    })
    .replaceWith(() => {
      return j.variableDeclarator(
        j.identifier('navigate'),
        j.callExpression(j.identifier('useNavigate'), [])
      );
    });

  // history.push
  root
    .find(j.CallExpression, {
      callee: {
        object: {
          name: 'history',
        },

        property: {
          name: 'push',
        },
      },
    })
    .replaceWith((path) => {
      return j.callExpression(j.identifier('navigate'), path.value.arguments);
    });

  // history.replace
  root
    .find(j.CallExpression, {
      callee: {
        object: {
          name: 'history',
        },

        property: {
          name: 'replace',
        },
      },
    })
    .replaceWith((path) => {
      return j.callExpression(j.identifier('navigate'), [
        ...path.value.arguments,
        j.objectExpression([
          j.objectProperty(j.identifier('replace'), j.booleanLiteral(true), false, false),
        ]),
      ]);
    });

  // history.go
  root
    .find(j.CallExpression, {
      callee: {
        object: {
          name: 'history',
        },

        property: {
          name: 'go',
        },
      },
    })
    .replaceWith((path) => {
      return j.callExpression(j.identifier('navigate'), path.value.arguments);
    });

  return root.toSource({ quote: 'single' });
};

module.exports.type = 'js';

module.exports.parser = 'babel';
