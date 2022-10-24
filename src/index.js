import NarrowView from '@eeacms/volto-eea-design-system/components/theme/Views/NarrowView';

const applyConfig = (config) => {
  config.settings = {
    ...(config.settings || {}),
    navDepth: 3,
  };

  // Custom Views layouts
  config.views.layoutViews = {
    ...(config.views.layoutViews || {}),
    narrow_view: NarrowView,
  };
  config.views.layoutViewsNamesMapping = {
    ...(config.views.layoutViewsNamesMapping || {}),
    narrow_view: 'Narrow view',
  };
  return config;
};

export default applyConfig;
