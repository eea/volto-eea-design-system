import React from 'react';
import { Input, Form, Message } from 'semantic-ui-react';

export default {
  title: 'Components/Forms/Input',
  component: Input,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['text', 'date', 'email', 'number', 'password', 'file'],
      },
      description: 'input type',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    onChange: {
      action: 'input changed',
    },
    onFocus: {
      action: 'input focus',
    },
    placeholder: {
      description: 'placeholder text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: ' "" ' },
      },
    },
    label: {
      description: 'Label text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: ' "" ' },
      },
    },
    fluid: {
      description: 'take on the size of its container',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    required: {
      description: 'form field is required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
};

const Template = (args) => (
  <Form>
    <Form.Field required={args.required}>
      <Input {...args} id="temp-id" />
      {args.error && (
        <Message
          negative
          content="This is a mandatory field"
          size="mini"
          icon="exclamation circle"
        />
      )}
    </Form.Field>
  </Form>
);

export const StandardInput = Template.bind({});
StandardInput.args = {
  label: 'Input label',
  placeholder: 'Placeholder',
  type: 'text',
  fluid: false,
  required: false,
};

StandardInput.parameters = {
  controls: {
    exclude: ['onChange', 'onFocus'],
    hideNoControlsWarning: true,
  },
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  label: 'Input label',
  placeholder: 'Placeholder',
  type: 'text',
  disabled: true,
  fluid: false,
  required: false,
};
DisabledInput.argTypes = {
  fluid: {
    description: 'take on the size of its container',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
};
DisabledInput.argTypes = {
  disabled: {
    description: 'disabled',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: true },
    },
  },
};
DisabledInput.parameters = {
  controls: {
    exclude: ['onChange', 'onFocus'],
    hideNoControlsWarning: true,
  },
};

export const LoadingInput = Template.bind({});
LoadingInput.args = {
  label: 'Input label',
  placeholder: 'Placeholder',
  type: 'text',
  loading: true,
  fluid: false,
  required: false,
};
LoadingInput.argTypes = {
  loading: {
    label: 'Input label',
    description: 'show that it is currently loading data',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: true },
    },
  },
};
LoadingInput.parameters = {
  controls: {
    exclude: ['onChange', 'onFocus'],
    hideNoControlsWarning: true,
  },
};

export const ErrorInput = Template.bind({});
ErrorInput.args = {
  label: 'Input label',
  placeholder: 'Placeholder',
  type: 'text',
  error: true,
  fluid: false,
  required: false,
};
ErrorInput.argTypes = {
  error: {
    description: 'show the data contains errors',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: true },
    },
  },
};
ErrorInput.parameters = {
  controls: {
    exclude: ['onChange', 'onFocus'],
    hideNoControlsWarning: true,
  },
};
