import React from 'react';
import { Segment } from 'semantic-ui-react';

export default {
  title: 'Components/Segment',
  component: Segment,
  argTypes: {
    children: {
      description: 'primary content',
      table: {
        type: {
          summary: 'node',
        },
        defaultValue: {
          summary: ' "" ',
        },
      },
    },
    basic: {
      description: 'no special formatting',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    circular: {
      description: 'a segment can be circular',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    compact: {
      description: 'take up only as much space as is necessary',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    disabled: {
      description: 'show its content is disabled',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    loading: {
      description: 'show its content is being loaded',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    raised: {
      description: 'formatted to raise above the page',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    secondary: {
      description: 'formatted to appear less noticeable',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    stacked: {
      description: 'show it contains multiple pages',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    tertiary: {
      description: 'appear even less noticeable',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    vertical: {
      description: 'content aligned vertically',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

const Template = (args) => (
  <Segment className="eea-segment" {...args}></Segment>
);

export const Default = Template.bind({});
Default.args = {
  children: ['Content'],
  basic: false,
  circular: false,
  compact: false,
  disabled: false,
  loading: false,
  raised: false,
  secondary: false,
  stacked: false,
  tertiary: false,
  vertical: false,
};
