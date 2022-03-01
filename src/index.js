import BlockquoteElement from './ui/Blockquote/Blockquote';

const applyConfig = (config) => {
  // Apply accordion block customization
  if (config.blocks.blocksConfig.accordion) {
    config.blocks.blocksConfig.accordion.semanticIcon = 'dropdown';
  // Apply blockquote slate customization
  if (config.settings.slate) {
    config.settings.slate.elements['blockquote'] = BlockquoteElement;
  }

  return config;
};

export default applyConfig;
