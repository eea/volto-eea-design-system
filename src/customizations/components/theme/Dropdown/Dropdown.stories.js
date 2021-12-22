import React from 'react';
import { Dropdown } from 'semantic-ui-react';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {},
};

const listOptions = [
  {
    key: 'Item 1',
    text: 'Item 1',
    value: 'Item 1',
  },
  {
    key: 'Item 2',
    text: 'Item 2',
    value: 'Item 2',
  },
  {
    key: 'Item 3',
    text: 'Item 3',
    value: 'Item 3',
  },
  {
    key: 'Item 4',
    text: 'Item 4',
    value: 'Item 4',
  },
  {
    key: 'Item 5',
    text: 'Item 5',
    value: 'Item 5',
  },
];

const Template = (args) => <Dropdown {...args}></Dropdown>;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Select Option',
  options: listOptions,
  selection: true,
};
export const Playground = Template.bind({});
Playground.args = {
  placeholder: 'Select Option',
  options: listOptions,
  selection: true,
  search: false,
  multiple: false,
  clearable: false,
  inline: false,
  floating: false,
  button: false,
  disabled: false,
  fluid: false,
};
