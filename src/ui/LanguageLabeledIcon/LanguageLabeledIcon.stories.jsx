import React from 'react';
import LanguageLabeledIcon from './LanguageLabeledIcon';
import { Container } from 'semantic-ui-react';

export default {
  title: 'Components/Labeled Icons/Language',
  component: LanguageLabeledIcon,
  argTypes: {},
};

const Template = (args) => (
  <Container>
    <LanguageLabeledIcon {...args}>
      <LanguageLabeledIcon.Icon icon={args.icon}></LanguageLabeledIcon.Icon>
      <LanguageLabeledIcon.Label>{args.title}</LanguageLabeledIcon.Label>
      <LanguageLabeledIcon.Dropdown
        items={args.items}
      ></LanguageLabeledIcon.Dropdown>
    </LanguageLabeledIcon>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Repost Language',
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
