import React from 'react';
import Tags from './Tags';

export default {
  title: 'Components/Tags',
  component: Tags,
  argTypes: {
    title: {
      name: 'title',
      description: 'Tags main text',
      type: { name: 'string', required: true },
    },
    direction: {
      control: { type: 'select' },
      options: ['right', 'left'],
      description: 'tags container direction',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'right',
        },
      },
    },
    tags: {
      description: 'category tags',
      table: {
        type: {
          summary: 'Object',
        },
        defaultValue: {
          summary: ' "" ',
        },
      },
    },
  },
};

export const Default = (args) => (
  <Tags className={args.direction}>
    <Tags.Title>{args.title}</Tags.Title>
    {args.tags.map((tag) => [
      <Tags.Tag className={tag.class} href={tag.href}>
        {tag.category}
      </Tags.Tag>,
    ])}
  </Tags>
);

Default.args = {
  title: 'tags',
  direction: 'right',
  tags: [
    { category: '# subcategory 1', href: '#' },
    { category: '# subcategory 2', href: '#', class: 'teal' },
    { category: '# subcategory 3', href: '#', class: 'blue-dark' },
    { category: '# subcategory 4', href: '#', class: 'blue-light' },
  ],
};
