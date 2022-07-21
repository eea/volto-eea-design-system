import React from 'react';
import { Dropdown, Form, Container } from 'semantic-ui-react';
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
    fluid: {
      description: 'takes the full width of its parent',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    required: {
      description: 'a field can show that is mandatory',
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
  <Container>
    <Form>
      <FormFieldWrapper
        label={label}
        error={error}
        required={args.required}
        columns={label ? 1 : 0}
      >
        <Dropdown selection {...args} aria-label="item"></Dropdown>
      </FormFieldWrapper>
    </Form>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Select Option',
  options: listOptions,
  required: false,
  search: false,
  disabled: false,
  fluid: false,
};

export const LabeledDropdown = Template.bind({});
LabeledDropdown.args = {
  placeholder: 'Select Option',
  options: listOptions,
  label: 'Dropdown',
  required: false,
  search: false,
  disabled: false,
  fluid: false,
};

LabeledDropdown.argTypes = {
  search: {
    description: ' search through a large list of choice',
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
};

export const LoadingDropdown = Template.bind({});
LoadingDropdown.args = {
  placeholder: 'Select Option',
  options: listOptions,
  label: 'Dropdown',
  loading: true,
  required: false,
  search: false,
  disabled: false,
  fluid: false,
};

LoadingDropdown.argTypes = {
  label: {
    description: 'dropdown label',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
  },
};

export const ErrorDropdown = Template.bind({});
ErrorDropdown.args = {
  placeholder: 'Select Option',
  options: listOptions,
  label: 'Dropdown',
  error: true,
  required: false,
  search: false,
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
