import React from 'react';
import NewTabLabeledIcon from './NewTabLabeledIcon';
// eslint-disable-next-line import/no-unresolved

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
  <NewTabLabeledIcon {...args}>
    <NewTabLabeledIcon.Icon {...args} e>
      {args.icon}
    </NewTabLabeledIcon.Icon>
    <NewTabLabeledIcon.Label>{args.label}</NewTabLabeledIcon.Label>
  </NewTabLabeledIcon>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  label: 'Open in new Tab',
  link: '/#',
  icon: 'ri-share-box-fill',
};
