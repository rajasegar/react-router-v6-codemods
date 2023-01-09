module.exports = function transformer(file, api) {
  const j = api.jscodeshift;

  const root = j(file.source);

  const hasChildren = (name) => {
    return function filter(path) {
      return (
        j.JSXElement.check(path.value) &&
        path.value.children.some(
          (child) => j.JSXElement.check(child) && child.openingElement.name.name === name
        )
      );
    };
  };

  root
    .findJSXElements('Switch')
    .filter(hasChildren('Redirect'))
    .forEach((path) => {
      j(path)
        .findJSXElements('Redirect')
        .forEach((c) => {
          c.value.openingElement.name.name = 'Route';
          const attrs = c.value.openingElement.attributes;
          const [fromAttr] = attrs.filter((a) => a.name.name === 'from');
          const [toAttr] = attrs.filter((a) => a.name.name === 'to');

          const newEl = j.jsxElement(
            j.jsxOpeningElement(
              j.jsxIdentifier('Route'),
              [j.jsxAttribute(j.jsxIdentifier('to'), toAttr.value)],
              true
            ),
            null,
            [],
            false
          );

          const newAttrs = [
            j.jsxAttribute(j.jsxIdentifier('path'), fromAttr.value),
            j.jsxAttribute(
              j.jsxIdentifier('render'),
              j.jsxExpressionContainer(j.arrowFunctionExpression([], newEl))
            ),
          ];

          c.value.openingElement.attributes = newAttrs;
        });
    });

  return root.toSource();
};

module.exports.type = 'js';
