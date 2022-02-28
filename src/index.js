const applyConfig = (config) => {
  // Apply accordion block customization
  if (config.blocks.blocksConfig.accordion) {
    config.blocks.blocksConfig.accordion.semanticIcon = 'dropdown';
  }

  return config;
};

export default applyConfig;
