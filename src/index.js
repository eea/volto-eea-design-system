const applyConfig = (config) => {
  config.settings = {
    ...(config.settings || {}),
    navDepth: 3,
    megaMenuLayouts: {
      '/en/topics': {
        columns: 4,
        columnsWidth: [4, 8],
        itemsEquallySpread: true,
        hideChildrenFromNavigation: false,
      },
      '/en/countries': {
        columns: 4,
        columnsWidth: [8, 4],
        itemsEquallySpread: false,
        hideChildrenFromNavigation: false,
      },
      '/en/about': {
        columns: 1,
        columnsWidth: [3, 3, 3, 3],
        itemsEquallySpread: true,
        hideChildrenFromNavigation: false,
      },
    },
  };

  return config;
};

export default applyConfig;
