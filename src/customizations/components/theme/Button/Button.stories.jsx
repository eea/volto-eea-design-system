import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    animated: {
      options: [false, true, 'fade', 'vertical'],
      control: { type: 'inline-radio' },
    },
    variant: {
      options: ['default', 'primary', 'secondary'],
      control: { type: 'inline-radio' },
    },
  },
};

function ButtonContent(animated, variant, label, icon, content) {
  if (animated) {
    return (
      <Button animated={animated} className={variant}>
        <Button.Content visible>
          {label} {animated}
        </Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
    );
  } else if (!animated && icon) {
    return (
      <Button
        className={variant}
        content="Like"
        icon="heart"
        label={{ as: 'a', basic: true, content: content }}
        labelPosition="right"
      />
    );
  } else {
    return <Button className={variant}>{label}</Button>;
  }
}

export const Default = (args) => {
  return <Button>Default</Button>;
};
Default.args = {};
Default.parameters = {
  controls: { exclude: ['animated', 'variant'] },
  hideNoControlsWarning: true,
};

export const Playground = (args) => {
  return ButtonContent(
    args.animated,
    args.variant,
    args.label,
    args.icon,
    args.content,
  );
};

Playground.args = {
  label: 'Playground',
  animated: false,
  variant: 'default',
  icon: false,
  content: '2048',
};
