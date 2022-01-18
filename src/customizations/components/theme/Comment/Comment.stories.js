import React from 'react';
import CommentEEA from './Comment';

export default {
  title: 'Components/Comment',
  component: CommentEEA,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['mini', 'tine', 'small', 'large', 'big', 'huge', 'massive'],
      description: 'comment section size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'large' },
      },
    },
    title: {
      description: 'comment section header',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: ' "" ' },
      },
    },
    comments: {
      description: 'comments data',
      table: {
        type: { summary: 'Object' },
        defaultValue: { summary: ' "" ' },
      },
    },
    threaded: {
      description: 'showing the relationship between comments',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    minimal: {
      description: 'hide extra information',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
};

const Template = (args) => <CommentEEA {...args}></CommentEEA>;

export const Default = Template.bind({});
Default.args = {
  title: 'Comments Header',
  threaded: false,
  minimal: false,
  size: 'large',
  comments: [
    {
      src: 'eea_icon.png',
      author: 'User 1',
      time: 'Message timestamp',
      text: 'Message Content',
      replies: [
        {
          src: 'eea_icon.png',
          author: 'User 4',
          time: 'Message timestamp',
          text: 'Message Content',
        },
      ],
    },
    {
      src: 'eea_icon.png',
      author: 'User 2',
      time: 'Message timestamp',
      text: 'Message Content',
      replies: [],
    },
    {
      src: 'eea_icon.png',
      author: 'User 2',
      time: 'Message timestamp',
      text: 'Message Content',
      replies: [],
    },
  ],
};
