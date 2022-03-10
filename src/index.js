import { BlockquoteElement } from './ui/Blockquote/Blockquote';

const applyConfig = (config) => {
  // Apply accordion block customization
  if (config.blocks.blocksConfig.accordion) {
    config.blocks.blocksConfig.accordion.semanticIcon = 'dropdown';
  }
  // Apply blockquote slate customization
  if (config.settings.slate) {
    config.settings.slate.elements['blockquote'] = BlockquoteElement;
  }
  // Apply volto-block-image-cards custom display
  if (config.blocks.blocksConfig.imagecards) {
    config.blocks.blocksConfig.imagecards.blockRenderers = {
      ...config.blocks.blocksConfig.imagecards.blockRenderers,
      cards_grid: {
        title: 'Cards grid',
        view: Cards,
        schema: getCardSchema,
        schemaExtender: getSchemaExtender,
      },
    };
  }

  return config;
};

export default applyConfig;
