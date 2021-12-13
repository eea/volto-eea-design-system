import { injectIntl } from 'react-intl';
import React from 'react';
import { Button, Checkbox, Form, Message } from 'semantic-ui-react';
import * as CheckboxStories from './Checkbox.stories';

export default {
  title: 'Components/Forms/Checkbox',
  component: Form,
  argTypes: {},
};

const Template = (args) => (
  <Form {...args}>
    {(args.success || args.error || args.warning) && (
      <Message {...args} header="Message Header" content="Message Content" />
    )}
    {args.elements.map((element) => (
      <Form.Field>
        <label>{element.label}</label>
        <Checkbox {...element.checkbox}></Checkbox>
      </Form.Field>
    ))}
  </Form>
);

export const CheckboxForm = Template.bind({});
CheckboxForm.args = {
  elements: [
    { label: 'checkbox 1', checkbox: CheckboxStories.Default.args },
    { label: 'checkbox 2', checkbox: CheckboxStories.Checked.args },
    { label: 'checkbox 3', checkbox: CheckboxStories.Disabled.args },
    { label: 'checkbox 4', checkbox: CheckboxStories.Indeterminate.args },
  ],
  loading: false,
  success: false,
  error: false,
  warning: false,
};
CheckboxForm.storyName = 'default';

export const Single = Template.bind({});
Single.args = {
  elements: [{ label: 'checkbox 2', checkbox: CheckboxStories.Checked.args }],
};
