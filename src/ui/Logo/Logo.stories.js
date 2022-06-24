import React from 'react';
import LogoEEA from './Logo';
import LogoImage from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/eea-logo.svg';
import InvertedLogoImage from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/EEA-Logo-White-2.svg';

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

export const Logo = (args) => {
  return <LogoEEA {...args} />;
};

Logo.args = {
  title: 'Site',
  alt: 'European Environment Agency',
  url: 'https://eea.europa.eu',
  src: LogoImage,
  invertedSrc: InvertedLogoImage,
  inverted: false,
};
