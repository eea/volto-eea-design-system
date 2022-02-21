import React from 'react';
import Blockquote from './Blockquote';

const CITATION =
  'An interconnected grid will help deliver the ultimate goal of the Energy Union, to make sure affordable, secure and sustainable energy, and also growth across the EU.';
const AUTHOR = 'President Juncker';

export default {
  title: 'Components/Blockquote',
  component: Blockquote,
  argTypes: {
    content: {
      name: 'citation',
      description: 'Blockquote content',
      type: { name: 'string', required: true },
    },
    meta: {
      name: 'meta',
      description: 'Author of the content',
      type: { name: 'string', required: true },
    },
  },
};

export const Default = (args) => (
  <Blockquote>
    <Blockquote.Content>{args.content}</Blockquote.Content>
    <Blockquote.Meta>{args.meta}</Blockquote.Meta>
  </Blockquote>
);

Default.args = {
  content: CITATION,
  meta: AUTHOR,
};

export const Reversed = (args) => (
  <Blockquote>
    <Blockquote.Meta>{args.meta}</Blockquote.Meta>
    <Blockquote.Content>{args.content}</Blockquote.Content>
  </Blockquote>
);

Reversed.args = {
  content:
    'The Ministry of Environment & Energy is responsible for environmental policy, the preparation of plans and programmes, and overseeing their implementation. The Ministry is also in charge of the transposition of EU environmental Directives into national law.',
  meta: '22 December 1989',
};
