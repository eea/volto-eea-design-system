import React from 'react';
import { List } from 'semantic-ui-react';

export default {
  title: 'Components/List',
  component: List,
  argTypes: {},
};

const Template = (args) => <List {...args}></List>;

export const Default = Template.bind({});
Default.args = {
  floated: 'left',
  animated: false,
  divided: false,
  horizontal: false,
  items: ['List Item 1', 'List Item 2', 'List Item 3', 'List Item 4'],
};
