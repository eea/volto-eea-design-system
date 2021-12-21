import React, { useState } from 'react';
import { Radio, Form } from 'semantic-ui-react';

export default {
  title: 'Components/Forms/Radio',
  component: Radio,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argtypes: {},
  // decorators: [
  //   (Story) => (
  //     <Form>
  //       <Form.Field><Story /></Form.Field>
  //       <Form.Field><Story /></Form.Field>
  //     </Form>
  //   ),
  // ],
};

const Template = (args) => <Radio {...args}></Radio>;

export const Default = Template.bind({});
Default.args = {
  label: 'Radio Label',
};

export const Playground = Template.bind({});
Playground.args = {
  label: 'Radio Label',
  toggle: false,
  slider: false,
  disabled: false,
  readOnly: false,
};
