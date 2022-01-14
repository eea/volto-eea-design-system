import React from 'react';
import { Dropdown, Form } from 'semantic-ui-react';

export default {
  title: 'Components/Forms/Dropdown',
  component: Dropdown,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    placeholder: {
      description: 'placeholder text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: ' "" ' },
      },
    },
    options: {
      description: 'Array of Dropdown.Item props',
      table: {
        type: { summary: 'Object' },
        defaultValue: { summary: ' "" ' },
      },
    },
  },
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

const Template = (args) => (
  <Form>
    <Form.Field>
      <Dropdown selection {...args}></Dropdown>
    </Form.Field>
  </Form>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Select Option',
  options: listOptions,
};
export const Playground = Template.bind({});
Playground.args = {
  placeholder: 'Select Option',
  options: listOptions,
  search: false,
  multiple: false,
  clearable: false,
  inline: false,
  floating: false,
  disabled: false,
  fluid: false,
};

Playground.argTypes = {
  search: {
    description: ' search through a large list of choice',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  multiple: {
    description: 'allow multiple selections',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  clearable: {
    description: 'remove some selection',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  inline: {
    description: 'format dropdown to appear inline in other content',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  floating: {
    description: 'dropdown menu can appear to be floating below an element',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  disabled: {
    description: 'disable dropdown',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  fluid: {
    description: 'takes the full width of its parent',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
};
