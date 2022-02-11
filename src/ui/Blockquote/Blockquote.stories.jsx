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
    content: {
      name: 'Content',
      description: 'Blockquote content',
      type: { name: 'string', required: true },
    },
    meta: {
      name: 'Meta',
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

export const BlockquoteWithImageAside = (args) => (
  <Blockquote>
    <Blockquote.Content as="div">
      <Image src={args.imgSrc} size="tiny" floated="right" />
      {args.content}
    </Blockquote.Content>
    <Blockquote.Meta>{args.meta}</Blockquote.Meta>
  </Blockquote>
);

BlockquoteWithImageAside.args = {
  content: CITATION,
  meta: AUTHOR,
  imgSrc: IMG,
};

export const BlockquoteWithImage = (args) => (
  <Blockquote>
    <Blockquote.Content>
      <Image src={args.imgSrc} size="tiny" />
      {args.content}
    </Blockquote.Content>
    <Blockquote.Meta>{args.meta}</Blockquote.Meta>
  </Blockquote>
);

BlockquoteWithImage.args = {
  content: CITATION,
  meta: AUTHOR,
  imgSrc: IMG,
};
