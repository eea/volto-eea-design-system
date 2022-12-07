import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import LogoEEA from './Logo';
import LogoImage from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/eea-logo.svg';
import InvertedLogoImage from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/EEA-Logo-White.svg';

export default {
  title: 'Components/Logo',
  component: LogoEEA,
  argTypes: {
    inverted: {
      description: 'Inverted logo',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'boolean' },
      },
    },
  },
};

export const Logo = (args) => (
  <Container>
    <Segment
      className="eea-segment"
      basic
      floated="left"
      inverted={args.inverted}
    >
      <LogoEEA {...args} />
    </Segment>
  </Container>
);

Logo.args = {
  title: 'European Environment Agency',
  alt: 'European Environment Agency',
  url: 'https://eea.europa.eu',
  src: LogoImage,
  invertedSrc: InvertedLogoImage,
  inverted: false,
};
