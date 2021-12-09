import { injectIntl } from 'react-intl';
import React from 'react';
import { Button } from 'semantic-ui-react';

export default {
  title: 'Public components/Button',
  component: Button,
  argTypes: {
    onClick: {
      action: 'button clicked',
    },
  },
};

//👇 We create a “template” of how args map to rendering
//const Template = (args) => <Button>{args.label}</Button>;

// 👇 Each story then reuses that template
export const Primary = (args) => <Button primary>{args.label}</Button>;
Primary.args = { label: 'Primary' };

export const Secondary = (args) => <Button secondary>{args.label}</Button>;
Secondary.args = { label: 'Secondary' };
