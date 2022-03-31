import React from 'react';
import Tag from './Tag';

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

export const Default = (args) => <Tag href={args.href}>{args.title}</Tag>;

Default.args = {
  title: 'subcategory 1',
  link: '/#',
};
