module.exports = function transformer(file, api) {
  const j = api.jscodeshift;

  const root = j(file.source);

  root
    .find(j.JSXElement, {
      openingElement: {
        name: { name: 'Link' },
      },
    })
    .forEach((path) => {
      const props = path.value.openingElement.attributes;

      props
        .filter((prop) => prop.name.name === 'to')
        .forEach((prop) => {
          const values = prop.value.expression ? prop.value.expression.properties : [];

          values.forEach((v) => {
            if (v.key.name === 'pathname') {
              prop.value = j.literal(v.value.value);
            }

            if (v.key.name === 'state') {
              const newProp = j.jsxAttribute(
                j.jsxIdentifier(v.key.name),
                j.jsxExpressionContainer(j.identifier('state'))
              );
              path.value.openingElement.attributes.push(newProp);
            }
          });
        });
    });

  return root.toSource();
};

module.exports.type = 'js';
