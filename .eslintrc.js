const fs = require('fs');
const path = require('path');

const projectRootPath = fs.existsSync('./project')
  ? fs.realpathSync('./project')
  : fs.realpathSync(__dirname + '/../..');

let voltoPath = path.join(projectRootPath, 'node_modules/@plone/volto');
let configFile;
if (fs.existsSync(`${projectRootPath}/tsconfig.json`))
  configFile = `${projectRootPath}/tsconfig.json`;
else if (fs.existsSync(`${projectRootPath}/jsconfig.json`))
  configFile = `${projectRootPath}/jsconfig.json`;

if (configFile) {
  const jsConfig = require(configFile).compilerOptions;
  const pathsConfig = jsConfig.paths;
  if (pathsConfig['@plone/volto'])
    voltoPath = `./${jsConfig.baseUrl}/${pathsConfig['@plone/volto'][0]}`;
}

const voltoEslintConfig = require(`${voltoPath}/.eslintrc.core.js`);
const noRestrictedImports = voltoEslintConfig.rules[
  'no-restricted-imports'
].map((restriction) => {
  if (
    restriction?.name === 'semantic-ui-react' &&
    restriction.importNames?.includes('Image')
  ) {
    const importNames = restriction.importNames.filter(
      (name) => name !== 'Image',
    );
    return importNames.length ? { ...restriction, importNames } : null;
  }
  return restriction;
});

const { AddonRegistry } = require('@plone/registry/addon-registry');
const { registry } = AddonRegistry.init(projectRootPath);

// Extends ESlint configuration for adding the aliases to `src` directories in Volto addons
const addonAliases = Object.keys(registry.packages).map((o) => [
  o,
  registry.packages[o].modulePath,
]);

const addonExtenders = registry.getEslintExtenders().map((m) => require(m));

const defaultConfig = {
  extends: `${voltoPath}/.eslintrc`,
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@plone/volto', '@plone/volto/src'],
          ['@plone/volto-slate', '@plone/volto-slate/src'],
          ...addonAliases,
          ['@package', `${__dirname}/src`],
          ['@root', `${__dirname}/src`],
          ['~', `${__dirname}/src`],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
      node: {
        paths: [path.join(projectRootPath, 'core/packages/volto/node_modules')],
      },
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
      },
    },
  },
  rules: {
    // Keep the legacy Semantic UI Image until its callers can be migrated
    // without changing their rendered markup.
    'no-restricted-imports': noRestrictedImports.filter(Boolean),
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-no-target-blank': 'off',
  },
};

const config = addonExtenders.reduce(
  (acc, extender) => extender.modify(acc),
  defaultConfig,
);

module.exports = config;
