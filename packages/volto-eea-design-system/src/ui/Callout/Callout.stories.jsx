import React from 'react';
import { Container } from 'semantic-ui-react';
import Callout from './Callout';

const CITATION =
  'An interconnected grid will help deliver the ultimate goal of the Energy Union, to make sure affordable, secure and sustainable energy, and also growth across the EU.';

export default {
  title: 'Components/Callout',
  component: Callout,
  argTypes: {
    content: {
      name: 'content',
      description: 'Callout content',
      type: { name: 'string', required: true },
    },
    as: {
      name: 'as',
      description: 'HTML tag to be used. Default: blockquote',
      type: { name: 'string', required: false },
    },
    bold: {
      name: 'bold',
      description: 'Bolder text',
      type: { summary: 'boolean' },
    },
  },
};

export const Default = (args) => (
  <Container>
    <Callout as={args.as} bold={args.bold}>
      {args.content}
    </Callout>
  </Container>
);

Default.args = {
  content: CITATION,
  as: 'div',
  bold: false,
};
