import React from 'react';
import { List, Container } from 'semantic-ui-react';

export default {
  title: 'Components/List',
  component: List,
  argTypes: {},
};

const Template = (args) => (
  <Container>
    <List
      floated={args.floated}
      animated={args.animated}
      divided={args.divided}
      as="dl"
    >
      {args.items.map((item, index) => (
        <List.Item className="item" key={index} as="dt">
          {item}
        </List.Item>
      ))}
    </List>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  floated: 'left',
  animated: false,
  divided: false,
  items: ['List Item 1', 'List Item 2', 'List Item 3', 'List Item 4'],
};
