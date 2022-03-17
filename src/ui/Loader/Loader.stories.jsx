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
    <Dimmer active>
      <Loader {...args} />
    </Dimmer>

    <Image
      src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
      alt="paragraph"
    />
  </Segment>
);

export const Default = Template.bind({});
Default.args = {
  content: 'Loading...',
};
