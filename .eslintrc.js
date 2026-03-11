const fs = require('fs');
const path = require('path');

const projectRootCandidates = [
  path.resolve(__dirname, '../../../'),
  path.resolve(__dirname, '../../../../'),
];

const projectRootPath = fs.existsSync('./project')
  ? fs.realpathSync('./project')
  : projectRootCandidates.find((candidate) =>
      fs.existsSync(path.join(candidate, 'jsconfig.json')),
    );

if (!projectRootPath) {
  throw new Error('Could not locate a project root containing jsconfig.json');
}
const jsConfig = require(
  path.join(projectRootPath, 'jsconfig.json'),
).compilerOptions;

const pathsConfig = jsConfig.paths;

let voltoPath = path.join(projectRootPath, 'node_modules/@plone/volto');

Object.keys(pathsConfig).forEach((pkg) => {
  if (pkg === '@plone/volto') {
    voltoPath = `./${jsConfig.baseUrl}/${pathsConfig[pkg][0]}`;
  }
});
const AddonConfigurationRegistry = require(`${voltoPath}/addon-registry.js`);
const reg = new AddonConfigurationRegistry(projectRootPath);

// Extends ESlint configuration for adding the aliases to `src` directories in Volto addons
const addonAliases = Object.keys(reg.packages).map((o) => [
  o,
  reg.packages[o].modulePath,
]);

module.exports = {
  extends: `${projectRootPath}/node_modules/@plone/volto/.eslintrc`,
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@plone/volto', '@plone/volto/src'],
          ...addonAliases,
          ['@package', `${__dirname}/src`],
          ['~', `${__dirname}/src`],
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
      },
    },
  },
  rules: {
    'react/jsx-no-target-blank': 'off',
  },
};
