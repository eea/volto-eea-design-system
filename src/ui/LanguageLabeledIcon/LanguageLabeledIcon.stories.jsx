import React from 'react';
import LanguageLabeledIcon from './LanguageLabeledIcon';

export default {
  title: 'Components/Labeled Icons/Language',
  component: LanguageLabeledIcon,
  argTypes: {},
};

const Template = (args) => (
  <LanguageLabeledIcon {...args}>
    <LanguageLabeledIcon.Icon icon={args.icon}></LanguageLabeledIcon.Icon>
    <LanguageLabeledIcon.Label>{args.title}</LanguageLabeledIcon.Label>
    <LanguageLabeledIcon.Dropdown
      items={args.items}
    ></LanguageLabeledIcon.Dropdown>
  </LanguageLabeledIcon>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Repost Language',
  icon: <i class="ri-global-line"></i>,
  items: [
    { text: 'English', key: 'EN' },
    { text: 'Russian', key: 'Ru' },
    { text: 'Russian', key: 'Ru' },
    { text: 'Russian', key: 'Ru' },
    { text: 'Russian', key: 'Ru' },
    { text: 'Russian', key: 'Ru' },
  ],
};
