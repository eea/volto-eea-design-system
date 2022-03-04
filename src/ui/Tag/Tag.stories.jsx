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
    direction: {
      control: { type: 'select' },
      options: ['right', 'left'],
      description: 'tag container direction',
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
      description: 'category tag',
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
  <Tag className={args.direction}>
    <Tag.Title>{args.title}</Tag.Title>
    {args.tags.map((tag) => [
      <Tag.Tag className={tag.class} href={tag.href}>
        {tag.category}
      </Tag.Tag>,
    ])}
  </Tag>
);

Default.args = {
  title: 'tags:',
  direction: 'right',
  tags: [
    { category: '# subcategory 1', href: '#' },
    { category: '# subcategory 2', href: '#', class: 'teal' },
    { category: '# subcategory 3', href: '#', class: 'blue-dark' },
    { category: '# subcategory 4', href: '#', class: 'blue-light' },
  ],
};
