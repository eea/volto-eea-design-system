import React from 'react';
import { Container } from 'semantic-ui-react';
import Video from './Video';

import englishTrack from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/video/demo-track-en.vtt';
import romanianTrack from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/video/demo-track-ro.vtt';
import greekTrack from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/video/demo-track-el.vtt';

export default {
  title: 'Components/Video',
  component: Video,
  argTypes: {
    align: {
      options: ['center', 'right', 'left'],
      control: {
        type: 'select',
        labels: {
          '': 'default',
        },
      },
      defaultValue: 'center',
      table: {
        defaultValue: { summary: 'center' },
        type: { summary: 'string' },
      },
    },
  },
};

const Template = (args) => (
  <Container>
    <Video align={args.align}>
      <Video.Body align={args.align}>
        <Video.Embed {...args}>
          <Video.Track tracks={args.tracks} />
        </Video.Embed>
      </Video.Body>
    </Video>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  url: 'https://cmshare.eea.europa.eu/s/Xw7kH2TJGCibHJf/download',
  autoPlay: false,
  loop: false,
  align: 'center',
  placeholder_image: '',
  tracks: [
    { src: englishTrack, code: 'en', lang: 'English' },
    { src: romanianTrack, code: 'ro', lang: 'Română' },
    { src: greekTrack, code: 'el', lang: 'Ελλήνικά' },
  ],
};
