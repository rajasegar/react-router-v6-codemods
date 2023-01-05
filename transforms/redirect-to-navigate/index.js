module.exports = function transformer(file, api) {
  const j = api.jscodeshift;

  const root = j(file.source);

  root
    .find(j.JSXElement, {
      openingElement: {
        name: { name: 'Redirect' },
      },
    })
    .forEach((path) => {
      const openEl = path.value.openingElement;
      openEl.name.name = 'Navigate';
      const isPush = openEl.attributes.filter((a) => a.name.name === 'push').length > 0;
      if (!isPush) {
        openEl.attributes.push(j.jsxAttribute(j.jsxIdentifier('replace')));
      } else {
        openEl.attributes = openEl.attributes.filter((a) => a.name.name !== 'push');
      }
    });

  return root.toSource();
};

module.exports.type = 'js';
