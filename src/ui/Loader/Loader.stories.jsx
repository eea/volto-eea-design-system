import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

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

const Template = (args) => (
  <Segment>
    <Loader {...args} inline="centered" />
  </Segment>
);

export const Default = Template.bind({});
Default.args = {
  active: true,
  content: '',
  size: 'mini',
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
