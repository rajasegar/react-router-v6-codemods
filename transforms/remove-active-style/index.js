module.exports = function transformer(file, api) {
  const j = api.jscodeshift;

  const root = j(file.source);

  const hasAttributes = (attributeFilter) => {
    const attributeNames = Object.keys(attributeFilter);
    return function filter(path) {
      if (!j.JSXElement.check(path.value)) {
        return false;
      }
      const elementAttributes = Object.create(null);
      path.value.openingElement.attributes.forEach(function (attr) {
        if (!j.JSXAttribute.check(attr) || !(attr.name.name in attributeFilter)) {
          return;
        }
        elementAttributes[attr.name.name] = attr;
      });

      return attributeNames.every(function (name) {
        if (!(name in elementAttributes)) {
          return false;
        }

        const value = elementAttributes[name].value;
        const expected = attributeFilter[name];

        // Only when value is truthy access it's properties
        const actual = !value ? value : j.Literal.check(value) ? value.value : value.expression;

        if (typeof expected === 'function') {
          return expected(actual);
        }

        // Literal attribute values are always strings
        return String(expected) === actual;
      });
    };
  };

  root
    .findJSXElements('NavLink')
    .filter(hasAttributes({ style: (v) => true, activeStyle: (v) => true }))

    .forEach((path) => {
      const attrs = path.value.openingElement.attributes;
      const [styleAttr] = attrs.filter((a) => a.name.name === 'style');
      const cssProp = styleAttr.value.expression.properties[0].key.name;
      const [activeStyleAttr] = attrs.filter((a) => a.name.name === 'activeStyle');
      const idx = attrs.findIndex((a) => a.name.name === 'activeStyle');
      // remove activeStyle prop
      attrs.splice(idx, 1);
      const propertyNode = j.property('init', j.literal('isActive'), j.identifier('isActive'));

      const arrFuncBody = j.objectExpression([
        j.property(
          'init',
          j.literal(cssProp),
          j.conditionalExpression(
            j.identifier('isActive'),
            j.literal(activeStyleAttr.value.expression.properties[0].value.value),
            j.literal(styleAttr.value.expression.properties[0].value.value)
          )
        ),
      ]);

      styleAttr.value = j.jsxExpressionContainer(
        j.arrowFunctionExpression([j.objectPattern([propertyNode])], arrFuncBody)
      );
    });

  return root.toSource({ quote: 'single' });
};

module.exports.type = 'js';
