import React from 'react';
import LogoEEA from './Logo';
import LogoImage from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/eea-logo.svg';

export default {
  title: 'Components/Logo',
  component: LogoEEA,
  argTypes: {},
};

export const Logo = (args) => {
  return <LogoEEA {...args} />;
};

Logo.args = {
  title: 'Site',
  alt: 'European Environment Agency',
  url: 'https://eea.europa.eu',
  src: LogoImage,
};
