module.exports = {
  install(less, pluginManager, functions) {
    functions.add('vw', function (percentage) {
      return new less.tree.Call('calc', [
        new less.tree.Operation(
          '*',
          [
            new less.tree.Call('var', [
              new less.tree.UnicodeDescriptor('--vw'),
              new less.tree.Dimension(
                1,
                new less.tree.Unit(['vw'], null, 'vw'),
              ),
            ]),
            percentage,
          ],
          true,
        ),
      ]);
    });

    functions.add('vh', function (percentage) {
      return new less.tree.Call('calc', [
        new less.tree.Operation(
          '*',
          [
            new less.tree.Call('var', [
              new less.tree.UnicodeDescriptor('--vh'),
              new less.tree.Dimension(
                1,
                new less.tree.Unit(['vh'], null, 'vh'),
              ),
            ]),
            percentage,
          ],
          true,
        ),
      ]);
    });
  },
};
