import React from 'react';
import { Divider, Container } from 'semantic-ui-react';

export default {
  title: 'Components/Underlined title',
  component: Divider,
  argTypes: {
    title: {
      description: 'Title text',
      table: {
        defaultValue: {
          summary: '',
        },
        type: {
          summary: 'string',
        },
      },
    },
    variation: {
      defaultValue: 'tertiary',
      options: ['primary', 'secondary', 'tertiary', 'white'],
      control: { type: 'select' },
      description: 'Color variation',
      table: {
        defaultValue: { summary: 'tertiary' },
        type: { summary: 'string' },
      },
    },
    borderBottom: {
      description: 'Bottom border for title',
      table: {
        defaultValue: { summary: 'true' },
        type: { summary: 'boolean' },
      },
    },
  },
};

export const Default = (args) => {
  return (
    <Container>
      <h2
        className={`color-fg-${args.variation} ${
          args.borderBottom ? 'border-bottom-1' : ''
        }`}
      >
        {args.title}
      </h2>
    </Container>
  );
};
Default.args = {
  title: 'At a glance',
  borderBottom: true,
};
