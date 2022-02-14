import React from 'react';
import Banner from './Banner';

export default {
  title: 'Components/Page Header',
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
    image: {
      description: 'set or unset banner image',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'boolean' },
      },
    },
  },
};

const Template = (args) => <Banner {...args}></Banner>;

export const Default = Template.bind({});
Default.args = {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  info: 'Briefing | Published Date | Modified Date | 5 min read',
  image: true,
};
