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

Default.argTypes = {
  direction: {
    description: 'side of the timeline in whick item appears',
    type: {
      summary: 'string',
    },
    defaultValue: {
      summary: ' "" ',
    },
  },
  icon: {
    description: 'timeline item icon',
    type: {
      summary: 'string',
    },
    defaultValue: {
      summary: ' "" ',
    },
  },
  title: {
    description: 'timeline item heading',
    type: {
      summary: 'string',
    },
    defaultValue: {
      summary: ' "" ',
    },
  },
  description: {
    description: 'timeline item main content',
    type: {
      summary: 'string',
    },
    defaultValue: {
      summary: ' "" ',
    },
  },
  color: {
    description: 'timeline item color',
    type: {
      summary: 'string',
    },
    defaultValue: {
      summary: ' "" ',
    },
  },
  tags: {
    description: 'timeline item content tags',
    type: {
      summary: 'array',
    },
    defaultValue: {
      summary: ' "" ',
    },
  },
  lineHeight: {
    description:
      'The height of middle line going through icons. The number refers to the number of timeline cards',
    type: {
      summary: 'number',
    },
    defaultValue: {
      summary: ' "" ',
    },
  },
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

Multiple.argTypes = {
  items: {
    description: 'array of different timeline item objects',
    type: {
      summary: 'array',
    },
    defaultValue: {
      summary: ' "" ',
    },
  },
};
