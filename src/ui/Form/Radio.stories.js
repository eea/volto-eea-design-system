import React, { useState } from 'react';
import { Radio, Form, Message } from 'semantic-ui-react';

export default {
  title: 'Components/Forms/Radio',
  component: Radio,
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

function RadioForm({
  label,
  helperText,
  errorMessage,
  optionalText,
  requiredText,
  invalid,
  required,
}) {
  const [active, setActive] = useState();

  const handleChange = (e, { value }) => setActive(value);
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
        <Message icon="exclamation circle" content={errorMessage} negative />
      ) : null}
      <Form.Field error={invalid}>
        <Radio
          label="Option 1"
          name="radioGroup"
          value="1"
          checked={active === '1'}
          onChange={handleChange}
          id="field1"
        ></Radio>
        <label htmlFor="field1">Helper text for option 1</label>
      </Form.Field>
      <Form.Field error={invalid}>
        <Radio
          label="Option 2"
          name="radioGroup"
          value="2"
          checked={active === '2'}
          onChange={handleChange}
          id="field2"
        ></Radio>
        <label htmlFor="field2">Helper text for option 2</label>
      </Form.Field>
      <Form.Field error={invalid}>
        <Radio
          label="Option 3 (disabled)"
          disabled
          name="radioGroup"
          value="3"
          checked={active === '3'}
          onChange={handleChange}
          id="field3"
        ></Radio>
        <label htmlFor="field3">Helper text for option 3</label>
      </Form.Field>
    </Form>
  );
}

function Binary({
  label,
  helperText,
  errorMessage,
  optionalText,
  requiredText,
  invalid,
  required,
}) {
  const [active, setActive] = useState();

  const handleChange = (e, { value }) => setActive(value);
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
        <Message header="Error Message" content={errorMessage} negative />
      ) : null}
      <Form.Field error={invalid}>
        <Radio
          label="Yes"
          name="radioGroup"
          value="yes"
          checked={active === 'yes'}
          onChange={handleChange}
          id="radio-yes"
        ></Radio>
        <label htmlFor="radio-yes"> </label>
      </Form.Field>
      <Form.Field error={invalid}>
        <Radio
          label="No"
          name="radioGroup"
          value="no"
          checked={active === 'no'}
          onChange={handleChange}
          id="radio-no"
        ></Radio>
        <label htmlFor="radio-no"> </label>
      </Form.Field>
    </Form>
  );
}

const Template = (args) => <RadioForm {...args}></RadioForm>;

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
  label: 'Select your preferred options',
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

export const BinaryRadio = (args) => <Binary {...args}></Binary>;
BinaryRadio.args = {
  label: 'Do you need help?',
  helperText: 'Helper text for the group',
  errorMessage: 'Error message for the group',
  optionalText: ' (optional)',
  requiredText: '*',
  invalid: false,
  required: false,
};

BinaryRadio.argTypes = {
  required: {
    table: {
      defaultValue: { summary: false },
    },
  },
};

BinaryRadio.storyName = 'Binary';

// export const BinaryInvalid = (args) => <Binary {...args}></Binary>;
// BinaryInvalid.args = {
//   label: 'Do you need help?',
//   helperText: 'Helper text for the group',
//   errorMessage: 'Error message for the group',
//   optionalText: ' (optional)',
//   requiredText: '*',
//   invalid: true,
//   required: true,
// };
// BinaryInvalid.storyName = 'Binary Invalid';
