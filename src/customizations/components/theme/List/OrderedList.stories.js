import { injectIntl } from 'react-intl';
import React from 'react';
import { List } from 'semantic-ui-react';

export default {
  title: 'Components/List/OrderedList',
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

function OrderedList(items, selection, animated, divided, size, horizontal) {
  return (
    <List
      ordered
      selection={selection}
      animated={animated}
      divided={divided}
      size={size}
      horizontal={horizontal}
    >
      {items.map((item) => (
        <List.Item>
          {item.content}
          <List.List selection={selection}>
            {item.subList.map((sub) => (
              <List.Item as="a">{sub.content}</List.Item>
            ))}
          </List.List>
        </List.Item>
      ))}
    </List>
  );
}

export const Description = (args) => {
  return OrderedList(
    args.items,
    args.selection,
    args.animated,
    args.divided,
    args.size,
    args.horizontal,
  );
};

Description.args = {
  items: [
    {
      header: 'header 1',
      content: 'Lorem i',
      subList: [
        { header: 'Sub header 1', content: 'Lorem i' },
        { header: 'Sub header ', content: 'Lorem i' },
      ],
    },
    {
      header: 'header 2',
      content: 'Praesent felis nisi, feugiat ',
      subList: [
        { header: 'Sub header 1', content: 'Lorem i' },
        { header: 'Sub header ', content: 'Lorem i' },
      ],
    },
    {
      header: 'header 3',
      content: 'Praesent felis nisi, feugiat ',
      subList: [
        { header: 'Sub header 1', content: 'Lorem i' },
        { header: 'Sub header ', content: 'Lorem i' },
      ],
    },
    {
      header: 'header 4',
      content: 'Praesent felis nisi, feugiat ',
      subList: [
        { header: 'Sub header 1', content: 'Lorem i' },
        { header: 'Sub header ', content: 'Lorem i' },
      ],
    },
  ],
  selection: false,
  animated: false,
  divided: false,
  size: 'small',
  horizontal: false,
};
