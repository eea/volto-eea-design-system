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
        <Timeline key={index}>
          <Timeline.Content
            pointing="right"
            time={item.time}
            title={item.title}
            description={item.description}
            color={item.color}
          ></Timeline.Content>
          <Timeline.Icon icon={item.icon} color={item.color}></Timeline.Icon>
        </Timeline>
      ))}
    </>
  );
}

function TimelineEEAReversed({ items }) {
  return (
    <>
      {items.map((item, index) => (
        <Timeline key={index}>
          <Timeline.Icon icon={item.icon} color={item.color}></Timeline.Icon>
          <Timeline.Content
            pointing="left"
            time={item.time}
            title={item.title}
            description={item.description}
            color={item.color}
          ></Timeline.Content>
        </Timeline>
      ))}
    </>
  );
}

const Template = (args) => (
  <Timeline>
    <Timeline.Content
      pointing="right"
      time={args.time}
      title={args.title}
      description={args.description}
      color={args.color}
    ></Timeline.Content>
    <Timeline.Icon icon={args.icon} color={args.color}></Timeline.Icon>
  </Timeline>
);

const TemplateReversed = (args) => (
  <Timeline>
    <Timeline.Icon icon={args.icon} color={args.color}></Timeline.Icon>
    <Timeline.Content
      pointing="left"
      time={args.time}
      title={args.title}
      description={args.description}
      color={args.color}
    ></Timeline.Content>
  </Timeline>
);

export const Default = Template.bind({});
Default.args = {
  icon: 'user',
  time: 'Date and time',
  title: 'Title',
  description: 'description',
  color: 'blue',
  tags: [],
};

Default.argTypes = {
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
  time: {
    description: 'timeline item time',
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
};

export const DefaultReversed = TemplateReversed.bind({});
DefaultReversed.args = {
  icon: 'user',
  time: 'Date and time',
  title: 'Title',
  description: 'description',
  color: 'blue',
  tags: [],
};

DefaultReversed.argTypes = {
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
  time: {
    description: 'timeline item time',
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
};

export const Multiple = (args) => <TimelineEEA {...args}></TimelineEEA>;

Multiple.args = {
  items: [
    {
      icon: 'time',
      time: 'Date and time',
      title: 'Title 1',
      description: 'description 1',
      color: 'blue',
      tags: [],
    },
    {
      icon: 'check circle',
      time: 'Date and time',
      title: 'Title 2',
      description: 'description 2',
      color: 'green',
      tags: [],
    },
    {
      icon: 'minus circle',
      time: 'Date and time',
      title: 'Title 3',
      description: 'description 3',
      color: 'teal',
      tags: [],
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

export const MultipleReversed = (args) => (
  <TimelineEEAReversed {...args}></TimelineEEAReversed>
);

MultipleReversed.args = {
  items: [
    {
      icon: 'time',
      time: 'Date and time',
      title: 'Title 1',
      description: 'description 1',
      color: 'blue',
      tags: [],
    },
    {
      icon: 'check circle',
      time: 'Date and time',
      title: 'Title 2',
      description: 'description 2',
      color: 'green',
      tags: [],
    },
    {
      icon: 'minus circle',
      time: 'Date and time',
      title: 'Title 3',
      description: 'description 3',
      color: 'teal',
      tags: [],
    },
  ],
};

MultipleReversed.argTypes = {
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
