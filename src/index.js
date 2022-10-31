import NarrowView from '@eeacms/volto-eea-design-system/components/theme/Views/NarrowView';
import LayoutAppExtrasView from '@eeacms/volto-eea-design-system/components/theme/Views/LayoutAppExtrasView';

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

  const appExtras = config.settings.appExtras || [];
  config.settings.appExtras = [
    ...appExtras,
    {
      match: '',
      component: LayoutAppExtrasView,
    },
  ];

  return config;
};

export default applyConfig;
