import { injectIntl } from 'react-intl';
import React from 'react';
import { Input, Form } from 'semantic-ui-react';

export default {
  title: 'Components/Forms/Input',
  component: Input,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['mini', 'small', 'large', 'big', 'huge'],
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['text', 'date', 'email', 'number', 'password', 'file'],
      },
    },
    onChange: {
      action: 'input changed',
    },
    onFocus: {
      action: 'input focus',
    },
  },
};

const Template = (args) => <Input {...args}></Input>;

export const StandardInput = Template.bind({});
StandardInput.args = {
  placeholder: 'Search...',
  type: 'text',
  label: 'Standard Input',
  size: 'small',
};

export const FocusInput = Template.bind({});
FocusInput.args = {
  placeholder: 'Search...',
  type: 'text',
  label: 'Focus Input',
  focus: true,
  size: 'small',
};

export const LoadingInput = Template.bind({});
LoadingInput.args = {
  placeholder: 'Search...',
  type: 'text',
  label: 'Loading Input',
  loading: true,
  size: 'small',
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  placeholder: 'Search...',
  type: 'text',
  label: 'Disabled Input',
  disabled: true,
  size: 'small',
};

export const ErrorInput = Template.bind({});
ErrorInput.args = {
  placeholder: 'Search...',
  type: 'text',
  label: 'Error Input',
  error: true,
  size: 'small',
};

export const FluidInput = Template.bind({});
FluidInput.args = {
  placeholder: 'Search...',
  type: 'text',
  label: 'Fluid Input',
  fluid: true,
  size: 'small',
};

export const TransparentInput = Template.bind({});
TransparentInput.args = {
  placeholder: 'Search...',
  type: 'text',
  label: 'Transparent Input',
  transparent: true,
  size: 'small',
};
