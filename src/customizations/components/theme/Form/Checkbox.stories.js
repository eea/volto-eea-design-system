import { injectIntl } from 'react-intl';
import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

export default {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
  argTypes: {},
};

const Template = (args) => <Checkbox {...args}></Checkbox>;

export const Default = Template.bind({});
Default.args = {
  label: 'Check here',
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'Check here',
  defaultChecked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Check here',
  defaultChecked: false,
  disabled: true,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  label: 'Check here',
  defaultIndeterminate: true,
};
