module.exports = function transformer(file, api) {
  const j = api.jscodeshift;

  const root = j(file.source);

  root.find(j.ImportDeclaration, {}).forEach((decl) => {
    if (decl.value.specifiers.filter((s) => s.imported.name === 'StaticRouter').length > 0) {
      decl.value.source.value = 'react-router-dom/server';
    }
  });

  return root.toSource({ quote: 'single' });
};

module.exports.type = 'js';
