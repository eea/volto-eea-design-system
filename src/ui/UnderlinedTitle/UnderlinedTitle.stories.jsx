import React from 'react';
import { Header, Divider, Container } from 'semantic-ui-react';

export default {
  title: 'Components/Underlined title',
  component: Divider,
  argTypes: {
    tag: {
      name: 'Tag',
      defaultValue: 'h2',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
      description: 'Heading HTML tag',
      table: {
        defaultValue: { summary: 'h2' },
        type: { summary: 'string' },
      },
    },
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
    bordered: {
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
      <Header
        as={args.tag}
        className={`${args.variation} ${args.bordered ? 'bordered' : ''}`}
      >
        {args.title}
      </Header>
    </Container>
  );
};
Default.args = {
  tag: 'h2',
  title: 'At a glance',
  bordered: true,
  variation: 'tertiary',
};
