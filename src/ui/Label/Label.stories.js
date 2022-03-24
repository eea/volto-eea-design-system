import React from 'react';
import { Label } from './Label';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    pointing: {
      control: { type: 'inline-radio' },
      options: [false, true, 'below', 'left', 'right'],
      description: 'a label can point to content next to it',
      table: {
        type: {
          summary: 'boolean | string',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    content: {
      description: 'primary content',
      table: {
        type: {
          summary: 'custom',
        },
        defaultValue: {
          summary: '',
        },
      },
    },
  },
};

const Template = (args) => <Label {...args}></Label>;

export const Default = Template.bind({});
Default.args = {
  content: 'Label',
  pointing: false,
};

export const MediumImportance = (args) => (
  <Label className="medium" {...args}></Label>
);
MediumImportance.args = {
  content: 'Label',
  pointing: false,
};

export const HighImportance = (args) => (
  <Label className="high" {...args}></Label>
);
HighImportance.args = {
  content: 'Label',
  pointing: false,
};

export const Highlight = (args) => (
  <Label className="highlight" {...args}></Label>
);
Highlight.args = {
  content: 'Label',
  pointing: false,
};

export const IconLabel = (args) => <Label className="icon" {...args}></Label>;
IconLabel.args = {
  icon: 'mail',
  pointing: false,
};
