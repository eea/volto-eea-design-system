import React from 'react';
import { Statistic } from 'semantic-ui-react';

export default {
  title: 'Components/Statistic',
  component: Statistic,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['mini', 'tiny', 'small', '', 'large', 'huge'],
      },
      description: 'statistic size',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: ' "" ',
        },
      },
    },
    horizontal: {
      description: 'present its measurement horizontally',
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
  <Statistic.Group {...args}>
    {args.elements &&
      args.elements.map((element, index) => (
        <Statistic key={index} {...element}></Statistic>
      ))}
    {!args.elements && <Statistic {...args}></Statistic>}
  </Statistic.Group>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Statistic Label',
  value: 'Value',
  horizontal: false,
  size: 'small',
};

Default.argTypes = {
  label: {
    description: 'label content of the Statistic',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: ' "" ',
      },
    },
  },
  value: {
    description: 'value content of the statistic',
    table: {
      type: {
        summary: 'custom',
      },
      defaultValue: {
        summary: ' "" ',
      },
    },
  },
};

export const Group = Template.bind({});
Group.args = {
  elements: [
    { ...Default.args, label: 'label 1', value: '50' },
    { ...Default.args, label: 'label 2', value: '500' },
    { ...Default.args, label: 'label 3', value: '5000' },
  ],
  horizontal: false,
  inverted: false,
  widths: 'three',
};

Group.argTypes = {
  elements: {
    description: 'array of different statistics',
    table: {
      type: {
        summary: 'object',
      },
      defaultValue: {
        summary: ' "" ',
      },
    },
  },
  widths: {
    description: 'a statistic group can have its items divided evenly',
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
