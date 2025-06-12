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
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

export default {
  title: 'Layout/Footer',
  component: Footer,
  argTypes: {},
};

const mockStore = configureStore();
const store = mockStore({
  intl: {
    locale: 'en',
    messages: {},
  },
});

const Template = (args) => (
  <Provider store={store}>
    <Footer>
      <Footer.SubFooter {...args} />
      <Footer.Header>{args.header}</Footer.Header>
      <Footer.SitesButton {...args} />
      <Footer.Social {...args} />
      <Footer.Actions actions={args.actions} copyright={args.copyright} />
    </Footer>
  </Provider>
);

export const Default = Template.bind({});
Default.args = {
  buttonName: 'Explore our environmental information systems',
  hrefButton: 'https://www.eea.europa.eu/en/information-systems',
  description: '',
  actions: [
    { url: '/privacy', title: 'Privacy' },
    { url: '/sitemap', title: 'Sitemap' },
    { url: 'https://www.eea.europa.eu/en/login', title: 'CMS Login' },
  ],
  copyright: [
    { url: 'https://status.eea.europa.eu/', title: 'System status' },
    {
      url: '/copyright',
      title: '© Copyright 2023 EEA',
    },
  ],
  sites: [
    {
      url: 'https://water.europa.eu/marine',
      src: Marine,
      alt: 'WISE marine',
      className: 'marine logo',
    },
    {
      url: 'https://water.europa.eu/freshwater',
      src: Freshwater,
      alt: 'WISE freshwater',
      className: 'freshwater logo',
    },
    {
      url: 'https://biodiversity.europa.eu/',
      src: Bise,
      alt: 'Biodiversity',
      className: 'biodiversity logo',
    },
    {
      url: 'https://forest.eea.europa.eu/',
      src: Fise,
      alt: 'Forest information system for europe',
      className: 'fise logo',
    },
    {
      url: 'https://climate-adapt.eea.europa.eu/observatory',
      src: ClimateHealth,
      alt: 'Information platform for chemical monitoring',
      className: 'climate logo',
    },
    {
      url: 'https://climate-adapt.eea.europa.eu/',
      src: Cca,
      alt: 'Climate adapt',
      className: 'cca logo',
    },
    {
      url: 'https://industry.eea.europa.eu/',
      src: Industry,
      alt: 'European industrial emissions portal',
      className: 'industry logo',
    },
    {
      url: 'https://climate-energy.eea.europa.eu/',
      src: Energy,
      alt: 'Climate and energy in the EU',
      className: 'energy logo',
    },
    {
      url: 'https://land.copernicus.eu/',
      src: Copernicus,
      alt: 'Copernicus land monitoring service',
      className: 'copernicus logo',
    },
    {
      url: 'https://insitu.copernicus.eu/',
      src: Insitu,
      alt: 'Copernicus in situ',
      className: 'insitu logo',
    },
  ],
  managedBy: [
    {
      url: 'https://www.eea.europa.eu/',
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
      url: 'https://www.eionet.europa.eu/',
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
      url: 'https://twitter.com/euenvironment',
    },
    {
      name: 'facebook',
      icon: 'ri-facebook-box-fill',
      url: 'https://www.facebook.com/European.Environment.Agency',
    },
    {
      name: 'linkedin',
      icon: 'ri-linkedin-fill',
      url: 'https://www.linkedin.com/company/european-environment-agency',
    },
    {
      name: 'youtube',
      icon: 'ri-youtube-fill',
      url: 'https://www.youtube.com/user/EEAvideos',
    },
    {
      name: 'instagram',
      icon: 'ri-instagram-fill',
      url: 'https://www.instagram.com/ourplanet_eu',
    },
    { name: 'rss', icon: 'ri-rss-fill', url: '/subscription/news-feeds' },
  ],
  contacts: [
    {
      text: 'About us',
      url: '/about',
      children: [
        { text: 'FAQs', url: 'http://external.site' },
        { text: 'Careers', url: '/careers' },
      ],
    },
    { text: 'Contact us', url: '/contact-us' },
    { text: 'Sign up to our newsletter', url: '/newsletter' },
  ],
};
