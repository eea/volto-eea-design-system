function toHSL(color) {
  if (color.toHSL) {
    return color.toHSL();
  } else {
    throw new Error('Argument cannot be evaluated to a color');
  }
}

module.exports = {
  install(less, pluginManager, functions) {
    const darken = less.functions.functionRegistry.get('darken');
    const lighten = less.functions.functionRegistry.get('lighten');
    const saturate = less.functions.functionRegistry.get('saturate');
    const desaturate = less.functions.functionRegistry.get('desaturate');

    functions.add('darken', function (
      color,
      amount = new less.tree.Dimension(0),
      method,
    ) {
      try {
        const hsl = toHSL(color);

        if (hsl) {
          return darken(color, amount, method);
        }
      } catch (err) {
        if (['hsl', 'hsla'].includes(color.name)) {
          if (amount?.value) {
            color.args[2] = new less.tree.Call('calc', [
              new less.tree.Operation(
                '-',
                [
                  color.args[2],
                  new less.tree.Dimension(
                    amount.value,
                    new less.tree.Unit(null, null, '%'),
                  ),
                ],
                true,
              ),
            ]);
          }

          return color;
        } else if (color.name === 'var') {
          if (color.args[1]) {
            color.args[1] = functions.get('darken')(
              color.args[1],
              amount,
              method,
            );
          }
          return color;
        } else {
          throw err;
        }
      }
    });

    functions.add('lighten', function (color, amount, method) {
      try {
        const hsl = toHSL(color);

        if (hsl) {
          return lighten(color, amount, method);
        }
      } catch (err) {
        if (['hsl', 'hsla'].includes(color.name)) {
          if (amount?.value) {
            color.args[2] = new less.tree.Call('calc', [
              new less.tree.Operation(
                '+',
                [
                  color.args[2],
                  new less.tree.Dimension(
                    amount.value,
                    new less.tree.Unit(null, null, '%'),
                  ),
                ],
                true,
              ),
            ]);
          }

          return color;
        } else if (color.name === 'var') {
          if (color.args[1]) {
            color.args[1] = functions.get('lighten')(
              color.args[1],
              amount,
              method,
            );
          }
          return color;
        } else {
          throw err;
        }
      }
    });

    functions.add('saturate', function (color, amount, method) {
      try {
        const hsl = toHSL(color);

        if (hsl) {
          return saturate(color, amount, method);
        }
      } catch (err) {
        if (['hsl', 'hsla'].includes(color.name)) {
          if (amount?.value) {
            color.args[1] = new less.tree.Call('calc', [
              new less.tree.Operation(
                '+',
                [
                  color.args[1],
                  new less.tree.Dimension(
                    amount.value,
                    new less.tree.Unit(null, null, '%'),
                  ),
                ],
                true,
              ),
            ]);
          }

          return color;
        } else if (!color.rgb || color.name === 'var') {
          if (color.name === 'var' && color.args[1]) {
            color.args[1] = functions.get('saturate')(
              color.args[1],
              amount,
              method,
            );
            return color;
          }
          return null;
        } else {
          throw err;
        }
      }
    });

    functions.add('desaturate', function (color, amount, method) {
      try {
        const hsl = toHSL(color);

        if (hsl) {
          return desaturate(color, amount, method);
        }
      } catch (err) {
        if (['hsl', 'hsla'].includes(color.name)) {
          if (amount?.value) {
            color.args[1] = new less.tree.Call('calc', [
              new less.tree.Operation(
                '-',
                [
                  color.args[1],
                  new less.tree.Dimension(
                    amount.value,
                    new less.tree.Unit(null, null, '%'),
                  ),
                ],
                true,
              ),
            ]);
          }

          return color;
        } else if (color.name === 'var') {
          if (color.args[1]) {
            color.args[1] = functions.get('desaturate')(
              color.args[1],
              amount,
              method,
            );
          }
          return color;
        } else {
          throw err;
        }
      }
    });
  },
};
