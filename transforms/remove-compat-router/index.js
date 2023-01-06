module.exports = function transformer(file, api) {
  const j = api.jscodeshift;

  const root = j(file.source);

  root
    .find(j.ImportSpecifier, {
      imported: { name: 'CompatRouter' },
    })
    .forEach((path) => {
      j(path.parentPath.parentPath).remove();
    });

  root
    .find(j.JSXElement, {
      openingElement: { name: { name: 'CompatRouter' } },
    })
    .forEach((path) => {
      const children = path.value.children;
      const parent = path.parentPath.parentPath.node;

      j(path).remove();
      parent.children = children;
    });

  return root.toSource();
};

module.exports.type = 'js';
