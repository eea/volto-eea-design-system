import React from 'react';
import LanguageLabeledIcon from './LanguageLabeledIcon';

export default {
  title: 'Components/Labeled Icons/Language',
  component: LanguageLabeledIcon,
  argTypes: {
    label: {
      description: 'Download Label',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'string' },
      },
    },
    icon: {
      description: 'Language Icon',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'string' },
      },
    },
    items: {
      description: 'array of language list',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: ' "" ' },
      },
    },
  },
};

const Template = (args) => (
  <LanguageLabeledIcon
    {...args}
    trigger={
      <div>
        <LanguageLabeledIcon.Icon icon={args.icon}></LanguageLabeledIcon.Icon>
        <LanguageLabeledIcon.Label>{args.label}</LanguageLabeledIcon.Label>
      </div>
    }
  >
    <LanguageLabeledIcon.Dropdown
      items={args.items}
    ></LanguageLabeledIcon.Dropdown>
  </LanguageLabeledIcon>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Repost Language',
  icon: <i className="ri-global-line"></i>,
  items: [
    { name: 'English', code: 'en' },
    { name: 'eesti', code: 'et' },
    { name: 'Suomi', code: 'fi' },
    { name: 'Français', code: 'fr' },
    { name: 'Deutsch', code: 'de' },
    { name: 'magyar', code: 'hu' },
  ],
};
