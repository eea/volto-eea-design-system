import React from 'react';
import Footer from './Footer';

import Logo1 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/Extras/Group.svg';
import Logo2 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/Extras/Group-3.svg';
import Logo3 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/Extras/Group-154.svg';
import Logo4 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/Extras/Group-95.svg';
import Logo5 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/Extras/Group-2.svg';
import Logo6 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/Extras/Group-98.svg';
import Logo7 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/Extras/Group-5.svg';
import Logo8 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/Extras/Group-96.svg';
import Logo9 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/Extras/Group-4.svg';
import Logo10 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/Extras/Group-1.svg';

export default {
  title: 'Layout/Footer',
  component: Footer,
  argTypes: {},
};

const Template = (args) => <Footer {...args}></Footer>;

export const Default = Template.bind({});
Default.args = {
  header: 'The EEA also contributes to',
  actions: [
    { link: '/#', title: 'CMS Login', copy: false },
    { link: '/#', title: 'Sitemap', copy: false },
    { link: '/#', title: 'Privacy', copy: false },
    { link: '/#', title: 'Copyright', copy: true },
  ],
  sites: [
    { link: '/#', src: Logo1, alt: 'Biodiversity' },
    { link: '/#', src: Logo2, alt: 'Climate and energy in the EU' },
    { link: '/#', src: Logo3, alt: 'Copernicus in situ' },
    {
      link: '/#',
      src: Logo4,
      alt: 'Information platform for chemical monitoring',
    },
    { link: '/#', src: Logo5, alt: 'WISE freshwater' },
    { link: '/#', src: Logo6, alt: 'Forest information system for europe' },
    { link: '/#', src: Logo7, alt: 'Climate adapt' },
    { link: '/#', src: Logo8, alt: 'Copernicus land monitoring service' },
    { link: '/#', src: Logo9, alt: 'European industrial emissions portal' },
    { link: '/#', src: Logo10, alt: 'WISE marine' },
  ],
  social: [
    { name: 'twitter', link: '/#' },
    { name: 'facebook', link: '/#' },
    { name: 'linkedin', link: '/#' },
    { name: 'youtube', link: '/#' },
    { name: 'rss', link: '/#' },
  ],
  contacts: {
    header: 'Contact Us',
    contacts: [
      { icon: 'comment outline', text: 'Ask your question' },
      { icon: 'envelope outline', text: 'Sign up to our newsletter' },
    ],
    address: 'Kongens Nytorv 6 1050 Copenhagen K (+45) 33 36 71 00',
  },
};
