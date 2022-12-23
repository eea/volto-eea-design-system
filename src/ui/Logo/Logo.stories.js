import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import LogoEEA from './Logo';
import LogoImage from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/eea-logo.svg';
import InvertedLogoImage from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/eea-logo-white.svg';

import Bise from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/sites/bise-logo.svg';
import BiseInverted from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/sites/bise-logo-white.svg';

import Fise from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/sites/fise-logo.svg';
import FiseInverted from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/sites/fise-logo-white.svg';

import Freshwater from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/sites/wise-freshwater-logo.svg';
import FreshwaterInverted from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/sites/wise-freshwater-logo-white.svg';

import Marine from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/sites/wise-marine-logo.svg';
import MarineInverted from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/sites/wise-marine-logo-white.svg';

// import Energy from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/energy.svg';
// import Insitu from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/insitu.svg';
// import ClimateHealth from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/climate-health.svg';
// import Cca from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/cca.svg';
// import Copernicus from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/copernicus.svg';
// import Industry from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/industry.svg';
// import Eionet from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/eionet.svg';

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
    site: {
      options: [
        'EEA',
        'Biodiversity Information System for Europe',
        'Forest Information System for Europe',
        'Fresh Water Information System for Europe',
        'Marine Water Information System for Europe',
        // 'Climate Adaptation Platform',
        // 'Copernicus in situ component',
        // 'Copernicus land monitoring',
        // 'European Industrial Emissions Portal',
        // 'Information Platform for Chemical Monitoring',
      ],
      control: { type: 'select' },
      defaultValue: 'tertiary',
      table: {
        name: 'Site Logo',
        defaultValue: { summary: 'tertiary' },
        type: { summary: 'string' },
      },
    },
  },
};

const SiteLogo = (args) => {
  let logo = args.site;

  if (logo === 'Biodiversity Information System for Europe') {
    return (
      <LogoEEA
        {...args}
        src={Bise}
        invertedSrc={BiseInverted}
        url="https://biodiversity.europa.eu/"
      />
    );
  } else if (logo === 'Forest Information System for Europe') {
    return (
      <LogoEEA
        {...args}
        src={Fise}
        invertedSrc={FiseInverted}
        url="https://forest.eea.europa.eu/"
      />
    );
  } else if (logo === 'Marine Water Information System for Europe') {
    return (
      <LogoEEA
        {...args}
        src={Marine}
        invertedSrc={MarineInverted}
        url="https://water.europa.eu/marine"
      />
    );
  } else if (logo === 'Fresh Water Information System for Europe') {
    return (
      <LogoEEA
        {...args}
        src={Freshwater}
        invertedSrc={FreshwaterInverted}
        url="https://water.europa.eu/freshwater"
      />
    );
  }

  // else if (logo === 'Climate Adaptation Platform') {
  //   return <LogoEEA {...args} src={Energy} invertedSrc={Energy} />
  // } else if (logo === 'Copernicus in situ component') {
  //   return <LogoEEA {...args} src={Insitu} invertedSrc={Insitu} />
  // } else if (logo === 'Copernicus land monitoring') {
  //   return <LogoEEA {...args} src={Copernicus} invertedSrc={Copernicus} />
  // } else if (logo === 'European Industrial Emissions Portal') {
  //   return <LogoEEA {...args} src={Industry} invertedSrc={Industry} />
  // } else if (logo === 'Information Platform for Chemical Monitoring') {
  //   return <LogoEEA {...args} src={Bise} invertedSrc={Bise} />
  // }
  else {
    return <LogoEEA {...args} />;
  }
};

export const Logo = (args) => (
  <Container>
    <Segment
      className="eea-segment"
      basic
      floated="left"
      inverted={args.inverted}
    >
      <SiteLogo {...args} />
    </Segment>
  </Container>
);

Logo.args = {
  site: 'EEA',
  title: 'European Environment Agency',
  alt: 'European Environment Agency',
  url: 'https://eea.europa.eu',
  src: LogoImage,
  invertedSrc: InvertedLogoImage,
  inverted: false,
};
