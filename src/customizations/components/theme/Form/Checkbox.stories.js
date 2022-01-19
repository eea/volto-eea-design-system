import React from 'react';
import { Checkbox, Form, Message } from 'semantic-ui-react';

export default {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    onChange: {
      action: 'checkbox value changed',
    },
    label: {
      description: 'Label of the form group',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: ' "" ' },
      },
    },
    helperText: {
      description: 'Helper text of the form group',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: ' "" ' },
      },
    },
    errorMessage: {
      description:
        'Message to be shown in case of an invalid input by the user',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: ' "" ' },
      },
    },
    optionalText: {
      description: 'Text to be shown when the form group is optional',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: ' (optional) ' },
      },
    },
    requiredText: {
      description: 'Text to be shown when the form group is required',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: ' * ' },
      },
    },
    required: {
      description: 'Sets the required attribute on the form group',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    invalid: {
      description: 'Marks the form group as invalid',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
};

function CheckboxForm({
  label,
  helperText,
  errorMessage,
  optionalText,
  requiredText,
  invalid,
  required,
}) {
  return (
    <Form>
      <Form.Field>
        {label}
        {required ? (
          <span style={{ color: 'red' }}>{requiredText}</span>
        ) : (
          <span>{optionalText}</span>
        )}
      </Form.Field>
      <Form.Field>{helperText}</Form.Field>
      {invalid ? (
        <Message
          icon="exclamation circle"
          header="Error Message"
          content={errorMessage}
          negative
        />
      ) : null}
      <Form.Field error={invalid}>
        <Checkbox
          className="eeaCheckbox"
          label="Option 1"
          defaultChecked
        ></Checkbox>
        <Form.Field>Helper text for option 1</Form.Field>
      </Form.Field>
      <Form.Field error={invalid}>
        <Checkbox className="eeaCheckbox" label="Option 2"></Checkbox>
        <Form.Field>Helper text for option 2</Form.Field>
      </Form.Field>
      <Form.Field error={invalid}>
        <Checkbox
          className="eeaCheckbox"
          label="Option 3 (disabled)"
          disabled
        ></Checkbox>
        <Form.Field>Helper text for option 3</Form.Field>
      </Form.Field>
    </Form>
  );
}

function SingleCheckboxForm({
  label,
  helperText,
  errorMessage,
  optionalText,
  requiredText,
  invalid,
  required,
}) {
  return (
    <Form>
      <Form.Field>
        {label}
        {required ? (
          <span style={{ color: 'red' }}>{requiredText}</span>
        ) : (
          <span>{optionalText}</span>
        )}
      </Form.Field>
      <Form.Field>{helperText}</Form.Field>

      <Form.Field error={invalid}>
        <Checkbox
          className="eeaCheckbox"
          label="Option 1"
          defaultChecked
        ></Checkbox>
        <Form.Field>Helper text for option 1</Form.Field>
      </Form.Field>
      {invalid ? (
        <Message header="Error Message" content={errorMessage} negative />
      ) : null}
    </Form>
  );
}

const Template = (args) => <CheckboxForm {...args}></CheckboxForm>;

export const Default = Template.bind({});
Default.args = {
  label: 'Select your preferred options',
  helperText: 'Helper text for the group',
  errorMessage: 'Error message for the group',
  optionalText: ' (optional)',
  requiredText: '*',
  invalid: false,
  required: true,
};

export const invalid = Template.bind({});
invalid.args = {
  label: 'Select your preferred destinations',
  helperText: 'Helper text for the group',
  errorMessage: 'Error message for the group',
  optionalText: ' (optional)',
  requiredText: '*',
  invalid: true,
  required: true,
};

invalid.argTypes = {
  invalid: {
    table: {
      defaultValue: { summary: true },
    },
  },
};

export const optional = Template.bind({});
optional.args = {
  label: 'Select your preferred destinations',
  helperText: 'Helper text for the group',
  errorMessage: 'Error message for the group',
  optionalText: ' (optional)',
  requiredText: '*',
  invalid: false,
  required: false,
};

optional.argTypes = {
  required: {
    table: {
      defaultValue: { summary: false },
    },
  },
};

export const single = (args) => (
  <SingleCheckboxForm {...args}></SingleCheckboxForm>
);
single.args = {
  label: 'Select your preferred destinations',
  helperText: 'Helper text for the group',
  errorMessage: 'Error message for the group',
  optionalText: ' (optional)',
  requiredText: '*',
  invalid: false,
  required: false,
};

single.argTypes = {
  required: {
    table: {
      defaultValue: { summary: false },
    },
  },
};
