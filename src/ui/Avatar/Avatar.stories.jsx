import React from 'react';
import Avatar from './Avatar';
// eslint-disable-next-line import/no-unresolved
import imgUrl from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/avatar.png';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    title: {
      description: 'avatar title',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'string' },
      },
    },
    info: {
      description: 'avatar secondary info',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'string' },
      },
    },
    image: {
      description: 'avatar image',
      table: {
        defaultValue: { summary: '""' },
      },
    },
  },
};

const DefaultTemplate = (args) => (
  <Avatar avatarsize="big" {...args} image_url={imgUrl}>
    <Avatar.Content>
      <Avatar.Title>{args.title}</Avatar.Title>
      <Avatar.Metadata>{args.info}</Avatar.Metadata>
    </Avatar.Content>
  </Avatar>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  title: 'Lorem ipsum',
  info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

const SmallTemplate = (args) => (
  <Avatar avatarsize="small" {...args} image_url={imgUrl}>
    <Avatar.Content>
      <Avatar.Title>{args.title}</Avatar.Title>
      <Avatar.Metadata>{args.info}</Avatar.Metadata>
    </Avatar.Content>
  </Avatar>
);

export const Small = SmallTemplate.bind({});
Small.args = {
  title: 'Lorem ipsum',
  info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};
