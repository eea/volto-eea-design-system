const path = require('path');
const plugins = (defaultPlugins) => {
  return defaultPlugins;
};
const modify = (config, { target, dev }, webpack) => {
  const themeConfigPath = `${__dirname}/theme/theme.config`;
  config.resolve.alias['../../theme.config$'] = themeConfigPath;
  config.resolve.alias['../../theme.config'] = themeConfigPath;

  const designSystem = '@eeacms/volto-eea-design-system';
  const designSystemPath =
    config.resolve.alias[designSystem] ||
    path.dirname(require.resolve(designSystem));
  const themeLessPath = path.resolve(`${designSystemPath}/../theme`);

  const themesPath = `${themeLessPath}/themes`;

  config.resolve.alias['eea-volto-themes'] = themesPath;
  config.resolve.alias['ui-theme'] = `${themesPath}/eea/`;
  config.resolve.alias['ui-assets'] = `${themesPath}/eea/assets`;

  return config;
};

module.exports = {
  plugins,
  modify,
};
