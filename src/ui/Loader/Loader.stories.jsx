import React from 'react';
import { Loader } from 'semantic-ui-react';

export default {
  title: 'Components/Loader',
  component: Loader,
  argTypes: {
    content: {
      description: 'loader primary content',
      table: {
        type: {
          summary: 'custom',
        },
        defaultValue: {
          summary: '',
        },
      },
    },
  },
};

const Template = (args) => <Loader {...args} inline="centered" />;

export const Default = Template.bind({});
Default.args = {
  active: true,
  content: '',
  size: 'medium',
};

Default.argTypes = {
  size: {
    options: [
      'mini',
      'tiny',
      'small',
      'medium',
      'large',
      'big',
      'huge',
      'massive',
    ],
    control: { type: 'select' },
  },
};
