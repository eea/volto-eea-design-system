import React from 'react';
import { TextArea, Form, Container } from 'semantic-ui-react';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';

export default {
  title: 'Components/Forms/Text Area',
  Component: TextArea,
  argTypes: {
    onChange: {
      action: 'Text Area changed',
    },
    onInput: {
      action: 'Input entered',
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
  },
};

const Template = ({ label, error, ...args }) => (
  <Container>
    <Form>
      <FormFieldWrapper
        label={label}
        error={error}
        required={args.required}
        columns={label ? 1 : 0}
      >
        <TextArea {...args}></TextArea>
      </FormFieldWrapper>
    </Form>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Type here...',
  rows: 3,
};

export const LabeledTextArea = Template.bind({});
LabeledTextArea.args = {
  placeholder: 'Type here...',
  rows: 3,
  label: 'Textarea',
  required: true,
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
