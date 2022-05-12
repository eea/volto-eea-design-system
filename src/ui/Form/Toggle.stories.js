import React from 'react';
import { Checkbox, Container } from 'semantic-ui-react';

export default {
  title: 'Components/Forms/Toggle',
  component: Toggle,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    label: {
      description: 'Label of the toggle',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: ' "" ' },
      },
    },
    name: {
      description: 'name for the toggle input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: ' "" ' },
      },
    },
    id: {
      description: 'id for the toggle input, also controls label for attribute',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: ' "" ' },
      },
    },
    disabled: {
      description: 'controls the state of the toggle',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
};

function Toggle({ ...args }) {
  return (
    <Container>
      <Checkbox toggle {...args}></Checkbox>
    </Container>
  );
}

const Template = (args) => <Toggle {...args}></Toggle>;

export const Default = Template.bind({});
Default.args = {
  id: 'example',
  label: 'Toggle label',
  name: 'example',
  disabled: false,
};
