import React from 'react';
import { TextArea, Form, Container } from 'semantic-ui-react';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';

export default {
  title: 'Components/Forms/Text Area',
  Component: TextArea,
  argTypes: {
    onChange: {
      action: 'Text Area changed',
      table: {
        disable: true,
      },
    },
    onInput: {
      action: 'Input entered',
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
    rows: {
      description: 'indicates row count for a TextArea',
      table: {
        type: { summary: 'integer' },
        defaultValue: { summary: 3 },
      },
    },
    fluid: {
      description:
        'add/remove class fluid to make the text area take the size of the container',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
};

const Template = ({ label, error, fluid, ...args }) => (
  <Container>
    <Form>
      <FormFieldWrapper
        label={label}
        error={error}
        required={args.required}
        columns={label ? 1 : 0}
      >
        <TextArea {...args} className={fluid ? 'fluid' : null}></TextArea>
      </FormFieldWrapper>
    </Form>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Type here...',
  rows: 3,
  fluid: false,
};

export const LabeledTextArea = Template.bind({});
LabeledTextArea.args = {
  placeholder: 'Type here...',
  rows: 3,
  label: 'Textarea',
  required: true,
  fluid: false,
};

LabeledTextArea.argTypes = {
  label: {
    description: 'textarea label',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: ' "" ' },
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

export const ErrorTextArea = Template.bind({});
ErrorTextArea.args = {
  placeholder: 'Type here...',
  rows: 3,
  label: 'Textarea',
  error: true,
  required: true,
  fluid: false,
};

ErrorTextArea.argTypes = {
  label: {
    description: 'textarea label',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: ' "" ' },
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
