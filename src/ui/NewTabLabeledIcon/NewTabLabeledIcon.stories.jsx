import React from 'react';
import NewTabLabeledIcon from './NewTabLabeledIcon';
import LabeledIconGroup from '../LabeledIconGroup/LabeledIconGroup';

export default {
  title: 'Components/Labeled Icons/New Tab',
  component: NewTabLabeledIcon,
  argTypes: {
    label: {
      description: 'New Tab Label',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'string' },
      },
    },
    link: {
      description: 'New Tab Link',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'string' },
      },
    },
    icon: {
      description: 'New Tab Icon',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'string' },
      },
    },
  },
};

const DefaultTemplate = (args) => (
  <LabeledIconGroup>
    <NewTabLabeledIcon {...args}>
      <NewTabLabeledIcon.Icon {...args} e>
        {args.icon}
      </NewTabLabeledIcon.Icon>
      <NewTabLabeledIcon.Label>{args.label}</NewTabLabeledIcon.Label>
    </NewTabLabeledIcon>
  </LabeledIconGroup>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  label: 'Open in new Tab',
  link: '/#',
  icon: 'ri-share-box-fill',
};
