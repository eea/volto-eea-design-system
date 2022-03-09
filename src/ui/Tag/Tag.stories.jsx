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
    background: {
      control: { type: 'select' },
      options: ['default', 'pine-green', 'teal', 'blue-dark', 'blue-light'],
      description: 'tag background',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'default',
        },
      },
    },
  },
};

export const Default = (args) => (
  <Tag className={args.background} href={args.href}>
    {args.title}
  </Tag>
);

Default.args = {
  title: 'subcategory 1',
  link: '/#',
};
