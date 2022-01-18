import React from 'react';
import { Progress } from 'semantic-ui-react';

export default {
  title: 'Components/Progress',
  component: Progress,
  argTypes: {
    color: {
      options: [
        'red',
        'orange',
        'yellow',
        'olive',
        'green',
        'teal',
        'blue',
        'violet',
        'purple',
        'pink',
        'brown',
        'grey',
        'black',
      ],
      control: { type: 'select' },
      description: 'progress bar filling color',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'grey',
        },
      },
    },
    progress: {
      description: 'text value indicating current progress',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    children: {
      description: 'progress bar label',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: ' "" ',
        },
      },
    },
  },
};

const Template = (args) => (
  <Progress {...args}></Progress>
);

// export const Default = Template.bind({});
// Default.args = {
//   percent: 11,
// };

export const Default = Template.bind({});
Default.args = {
  percent: 80,
  indicating: true,
  progress: true,
  children: 'Label',
};
Default.parameters = {
  controls: { exclude: ['color'] },
  hideNoControlsWarning: true,
};

Default.argTypes = {
  percent: {
    description: 'current percent complete',
    table: {
      type: {
        summary: 'float',
      },
      defaultValue: {
        summary: ' "" ',
      },
    },
  },
  indicating: {
    description: 'visually indicates the current level of progress of a task',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
  },
};

// export const ProgressWithRatio = Template.bind({});
// ProgressWithRatio.args = {
//   value: 80,
//   total: 100,
//   indicating: true,
//   autoSuccess: true,
//   progress: 'ratio',
//   children: 'Label',
// };

export const ProgressWithValue = Template.bind({});
ProgressWithValue.args = {
  value: 80,
  total: 100,
  progress: true,
  indicating: true,
  children: 'Label',
};
ProgressWithValue.parameters = {
  controls: { exclude: ['color'] },
  hideNoControlsWarning: true,
};

ProgressWithValue.argTypes = {
  value: {
    description:
      'For use with total. Together, these will calculate the percent. Mutually excludes percent',
    table: {
      type: {
        summary: 'float',
      },
      defaultValue: {
        summary: ' "" ',
      },
    },
  },
  total: {
    description:
      'For use with value. Together, these will calculate the percent. Mutually excludes percent',
    table: {
      type: {
        summary: 'float',
      },
      defaultValue: {
        summary: ' "" ',
      },
    },
  },
  indicating: {
    description: 'visually indicates the current level of progress of a task',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
  },
};

export const CustomColor = (args) => <Progress {...args}></Progress>;
CustomColor.args = {
  value: 80,
  total: 100,
  progress: true,
  children: 'Label',
  color: 'green',
};

CustomColor.argTypes = {
  value: {
    description:
      'For use with total. Together, these will calculate the percent. Mutually excludes percent',
    table: {
      type: {
        summary: 'float',
      },
      defaultValue: {
        summary: ' "" ',
      },
    },
  },
  total: {
    description:
      'For use with value. Together, these will calculate the percent. Mutually excludes percent',
    table: {
      type: {
        summary: 'float',
      },
      defaultValue: {
        summary: ' "" ',
      },
    },
  },
};
