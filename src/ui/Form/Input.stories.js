import React from 'react';
import { Input, Form, Container } from 'semantic-ui-react';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';

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
      table: {
        disable: true,
      },
    },
    onFocus: {
      action: 'input focus',
      table: {
        disable: true,
      },
    },
    placeholder: {
      description: 'placeholder text',
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

const Template = ({ label, error, ...rest }) => (
  <Container>
    <Form>
      <FormFieldWrapper
        error={error}
        label={label}
        required={rest.required}
        columns={label ? 1 : 0}
      >
        <Input {...rest} id="temp-id" />
      </FormFieldWrapper>
    </Form>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
  type: 'text',
  fluid: false,
  required: false,
};

export const StandardInput = Template.bind({});
StandardInput.args = {
  label: 'Input label',
  placeholder: 'Placeholder',
  type: 'text',
  fluid: false,
  required: false,
};

StandardInput.argTypes = {
  label: {
    description: 'input label',
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
  label: {
    description: 'input label',
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
DisabledInput.argTypes = {
  disabled: {
    description: 'disabled',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: true },
    },
  },
  label: {
    description: 'input label',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
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
  label: {
    description: 'input label',
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
  label: {
    description: 'input label',
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
