import React from 'react';
import { Progress } from 'semantic-ui-react';

export default {
  title: 'Components/Progress',
  component: Progress,
  argTypes: {},
};

const Template = (args) => <Progress {...args}></Progress>;

export const Default = Template.bind({});
Default.args = {
  percent: 11,
};

export const Playground = Template.bind({});
Playground.args = {
  percent: 80,
  indicating: true,
  autoSuccess: true,
  progress: true,
  children: 'Label',
};

export const ProgressWithRatio = Template.bind({});
ProgressWithRatio.args = {
  value: 80,
  total: 100,
  indicating: true,
  autoSuccess: true,
  progress: 'ratio',
  children: 'Label',
};

export const ProgressWithValue = Template.bind({});
ProgressWithValue.args = {
  value: 80,
  total: 100,
  indicating: true,
  autoSuccess: true,
  progress: 'value',
  children: 'Label',
};
