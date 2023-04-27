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
import EEA from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/eea-logo-white.svg';

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
  header: 'Environmental information systems',
  description: '',
  actions: [
    { link: '/privacy', title: 'Privacy' },
    { link: '/sitemap', title: 'Sitemap' },
    { link: 'https://www.eea.europa.eu/en/login', title: 'CMS Login' },
  ],
  copyright: [
    { link: 'https://status.eea.europa.eu/', title: 'System status' },
    {
      link: '/copyright',
      title: '© Copyright 2023 EEA',
    },
  ],
  sites: [
    { link: 'https://water.europa.eu/marine', src: Marine, alt: 'WISE marine' },
    {
      link: 'https://water.europa.eu/freshwater',
      src: Freshwater,
      alt: 'WISE freshwater',
    },
    { link: 'https://biodiversity.europa.eu/', src: Bise, alt: 'Biodiversity' },
    {
      link: 'https://forest.eea.europa.eu/',
      src: Fise,
      alt: 'Forest information system for europe',
    },
    {
      link: 'https://climate-adapt.eea.europa.eu/observatory',
      src: ClimateHealth,
      alt: 'Information platform for chemical monitoring',
    },
    {
      link: 'https://climate-adapt.eea.europa.eu/',
      src: Cca,
      alt: 'Climate adapt',
    },
    {
      link: 'https://industry.eea.europa.eu/',
      src: Industry,
      alt: 'European industrial emissions portal',
    },
    {
      link: 'https://climate-energy.eea.europa.eu/',
      src: Energy,
      alt: 'Climate and energy in the EU',
    },
    {
      link: 'https://land.copernicus.eu/',
      src: Copernicus,
      alt: 'Copernicus land monitoring service',
    },
    {
      link: 'https://insitu.copernicus.eu/',
      src: Insitu,
      alt: 'Copernicus in situ',
    },
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
    {
      name: 'twitter',
      icon: 'ri-twitter-fill',
      link: 'https://twitter.com/euenvironment',
    },
    {
      name: 'facebook',
      icon: 'ri-facebook-box-fill',
      link: 'https://www.facebook.com/European.Environment.Agency',
    },
    {
      name: 'linkedin',
      icon: 'ri-linkedin-fill',
      link: 'https://www.linkedin.com/company/european-environment-agency',
    },
    {
      name: 'youtube',
      icon: 'ri-youtube-fill',
      link: 'https://www.youtube.com/user/EEAvideos',
    },
    {
      name: 'instagram',
      icon: 'ri-instagram-fill',
      link: 'https://www.instagram.com/ourplanet_eu',
    },
    { name: 'rss', icon: 'ri-rss-fill', link: '/subscription/news-feeds' },
  ],
  contacts: [
    {
      text: 'About us',
      link: '/about',
      children: [
        { text: 'FAQs', link: 'http://external.site' },
        { text: 'Careers', link: '/careers' },
      ],
    },
    { text: 'Contact us', link: '/contact-us' },
    { text: 'Sign up to our newsletter', link: '/newsletter' },
  ],
};
