import { injectIntl } from 'react-intl';
import React from 'react';
import { Statistic } from 'semantic-ui-react';

export default {
  title: 'Components/Statistic',
  component: Statistic,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['mini', 'tiny', 'small', '', 'large', 'huge'],
      },
    },
    floated: {
      type: 'select',
      options: ['left', 'right'],
    },
  },
};

const Template = (args) => (
  <Statistic.Group {...args}>
    {args.elements &&
      args.elements.map((element) => <Statistic {...element}></Statistic>)}
    {!args.elements && <Statistic {...args}></Statistic>}
  </Statistic.Group>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Statistic Label',
  value: 'Value',
  horizontal: false,
  color: 'black',
  inverted: false,
  floated: 'right',
  size: '',
};

export const Group = Template.bind({});
Group.args = {
  elements: [
    { ...Default.args, label: 'label 1', value: '1' },
    { ...Default.args, label: 'label 2', value: '2' },
  ],
  horizontal: false,
  color: 'red',
  inverted: false,
  widths: 'two',
};
