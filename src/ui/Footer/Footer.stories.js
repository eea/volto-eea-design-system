import React from 'react';
import Footer from './Footer';
import Bise from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/bise.svg';
import Energy from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/energy.svg';
import Insitu from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/insitu.svg';
import ClimateHealth from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/climate-health.svg';
import Freshwater from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/freshwater.svg';
import Fise from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/fise.svg';
import Cca from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/cca.svg';
import Copernicus from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/copernicus.svg';
import Industry from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/industry.svg';
import Marine from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/marine.svg';
import Eionet from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/eionet.svg';
import EEA from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/EEA-Logo-White.svg';

export default {
  title: 'Layout/Footer',
  component: Footer,
  argTypes: {},
};

const Template = (args) => (
  <Footer>
    <Footer.SubFooter {...args} />
    <Footer.Header>{args.header}</Footer.Header>
    <Footer.Sites sites={args.sites} />
    <Footer.Actions actions={args.actions} copyright={args.copyright} />
  </Footer>
);

export const Default = Template.bind({});
Default.args = {
  header: 'Thematic information platforms',
  actions: [
    { link: '/#', title: 'Privacy' },
    { link: '/#', title: 'Sitemap' },
    { link: '/#', title: 'CMS Login' },
  ],
  copyright: [{ link: '/#', site: 'EEA' }],
  sites: [
    { link: '/#', src: Marine, alt: 'WISE marine' },
    { link: '/#', src: Freshwater, alt: 'WISE freshwater' },
    { link: '/#', src: Bise, alt: 'Biodiversity' },
    { link: '/#', src: Fise, alt: 'Forest information system for europe' },
    {
      link: '/#',
      src: ClimateHealth,
      alt: 'Information platform for chemical monitoring',
    },
    { link: '/#', src: Cca, alt: 'Climate adapt' },
    { link: '/#', src: Industry, alt: 'European industrial emissions portal' },
    { link: '/#', src: Energy, alt: 'Climate and energy in the EU' },
    { link: '/#', src: Copernicus, alt: 'Copernicus land monitoring service' },
    { link: '/#', src: Insitu, alt: 'Copernicus in situ' },
  ],
  managedBy: [
    {
      link: 'https://www.eea.europa.eu/',
      src: EEA,
      alt: 'EEA Logo',
      className: 'site logo',
      columnSize: {
        mobile: 5,
        tablet: 4,
        computer: 4,
      },
    },
    {
      link: 'https://www.eionet.europa.eu/',
      src: Eionet,
      alt: 'EIONET Logo',
      className: 'eionet logo',
      columnSize: {
        mobile: 7,
        tablet: 4,
        computer: 4,
      },
    },
  ],
  social: [
    { name: 'twitter', icon: 'ri-twitter-fill', link: '/#' },
    { name: 'facebook', icon: 'ri-facebook-box-fill', link: '/#' },
    { name: 'linkedin', icon: 'ri-linkedin-fill', link: '/#' },
    { name: 'youtube', icon: 'ri-youtube-fill', link: '/#' },
    { name: 'instagram', icon: 'ri-instagram-fill', link: '/#' },
    { name: 'rss', icon: 'ri-rss-fill', link: '/#' },
  ],
  contacts: [
    {
      text: 'About us',
      link: '/#',
      children: [
        { text: 'FAQs', link: '/#' },
        { text: 'Careers', link: '/#' },
      ],
    },
    { text: 'Contact us', link: '/#' },
    { text: 'Sign up to our newsletter', link: '/#' },
  ],
};
