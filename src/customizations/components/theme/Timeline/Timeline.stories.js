import React from 'react';
import Timeline from './Timeline';

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

const Template = (args) => <Timeline {...args}></Timeline>;

export const Default = Template.bind({});
Default.args = {
  direction: 'left',
  icon: 'user',
  time: 'Date and time',
  title: 'Title',
  description: 'description',
  color: 'blue',
  tags: [],
  lineHeight: 1,
};

Default.argTypes = {
  direction: {
    description: 'side of the timeline in whick item appears',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: ' "" ',
      },
    },
  },
  icon: {
    description: 'timeline item icon',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: ' "" ',
      },
    },
  },
  title: {
    description: 'timeline item heading',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: ' "" ',
      },
    },
  },
  description: {
    description: 'timeline item main content',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: ' "" ',
      },
    },
  },
  color: {
    description: 'timeline item color',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: ' "" ',
      },
    },
  },
  tags: {
    description: 'timeline item content tags',
    table: {
      type: {
        summary: 'array',
      },
      defaultValue: {
        summary: ' "" ',
      },
    },
  },
  lineHeight: {
    description:
      'The height of middle line going through icons. The number refers to the number of timeline cards',
    table: {
      type: {
        summary: 'number',
      },
      defaultValue: {
        summary: ' "" ',
      },
    },
  },
};

export const Multiple = (args) => <TimelineEEA {...args}></TimelineEEA>;

Multiple.args = {
  items: [
    {
      direction: 'left',
      icon: 'time',
      time: 'Date and time',
      title: 'Title 1',
      description: 'description 1',
      color: 'blue',
      tags: [],
      lineHeight: 2,
    },
    {
      direction: 'left',
      icon: 'check circle',
      time: 'Date and time',
      title: 'Title 2',
      description: 'description 2',
      color: 'green',
      tags: [],
      lineHeight: 2,
    },
    {
      direction: 'left',
      icon: 'minus circle',
      time: 'Date and time',
      title: 'Title 3',
      description: 'description 3',
      color: 'teal',
      tags: [],
      lineHeight: 2,
    },
  ],
};

Multiple.argTypes = {
  items: {
    description: 'array of different timeline item objects',
    table: {
      type: {
        summary: 'array',
      },
      defaultValue: {
        summary: ' "" ',
      },
    },
  },
};
