import React from 'react';
import { List } from 'semantic-ui-react';

export default {
  title: 'Components/List/Table of contents',
  component: List,
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive'],
      description: 'a list can vary in size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: ' "" ' },
      },
    },
    selection: {
      description: 'a selection list formats list items as possible choices',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    animated: {
      description:
        'a list can animate to set the current item apart from the list',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    divided: {
      description: 'a list can show divisions between conten',
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

function TableOfContents(
  items,
  selection,
  animated,
  divided,
  size,
  horizontal,
) {
  return (
    <List
      ordered
      selection={selection}
      animated={animated}
      divided={divided}
      size={size}
      horizontal={horizontal}
    >
      {items.map((item, index) => (
        <List.Item key={index}>
          {item.content}
          <List.List role="list">
            {item.subList.map((sub, subIndex) => (
              <List.Item key={subIndex} as="a" role="listitem">
                {sub.content}
              </List.Item>
            ))}
          </List.List>
        </List.Item>
      ))}
    </List>
  );
}

export const Default = (args) => {
  return TableOfContents(
    args.items,
    args.selection,
    args.animated,
    args.divided,
    args.size,
    args.horizontal,
  );
};

Default.args = {
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
