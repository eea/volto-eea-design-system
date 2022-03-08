import React from 'react';
import { Dropdown, Form } from 'semantic-ui-react';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';

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
      description: 'Array of dropdown options',
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

const Template = ({ label, error, ...args }) => (
  <Form>
    <FormFieldWrapper
      label={label}
      error={error}
      required={args.required}
      columns={label ? 1 : 0}
    >
      <Dropdown
        className="eea-dropdown"
        selection
        {...args}
        aria-label="item"
      ></Dropdown>
    </FormFieldWrapper>
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
  label: 'Dropdown Label',
  required: true,
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
  label: {
    description: 'dropdown label',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
  },
  required: {
    description: 'a field can show that is mandatory',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
};

export const ErrorDropdown = Template.bind({});
ErrorDropdown.args = {
  placeholder: 'Select Option',
  options: listOptions,
  label: 'Dropdown Label',
  error: true,
  required: true,
  search: false,
  multiple: false,
  clearable: false,
  inline: false,
  floating: false,
  disabled: false,
  fluid: false,
};

ErrorDropdown.argTypes = {
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
  label: {
    description: 'dropdown label',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
  },
  required: {
    description: 'a field can show that is mandatory',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  error: {
    description: 'display error message along with message',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: '' },
    },
  },
};
