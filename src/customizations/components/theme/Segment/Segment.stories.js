import React from 'react';
import { Segment } from 'semantic-ui-react';

export default {
  title: 'Components/Segment',
  component: Segment,
  argTypes: {},
};

const Template = (args) => <Segment {...args}></Segment>;

export const Default = Template.bind({});
Default.args = {
  children: ['Content'],
};

export const Playground = Template.bind({});
Playground.args = {
  children: ['Content'],
  basic: false,
  circular: false,
  compact: false,
  disabled: false,
  loading: false,
  raised: false,
  secondary: false,
  stacked: false,
  tertiary: false,
  vertical: false,
};
