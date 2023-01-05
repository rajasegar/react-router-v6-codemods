module.exports = function transformer(file, api) {
  const j = api.jscodeshift;

  const root = j(file.source);

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
    .replaceWith((path) => {
      return j.variableDeclarator(
        j.identifier('navigate'),
        j.callExpression(j.identifier('useNavigate'), [])
      );
    });

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
      return j.callExpression(j.identifier('navigate'), [j.stringLiteral('/home')]);
    });

  return root.toSource({ quote: 'single' });
};

module.exports.type = 'js';

module.exports.parser = 'babel';
