import { injectIntl } from 'react-intl';
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
    },
    floated: {
      control: {
        type: 'inline-radio',
      },
      options: ['left', 'right'],
    },
    size: {
      control: {
        type: 'inline-radio',
      },
      options: ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive'],
    },
  },
};

function DescriptionList(items, verticalAlign, floated, icon, selection, animated, divided, size, horizontal) {
  return (
    <List
      selection={selection}
      animated={animated}
      divided={divided}
      size={size}
      horizontal={horizontal}
    >
      {items.map((item) => (
        <List.Item>
          <List.Content>
            <List.Header>
              {icon && <List.Icon name="right triangle" />}
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

export const Description = (args) => {
  return DescriptionList(args.items, args.verticalAlign, args.floated, args.icon, args.selection, args.animated, args.divided, args.size, args.horizontal);
};

Description.args = {
  items: [
    { header: 'header 1', content: 'Content 1', icon: 'users' },
    { header: 'header 2', content: 'Content 2' },
    { header: 'header 3', content: 'Content 3' },
    { header: 'header 4', content: 'Content 4' },
  ],
  verticalAlign: 'middle',
  floated: 'right',
  icon: true,
  selection: false,
  animated: false,
  divided: false,
  size: 'small',
  horizontal: false,
};
