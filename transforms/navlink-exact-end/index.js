module.exports = function transformer(file, api) {
  const j = api.jscodeshift;

  const root = j(file.source);

  root
    .find(j.JSXElement, {
      openingElement: { name: { name: 'NavLink' } },
    })
    .forEach((path) => {
      const [exactProp] = path.value.openingElement.attributes.filter(
        (a) => a.name.name === 'exact'
      );
      if (exactProp) {
        exactProp.name.name = 'end';
      }
    });

  return root.toSource();
};

module.exports.type = 'js';
