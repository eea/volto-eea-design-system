import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import loaderImage from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/loaderImage.png';

export default {
  title: 'Components/Loader',
  component: Loader,
  argTypes: {
    image: {
      description: "path or url of loader's image",
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '',
        },
      },
    },
    text: {
      description: 'text to appear in loader',
      table: {
        type: {
          summary: 'string',
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
      <Loader>
        <Image src={args.image} alt="EEA loader logo" />
        <p>{args.text}</p>
      </Loader>
    </Dimmer>

    <Image
      src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
      alt="paragraph"
    />
  </Segment>
);

export const Default = Template.bind({});
Default.args = {
  image: loaderImage,
  text: 'Loading...',
};
