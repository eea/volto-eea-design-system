import React from 'react';
import Blockquote from './Blockquote';
import { Image } from 'semantic-ui-react';

const CITATION =
  'An interconnected grid will help deliver the ultimate goal of the Energy Union, to make sure affordable, secure and sustainable energy, and also growth across the EU.';
const AUTHOR = 'President Juncker';
const IMG = 'https://react.semantic-ui.com/images/avatar/large/matthew.png';

export default {
  title: 'Components/Blockquote (Edw model)',
  component: Blockquote,
  argTypes: {
    citation: {
      title: 'Content',
      description: 'Blockquote citation',
      type: { name: 'string', required: true },
      // table: {
      //   defaultValue: { summary: '""' },
      // },
    },
    author: {
      description: 'Author of the citation',
      type: { name: 'string', required: true },
      // table: {
      //   defaultValue: { summary: '""' },
      // },
    },
  },
};

export const Default = (args) => (
  <Blockquote>
    <Blockquote.Content>{args.citation}</Blockquote.Content>
    <Blockquote.Meta>{args.author}</Blockquote.Meta>
  </Blockquote>
);

Default.args = {
  citation: CITATION,
  author: AUTHOR,
};

export const Reversed = (args) => (
  <Blockquote>
    <Blockquote.Meta>{args.author}</Blockquote.Meta>
    <Blockquote.Content>{args.citation}</Blockquote.Content>
  </Blockquote>
);

Reversed.args = {
  citation:
    'The Ministry of Environment & Energy is responsible for environmental policy, the preparation of plans and programmes, and overseeing their implementation. The Ministry is also in charge of the transposition of EU environmental Directives into national law.',
  author: '22 December 1989',
};

export const BlockquoteWithImageAside = (args) => (
  <Blockquote>
    <Blockquote.Content as="div">
      <Image src={args.src} size="tiny" floated="right" />
      {args.citation}
    </Blockquote.Content>
    <Blockquote.Meta>{args.author}</Blockquote.Meta>
  </Blockquote>
);

BlockquoteWithImageAside.args = {
  citation: CITATION,
  author: AUTHOR,
  src: IMG,
};

export const BlockquoteWithImage = (args) => (
  <Blockquote>
    <Blockquote.Content>
      <Image src={args.src} size="tiny" floated="right" />
      {args.citation}
    </Blockquote.Content>
    <Blockquote.Meta>{args.author}</Blockquote.Meta>
  </Blockquote>
);

BlockquoteWithImage.args = {
  citation: CITATION,
  author: AUTHOR,
  src: IMG,
};
