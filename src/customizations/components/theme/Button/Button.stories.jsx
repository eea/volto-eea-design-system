import React from 'react';
import { Button, Icon, Segment } from 'semantic-ui-react';

export default {
  title: 'Components/Button',
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

//Primary button
export const Primary = (args) => {
  return (
    <Button className="eeaPrimaryButton" disabled={args.disabled}>
      {args.label}
    </Button>
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
    <Button className="eeaSecondaryButton" disabled={args.disabled}>
      {args.label}
    </Button>
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

//Secondary inverted button
export const SecondaryInverted = (args) => {
  return (
    <Segment inverted compact>
      <Button className="eeaSecondaryButtonInverted" disabled={args.disabled}>
        {args.label}
      </Button>
    </Segment>
  );
};
SecondaryInverted.args = {
  label: 'Secondary Button',
  disabled: false,
};
SecondaryInverted.parameters = {
  controls: { exclude: ['animated', 'variant'] },
  hideNoControlsWarning: true,
};

//Call to action button
export const CallToAction = (args) => {
  return (
    <Button
      icon
      labelPosition="right"
      className="eeaActionButton"
      disabled={args.disabled}
    >
      {args.label}
      <Icon name={args.icon} />
    </Button>
  );
};
CallToAction.args = {
  label: 'Call to action Button',
  icon: 'chevron right',
  disabled: false,
};
CallToAction.parameters = {
  controls: { exclude: ['animated', 'variant'] },
  hideNoControlsWarning: true,
};
CallToAction.argTypes = {
  label: {
    name: 'button label',
    type: { name: 'string', required: true },
  },
  icon: {
    name: 'button icon',
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
};

//Text Button
export const Text = (args) => {
  return (
    <Button className="eeaTextButton" disabled={args.disabled}>
      {args.label}
    </Button>
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

//Cancel Button
export const Cancel = (args) => {
  return (
    <Button className="eeaCancelButton" disabled={args.disabled}>
      {args.label}
    </Button>
  );
};
Cancel.args = {
  label: 'Cancel Button',
  disabled: false,
};
Cancel.parameters = {
  controls: { exclude: ['animated', 'variant'] },
  hideNoControlsWarning: true,
};

// export const Playground = (args) => {
//   return ButtonContent(
//     args.animated,
//     args.variant,
//     args.label,
//     args.icon,
//     args.content,
//   );
// };

// Playground.args = {
//   label: 'Playground',
//   animated: false,
//   variant: 'default',
//   icon: false,
//   content: '2048',
// };
