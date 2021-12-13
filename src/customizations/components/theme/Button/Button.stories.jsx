import { injectIntl } from 'react-intl';
import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    animated: {
      options: [false, true, 'fade', 'vertical'],
      control: { type: 'inline-radio' },
    },
    variant: {
      options: ['default', 'primary', 'secondary'],
      control: { type: 'inline-radio' },
    },
    onClick: {
      action: 'button clicked',
    },
  },
};

function ButtonContent(animated, variant, label) {
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
  } else {
    return <Button className={variant}>{label}</Button>;
  }
}

//👇 We create a “template” of how args map to rendering
//const Template = (args) => <Button>{args.label}</Button>;

// 👇 Each story then reuses that template
export const Default = (args) =>
  ButtonContent(args.animated, args.variant, args.label);

Default.args = { label: 'Default', animated: false, variant: 'default' };
