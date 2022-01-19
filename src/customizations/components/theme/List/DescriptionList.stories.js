import React from 'react';
import { List } from 'semantic-ui-react';

export default {
  title: 'Components/List/DescriptionList',
  component: List,
  argTypes: {
    verticalAlign: {
      control: {
        type: 'inline-radio',
      },
      options: ['top', 'middle', 'bottom'],
      description: 'vertical alignment',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
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
    icon: {
      description: 'list icon',
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
  verticalAlign,
  floated,
  icon,
  selection,
  animated,
  divided,
  size,
  horizontal,
) {
  return (
    <List
      selection={selection}
      animated={animated}
      divided={divided}
      size={size}
      horizontal={horizontal}
    >
      {items.map((item, index) => (
        <List.Item key={index}>
          <List.Content>
            <List.Header>
              {icon && <List.Icon name="chevron right" />}
              {item.header}
            </List.Header>
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
    args.verticalAlign,
    args.floated,
    args.icon,
    args.selection,
    args.animated,
    args.divided,
    args.size,
    args.horizontal,
  );
};

Default.args = {
  verticalAlign: 'middle',
  floated: 'right',
  icon: true,
  selection: false,
  animated: false,
  divided: false,
  horizontal: false,
  size: 'large',
  items: [
    { header: 'Header 1', content: 'Content 1', icon: 'users' },
    { header: 'Header 2', content: 'Content 2' },
    { header: 'Header 3', content: 'Content 3' },
    { header: 'Header 4', content: 'Content 4' },
  ],
};
