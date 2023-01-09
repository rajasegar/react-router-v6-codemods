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
    .filter(hasAttributes({ className: () => true, activeClassName: () => true }))

    .forEach((path) => {
      const attrs = path.value.openingElement.attributes;
      const [classNameAttr] = attrs.filter((a) => a.name.name === 'className');
      const [activeClassNameAttr] = attrs.filter((a) => a.name.name === 'activeClassName');
      const idx = attrs.findIndex((a) => a.name.name === 'activeClassName');
      // remove activeclass name
      attrs.splice(idx, 1);
      const propertyNode = j.property('init', j.literal('isActive'), j.identifier('isActive'));

      const arrFuncBody = j.binaryExpression(
        '+',
        j.literal(classNameAttr.value.value),
        j.conditionalExpression(
          j.identifier('isActive'),
          j.literal(` ${activeClassNameAttr.value.value}`),
          j.literal('')
        )
      );

      classNameAttr.value = j.jsxExpressionContainer(
        j.arrowFunctionExpression([j.objectPattern([propertyNode])], arrFuncBody)
      );
    });

  return root.toSource({ quote: 'single' });
};

module.exports.type = 'js';
