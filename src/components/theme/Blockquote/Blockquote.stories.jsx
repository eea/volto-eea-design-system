import React from 'react';
import Blockquote from './Blockquote';

export default {
  title: 'Components/Blockquote',
  component: Blockquote,
  argTypes: {
    citation: {
      description: 'Blockquote citation',
      type: { name: 'string', required: true },
      table: {
        defaultValue: { summary: '""' },
      },
    },
    author: {
      description: 'Author of the citation',
      type: { name: 'string', required: true },
      table: {
        defaultValue: { summary: '""' },
      },
    },
  },
};

const Template = (args) => <Blockquote {...args}></Blockquote>;

export const Default = Template.bind({});
Default.args = {
  citation:
    'An interconnected grid will help deliver the ultimate goal of the Energy Union, to make sure affordable, secure and sustainable energy, and also growth across the EU.',
  author: 'President Juncker',
};
