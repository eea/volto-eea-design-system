import React from 'react';
import { Input, Form, Container } from 'semantic-ui-react';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';

export default {
  title: 'Components/Forms/Input',
  component: Input,
  parameters: { controls: { exclude: ['invalid'] } },
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
    disabled: {
      description: 'disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    invalid: {
      description: 'Aria attribute',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    describedby: {
      description: 'Describes the element on which the attribute is set',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: ' "" ' },
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
        describedby={rest.describedby}
        columns={label ? 1 : 0}
      >
        <Input
          {...rest}
          id="temp-id"
          aria-invalid={rest.invalid}
          aria-describedby={rest.describedby}
        />
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
  invalid: false,
  describedby: 'desc_id',
};

export const LabeledInput = Template.bind({});
LabeledInput.args = {
  label: 'Input label',
  placeholder: 'Placeholder',
  type: 'text',
  fluid: false,
  required: false,
  disabled: false,
  invalid: false,
  describedby: 'desc_id',
};

LabeledInput.argTypes = {
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

export const LoadingInput = Template.bind({});
LoadingInput.args = {
  label: 'Input label',
  placeholder: 'Placeholder',
  type: 'text',
  loading: true,
  fluid: false,
  required: false,
  disabled: false,
  invalid: false,
  describedby: 'desc_id',
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
  error: true,
  type: 'text',
  fluid: false,
  required: false,
  disabled: false,
  invalid: true,
  describedby: 'desc_id',
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
