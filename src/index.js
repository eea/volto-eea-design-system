const applyConfig = (config) => {
  config.settings = {
    ...(config.settings || {}),
    navDepth: 3,
  };
  return config;
};

export default applyConfig;
