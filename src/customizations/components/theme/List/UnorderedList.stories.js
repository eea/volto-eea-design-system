import React from 'react';
import { List } from 'semantic-ui-react';

export default {
  title: 'Components/List/UnorderedList',
  component: List,
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
      },
      options: ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive'],
    },
  },
};

function UnorderedList(items, selection, animated, divided, size, horizontal) {
  return (
    <List
      bulleted
      selection={selection}
      animated={animated}
      divided={divided}
      size={size}
      horizontal={horizontal}
    >
      {items.map((item, index) => (
        <List.Item key={index}>
          {item.content}
          <List.List selection={selection}>
            {item.subList.map((sub, subIndex) => (
              <List.Item key={subIndex} as="a">
                {sub.content}
              </List.Item>
            ))}
          </List.List>
        </List.Item>
      ))}
    </List>
  );
}

export const Unordered = (args) => {
  return UnorderedList(
    args.items,
    args.selection,
    args.animated,
    args.divided,
    args.size,
    args.horizontal,
  );
};

Unordered.args = {
  items: [
    {
      header: 'header 1',
      content: 'Content 1',
      subList: [
        { header: 'Sub header 1', content: 'content' },
        { header: 'Sub header ', content: 'content' },
      ],
    },
    {
      header: 'header 2',
      content: 'Content 2',
      subList: [
        { header: 'Sub header 1', content: 'content' },
        { header: 'Sub header ', content: 'content' },
      ],
    },
    {
      header: 'header 3',
      content: 'Content 3',
      subList: [
        { header: 'Sub header 1', content: 'content' },
        { header: 'Sub header ', content: 'content' },
      ],
    },
    {
      header: 'header 4',
      content: 'Content 4',
      subList: [
        { header: 'Sub header 1', content: 'content' },
        { header: 'Sub header ', content: 'content' },
      ],
    },
  ],
  selection: false,
  animated: false,
  divided: false,
  size: 'small',
  horizontal: false,
};
