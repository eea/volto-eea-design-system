import ThemeGenerator from './ThemeGenerator/ThemeGenerator';

const applyConfig = (config) => {
  config.settings = {
    ...(config.settings || {}),
    navDepth: 3,
  };

  config.addonRoutes.push({
    path: '/**/controlpanel/theme',
    component: ThemeGenerator,
  });

  return config;
};

export default applyConfig;
