import React from 'react';
import Banner from './Banner';

export default {
  title: 'Components/Banner',
  component: Banner,
  argTypes: {
    title: {
      description: 'banner title',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'string' },
      },
    },
    info: {
      description: 'banner secondary info',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'string' },
      },
    },
  },
};

const Template = (args) => <Banner {...args}></Banner>;

export const Default = Template.bind({});
Default.args = {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  info: 'Briefing | Published Date | Modified Date | 5 min read',
};
