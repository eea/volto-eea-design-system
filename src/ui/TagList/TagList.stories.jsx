import React from 'react';
import TagList from './TagList';
import Tag from '../Tag/Tag';
import { Container } from 'semantic-ui-react';
import { withReduxProvider } from '@root/../.storybook/redux-decorator';

export default {
  title: 'Components/Tag',
  component: TagList,
  decorators: [withReduxProvider],
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

export const List = (args) => (
  <Container>
    <TagList className={args.direction}>
      <TagList.Title>{args.title}</TagList.Title>
      <TagList.Content>
        {args.tags.map((tag, index) => [
          <Tag href={tag.href} key={index}>
            {tag.category}
          </Tag>,
        ])}
      </TagList.Content>
    </TagList>
  </Container>
);

List.args = {
  title: 'Tags:',
  direction: 'right',
  tags: [
    { category: 'land use 1', href: '#' },
    { category: 'land use 2', href: '#' },
    { category: 'land use 3', href: '#' },
    { category: 'land use 4', href: '#' },
  ],
};
