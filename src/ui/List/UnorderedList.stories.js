import React from 'react';
import { List } from 'semantic-ui-react';

export default {
  title: 'Components/List/Unordered list',
  component: List,
  argTypes: {
    animated: {
      description:
        'a list can animate to set the current item apart from the list',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    divided: {
      description: 'a list can show divisions between content',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    horizontal: {
      description: 'a list can be formatted to have items appear horizontally',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    items: {
      description: 'array of list content',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: ' "" ' },
      },
    },
  },
};

function UnorderedList(animated, divided, horizontal, items) {
  return (
    <List
      bulleted
      animated={animated}
      divided={divided}
      horizontal={horizontal}
    >
      {items &&
        items.map((item, index) => (
          <List.Item key={index}>{item.content}</List.Item>
        ))}
    </List>
  );
}

export const Default = (args) => {
  return UnorderedList(
    args.animated,
    args.divided,
    args.horizontal,
    args.items,
  );
};

Default.args = {
  animated: false,
  divided: false,
  horizontal: false,
  items: [
    {
      header: 'header 1',
      content: 'Content 1',
    },
    {
      header: 'header 2',
      content: 'Content 2',
    },
    {
      header: 'header 3',
      content: 'Content 3',
    },
    {
      header: 'header 4',
      content: 'Content 4',
    },
  ],
};
