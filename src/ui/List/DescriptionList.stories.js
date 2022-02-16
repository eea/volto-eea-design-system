import React from 'react';
import { List } from 'semantic-ui-react';

export default {
  title: 'Components/List/Description list',
  component: List,
  argTypes: {
    floated: {
      control: {
        type: 'inline-radio',
      },
      options: ['left', 'right'],
      description: 'floated left or right',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
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

function DescriptionList(
  items,
  floated,
  selection,
  animated,
  divided,
  horizontal,
) {
  return (
    <List
      selection={selection}
      animated={animated}
      divided={divided}
      horizontal={horizontal}
    >
      {items.map((item, index) => (
        <List.Item key={index}>
          <List.Content>
            <List.Header>{item.header}</List.Header>
            <List.Description floated={floated}>
              {item.content}
            </List.Description>
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
}

export const Default = (args) => {
  return DescriptionList(
    args.items,
    args.floated,
    args.selection,
    args.animated,
    args.divided,
    args.horizontal,
  );
};

Default.args = {
  floated: 'right',
  selection: false,
  animated: false,
  divided: false,
  horizontal: false,
  items: [
    { header: 'Header 1', content: 'Content 1' },
    { header: 'Header 2', content: 'Content 2' },
    { header: 'Header 3', content: 'Content 3' },
    { header: 'Header 4', content: 'Content 4' },
  ],
};
