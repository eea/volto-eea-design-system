import BlockquoteElement from './ui/Blockquote/Blockquote';

const applyConfig = (config) => {
  // Apply blockquote slate customization
  config.settings.slate.elements['blockquote'] = BlockquoteElement;

  return config;
};

export default applyConfig;
