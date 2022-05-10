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
  },
};

export const Default = (args) => (
  <Container>
    <Callout>
      <Callout.Content>{args.content}</Callout.Content>
    </Callout>
  </Container>
);

Default.args = {
  content: CITATION,
};
