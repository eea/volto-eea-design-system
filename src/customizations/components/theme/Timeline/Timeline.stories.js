import React from 'react';
import Timeline from 'react-timeline-semantic-ui';

export default {
  title: 'Components/Timeline',
  component: Timeline,
  argTypes: {},
};

function TimelineEEA({ items }) {
  return (
    <>
      {items.map((item, index) => (
        <Timeline {...item} key={index}></Timeline>
      ))}
    </>
  );
}

const Template = (args) => (
  <>
    <Timeline {...args}></Timeline>
  </>
);

export const Default = Template.bind({});
Default.args = {
  direction: 'right',
  icon: 'user',
  title: 'Title',
  description: 'description',
  color: 'red',
  tags: ['tag1', 'tag2'],
  lineHeight: 1,
};

export const Multiple = (args) => <TimelineEEA {...args}></TimelineEEA>;
Multiple.args = {
  items: [
    {
      direction: 'left',
      icon: 'user',
      title: 'Title 1',
      description: 'description 1',
      color: 'red',
      tags: ['tag1', 'tag2'],
      lineHeight: 3,
    },
    {
      direction: 'right',
      icon: 'user',
      title: 'Title 2',
      description: 'description 2',
      color: 'yellow',
      tags: ['tag1', 'tag2'],
      lineHeight: 3,
    },
    {
      direction: 'left',
      icon: 'user',
      title: 'Title 3',
      description: 'description 3',
      color: 'violet',
      tags: ['tag1', 'tag2'],
      lineHeight: 3,
    },
  ],
};
