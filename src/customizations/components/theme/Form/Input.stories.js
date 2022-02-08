import React from 'react';
import { Input, Form } from 'semantic-ui-react';

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
    labeltext: {
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
  },
};

const Template = (args) => (
  <Form>
    <Form.Field>
      <Input {...args} id="temp-id" />
      <label htmlFor="temp-id">{args.labeltext}</label>
    </Form.Field>
  </Form>
);

export const StandardInput = Template.bind({});
StandardInput.args = {
  labeltext: 'Input label',
  placeholder: 'Placeholder',
  type: 'text',
  fluid: false,
};

StandardInput.parameters = {
  controls: {
    exclude: ['onChange', 'onFocus'],
    hideNoControlsWarning: true,
  },
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  labeltext: 'Input label',
  placeholder: 'Placeholder',
  type: 'text',
  disabled: true,
  fluid: false,
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
  labeltext: 'Input label',
  placeholder: 'Placeholder',
  type: 'text',
  loading: true,
  fluid: false,
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
  labeltext: 'Input label',
  placeholder: 'Placeholder',
  type: 'text',
  error: true,
  fluid: false,
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
