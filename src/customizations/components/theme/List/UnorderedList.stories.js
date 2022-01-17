import React from 'react';
import { List } from 'semantic-ui-react';

export default {
  title: 'Components/List/UnorderedList',
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

function UnorderedList(size, animated, divided, horizontal, items) {
  return (
    <List
      bulleted
      size={size}
      animated={animated}
      divided={divided}
      horizontal={horizontal}
    >
      {items.map((item, index) => (
        <List.Item key={index}>
          {item.content}
          <List.List>
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

export const Default = (args) => {
  return UnorderedList(
    args.size,
    args.animated,
    args.divided,
    args.horizontal,
    args.items,
  );
};

Default.args = {
  size: 'small',
  animated: false,
  divided: false,
  horizontal: false,
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
};
