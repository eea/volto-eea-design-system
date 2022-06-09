import React from 'react';
import Tag from './Tag';
import { Container } from 'semantic-ui-react';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    title: {
      name: 'title',
      description: 'Tag main text',
      type: { name: 'string', required: true },
    },
  },
};

export const Default = (args) => (
  <Container>
    <Tag href={args.href}>{args.title}</Tag>
  </Container>
);

Default.args = {
  title: 'subcategory 1',
  link: '/#',
};
