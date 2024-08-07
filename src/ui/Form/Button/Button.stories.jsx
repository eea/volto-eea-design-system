import React from 'react';
import { Button, Icon, Container, Segment } from 'semantic-ui-react';

export default {
  title: 'Components/Forms/Button',
  component: Button,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    label: { description: 'button label' },
    disabled: {
      description: 'button disabled',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    animated: {
      options: [false, true, 'fade', 'vertical'],
      control: { type: 'inline-radio' },
    },
    variant: {
      options: ['default', 'eeaPrimaryButton', 'eeaSecondaryButton'],
      control: { type: 'inline-radio' },
    },
  },
};

//Default Button
export const Default = (args) => {
  return (
    <Container>
      <Button disabled={args.disabled}>{args.label}</Button>
    </Container>
  );
};
Default.args = {
  label: 'Default Button',
  disabled: false,
};
Default.parameters = {
  controls: { exclude: ['animated', 'variant'] },
  hideNoControlsWarning: true,
};

//Primary button
export const Primary = (args) => {
  return (
    <Container>
      <Button primary disabled={args.disabled}>
        {args.label}
      </Button>
    </Container>
  );
};
Primary.args = {
  label: 'Primary Button',
  disabled: false,
};
Primary.parameters = {
  controls: { exclude: ['animated', 'variant'] },
  hideNoControlsWarning: true,
};

//secondary Button
export const Secondary = (args) => {
  return (
    <Container>
      <Button secondary disabled={args.disabled}>
        {args.label}
      </Button>
    </Container>
  );
};
Secondary.args = {
  label: 'Secondary Button',
  disabled: false,
};
Secondary.parameters = {
  controls: { exclude: ['animated', 'variant'] },
  hideNoControlsWarning: true,
};

//secondary Button Inverted
export const Inverted = (args) => {
  return (
    <Container>
      <Segment compact>
        <Button primary inverted disabled={args.disabled}>
          {args.button1}
        </Button>
      </Segment>
      <Segment compact>
        <Button secondary inverted disabled={args.disabled}>
          {args.button2}
        </Button>
      </Segment>
      <Segment inverted compact>
        <Button inverted disabled={args.disabled}>
          {args.button3}
        </Button>
      </Segment>
    </Container>
  );
};
Inverted.args = {
  button1: 'Primary Inverted',
  button2: 'Secondary Inverted',
  button3: 'Default Inverted',
  disabled: false,
};
Inverted.parameters = {
  controls: { exclude: ['animated', 'variant', 'label'] },
  hideNoControlsWarning: true,
};

//Call to action button
export const Labeled = (args) => {
  return (
    <Container>
      <Button
        className={args.variant + ' icon ' + args.icon_position + ' labeled'}
        disabled={args.disabled}
      >
        {args.label}
        <Icon name={args.icon} />
      </Button>
    </Container>
  );
};
Labeled.args = {
  label: 'CALL TO ACTION BUTTON',
  icon: 'chevron right',
  disabled: false,
};
Labeled.parameters = {
  controls: { exclude: ['animated'] },
  hideNoControlsWarning: true,
};
Labeled.argTypes = {
  variant: {
    options: ['primary', 'secondary', 'default'],
    control: { type: 'radio' },
    defaultValue: 'secondary',
  },

  label: {
    name: 'label',
    type: { name: 'string', required: false },
  },
  icon: {
    name: 'icon',
    type: { name: 'string', required: false },
    defaultValue: 'chevron  right',
    options: [
      'chevron right',
      'arrow right',
      'sign-in',
      'sign-out',
      'play',
      'stop',
      'pause',
      'download',
      'upload',
      'print',
      'copy',
      'edit',
      'ellipsis',
    ],
    control: { type: 'select' },
    description: 'button icon',
    table: {
      defaultValue: { summary: 'chevron right' },
    },
  },

  icon_position: {
    options: [' left', ' right'],
    control: { type: 'radio' },
    defaultValue: ' left',
  },
};

//Text Button
export const Text = (args) => {
  return (
    <Container>
      <Button className="text" disabled={args.disabled}>
        {args.label}
      </Button>
    </Container>
  );
};
Text.args = {
  label: 'Text Button',
  disabled: false,
};
Text.parameters = {
  controls: { exclude: ['animated', 'variant'] },
  hideNoControlsWarning: true,
};
