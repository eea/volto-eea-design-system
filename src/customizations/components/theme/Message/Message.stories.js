import React from 'react';
import { Message } from 'semantic-ui-react';

export default {
  title: 'Components/Message',
  component: Message,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive'],
    },
  },
};

const messageList = ['Message 1', 'Message 2', 'Message 3'];

const Template = (args) => <Message {...args}></Message>;

export const Default = Template.bind({});
Default.args = {
  header: 'Message header',
  content: 'Content',
};

export const Playground = Template.bind({});
Playground.args = {
  header: 'Message header',
  list: messageList,
  icon: 'inbox',
  hidden: false,
  floating: false,
  compact: false,
  info: false,
  warning: false,
  success: false,
  error: false,
  size: 'small',
};
