import React from 'react';
import { Container } from 'semantic-ui-react';
import NextCloudEmbed from '@eeacms/volto-nextcloud-video-block/NextCloud/players/NextCloudEmbed';

export default {
  title: 'Components/Video',
  component: NextCloudEmbed,
  argTypes: {},
};

const Template = (args) => (
  <Container>
    <div className="block video align center">
      <div className="video-inner">
        <NextCloudEmbed {...args} />
      </div>
    </div>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  data: {
    url: 'https://cmshare.eea.europa.eu/s/Xw7kH2TJGCibHJf/download',
    autoPlay: false,
    loop: false,
    fluid: false,
  },
  embedSettings: {
    placeholder: '',
  },
};
