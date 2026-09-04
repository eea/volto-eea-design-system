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

const DefaultTemplate = (args) => <Loader {...args} inline="centered" />;

const FullPageTemplate = (args) => (
  <Segment>
    <Dimmer active>
      <Loader {...args} className="eea-loader" />
    </Dimmer>

    <Image
      src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
      alt="paragraph"
    />
  </Segment>
);

export const Default = DefaultTemplate.bind({});
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

export const FullPageLoader = FullPageTemplate.bind({});
FullPageLoader.args = {
  content: 'Loading...',
};
