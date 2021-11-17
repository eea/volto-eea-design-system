const path = require('path');
const plugins = (defaultPlugins) => {
  return defaultPlugins;
};
const modify = (config, { target, dev }, webpack) => {
  const themeConfigPath = `${__dirname}/theme/theme.config`;
  config.resolve.alias['../../theme.config$'] = themeConfigPath;
  config.resolve.alias['../../theme.config'] = themeConfigPath;

  const projectRootPath = path.resolve('.');
  const themesPath = `${projectRootPath}/node_modules/@eeacms/volto-eea-design-system/theme/themes`;

  config.resolve.alias['eea-volto-themes'] = themesPath;

  return config;
};

module.exports = {
  plugins,
  modify,
};
