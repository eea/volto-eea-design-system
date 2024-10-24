import React from 'react';
import { Button } from 'semantic-ui-react';
import LanguageLabeledIcon from './LanguageLabeledIcon';
import LabeledIconGroup from '../LabeledIconGroup/LabeledIconGroup';

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
  <LabeledIconGroup>
    <LanguageLabeledIcon
      {...args}
      trigger={
        <Button className="text">
          <LanguageLabeledIcon.Icon icon={args.icon}></LanguageLabeledIcon.Icon>
          <LanguageLabeledIcon.Label>{args.label}</LanguageLabeledIcon.Label>
        </Button>
      }
    >
      <LanguageLabeledIcon.Dropdown
        items={args.items}
      ></LanguageLabeledIcon.Dropdown>
    </LanguageLabeledIcon>
  </LabeledIconGroup>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Language',
  icon: <i className="ri-global-line"></i>,
  items: [
    { name: 'English', code: 'en' },
    { name: 'Eesti', code: 'et' },
    { name: 'Suomi', code: 'fi' },
    { name: 'Français', code: 'fr' },
    { name: 'Deutsch', code: 'de' },
    { name: 'Magyar', code: 'hu' },
  ],
};
