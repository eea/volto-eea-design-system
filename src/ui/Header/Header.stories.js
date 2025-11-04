import React from 'react';
import Header from './Header';
import { Dropdown, Image, Segment, Container } from 'semantic-ui-react';
import { Logo } from '@eeacms/volto-eea-design-system/ui';

import LogoImage from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/eea-logo.svg';
import InvertedLogoImage from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/eea-logo-white.svg';
import globeIcon from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/global-line.svg';
import eeaFlag from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/eea.png';
import cx from 'classnames';

export default {
  title: 'Layout/Header',
  component: Header,
  excludeStories: /menuItems$/,
  argTypes: {
    links: {
      table: {
        disable: true,
      },
    },
    languages: {
      table: {
        disable: true,
      },
    },
    menuItems: {
      description: 'items for the header menu',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '' },
      },
    },
    transparency: {
      description: 'transparent main section',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'boolean' },
      },
    },
    inverted: {
      description: 'Inverted logo',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'boolean' },
      },
    },
  },
  decorators: [(Story) => <Story />],
};

const logoProps = {
  title: 'Site',
  alt: 'European Environment Agency',
  url: 'https://eea.europa.eu',
  src: LogoImage,
  invertedSrc: InvertedLogoImage,
};

const links = [
  { title: 'European Environment Agency website', href: '/#' },
  { title: 'WISE marine - Marine information system for Europe', href: '/#' },
  {
    title: 'WISE freshwater - Freshwater information system for Europe',
    href: '/#',
  },
  { title: 'BISE - Biodiversity information system for Europe', href: '/#' },
  { title: 'FISE - Forest information system for Europe', href: '/#' },
  { title: 'European Climate and health observatory', href: '/#' },
  { title: 'ClimateADAPT', href: '/#' },
  { title: 'European Industrial Emissions Portal', href: '/#' },
  { title: 'Climate and Energy in the EU', href: '/#' },
  { title: 'Copernicus Land Monitoring Service', href: '/#' },
  { title: 'Copernicus InSitu', href: '/#' },
];

const languages = [
  { name: 'Български', code: 'bg' },
  { name: 'čeština', code: 'cs' },
  { name: 'Hrvatski', code: 'hr' },
  { name: 'dansk', code: 'da' },
  { name: 'Nederlands', code: 'nl' },
  { name: 'ελληνικά', code: 'el' },
  { name: 'English', code: 'en' },
  { name: 'eesti', code: 'et' },
  { name: 'Suomi', code: 'fi' },
  { name: 'Français', code: 'fr' },
  { name: 'Deutsch', code: 'de' },
  { name: 'magyar', code: 'hu' },
  { name: 'Íslenska', code: 'is' },
  { name: 'italiano', code: 'it' },
  { name: 'Latviešu', code: 'lv' },
  { name: 'lietuvių', code: 'lt' },
  { name: 'Malti', code: 'mt' },
  { name: 'Norsk', code: 'no' },
  { name: 'polski', code: 'pl' },
  { name: 'Português', code: 'pt' },
  { name: 'Română', code: 'ro' },
  { name: 'slovenčina', code: 'sk' },
  { name: 'Slovenščina', code: 'sl' },
  { name: 'Español', code: 'es' },
  { name: 'Svenska', code: 'sv' },
  { name: 'Türkçe', code: 'tr' },
];

export const menuItems = [
  {
    '@id': 'Topics',
    items: [
      {
        '@id': 'At-a-glance',
        description: '',
        items: [
          {
            '@id': 'State-of-Europe’s-environment',
            description: '',
            items: [],
            review_state: null,
            title: 'State of Europe’s environment',
            url: '/#',
          },
          {
            '@id': 'Climate',
            description: '',
            items: [],
            review_state: null,
            title: 'Climate',
            url: '/#',
          },
          {
            '@id': 'Economy-and-resources',
            description: '',
            items: [],
            review_state: null,
            title: 'Economy and resources',
            url: '/#',
          },
          {
            '@id': 'Health',
            description: '',
            items: [],
            review_state: null,
            title: 'Health',
            url: '/#',
          },
          {
            '@id': 'Nature',
            description: '',
            items: [],
            review_state: null,
            title: 'Nature',
            url: '/#',
          },
          {
            '@id': 'Sustainability',
            description: '',
            items: [],
            review_state: null,
            title: 'Sustainability',
            url: '/#',
          },
        ],
        review_state: null,
        title: 'At a glance',
        url: '/#',
      },
      {
        '@id': 'Closer-look',
        description: '',
        items: [
          {
            '@id': 'Agriculture-and-food-system',
            description: '',
            items: [],
            review_state: null,
            title: 'Agriculture and food system',
            url: '/#',
          },
          {
            '@id': 'Air-quality',
            description: '',
            items: [],
            review_state: null,
            title: 'Air quality',
            url: '/#',
          },
          {
            '@id': 'Bathing-water',
            description: '',
            items: [],
            review_state: null,
            title: 'Bathing water',
            url: '/#',
          },
          {
            '@id': 'Biodiversity-habitats-and-species',
            description: '',
            items: [],
            review_state: null,
            title: 'Biodiversity , habitats and species',
            url: '/#',
          },
          {
            '@id': 'Bioeconomy',
            description: '',
            items: [],
            review_state: null,
            title: 'Bioeconomy',
            url: '/#',
          },
          {
            '@id': 'Buildings and construction',
            description: '',
            items: [],
            review_state: null,
            title: 'Buildings and construction',
            url: '/#',
          },
          {
            '@id': 'CC-Adaptation',
            description: '',
            items: [],
            review_state: null,
            title: 'CC Adaptation',
            url: '/#',
          },
          {
            '@id': 'CC-impacts-and-risks',
            description: '',
            items: [],
            review_state: null,
            title: 'CC impacts and risks',
            url: '/#',
          },
          {
            '@id': 'CC-mitigation',
            description: '',
            items: [],
            review_state: null,
            title: 'CC mitigation',
            url: '/#',
          },
          {
            '@id': 'Chemicals',
            description: '',
            items: [],
            review_state: null,
            title: 'Chemicals',
            url: '/#',
          },
          {
            '@id': 'Circular-economy',
            description: '',
            items: [],
            review_state: null,
            title: 'Circular economy',
            url: '/#',
          },
          {
            '@id': 'Electric-vehicles',
            description: '',
            items: [],
            review_state: null,
            title: 'Electric vehicles',
            url: '/#',
          },
          {
            '@id': 'Energy',
            description: '',
            items: [],
            review_state: null,
            title: 'Energy',
            url: '/#',
          },
          {
            '@id': 'Energy-efficiency',
            description: '',
            items: [],
            review_state: null,
            title: 'Energy efficiency',
            url: '/#',
          },
          {
            '@id': 'Environmental-health-impacts',
            description: '',
            items: [],
            review_state: null,
            title: 'Environmental health impacts',
            url: '/#',
          },
          {
            '@id': 'Enivornmental-inequalities',
            description: '',
            items: [],
            review_state: null,
            title: 'Enivornmental inequalities',
            url: '/#',
          },
          {
            '@id': 'Environmental-noise',
            description: '',
            items: [],
            review_state: null,
            title: 'Environmental noise',
            url: '/#',
          },
          {
            '@id': 'Extreme-weather-floods-droughts-heatwaves',
            description: '',
            items: [],
            review_state: null,
            title: 'Extreme weather: floods, droughts, heatwaves',
            url: '/#',
          },
          {
            '@id': 'Forests-and-forestry',
            description: '',
            items: [],
            review_state: null,
            title: 'Forests and forestry',
            url: '/#',
          },
          {
            '@id': 'Industry',
            description: '',
            items: [],
            review_state: null,
            title: 'Industry',
            url: '/#',
          },
          {
            '@id': 'Land-use',
            description: '',
            items: [],
            review_state: null,
            title: 'Land use',
            url: '/#',
          },
          {
            '@id': 'Marine-and-coastal-zones',
            description: '',
            items: [],
            review_state: null,
            title: 'Marine and coastal zones',
            url: '/#',
          },
          {
            '@id': 'Plastics',
            description: '',
            items: [],
            review_state: null,
            title: 'Plastics',
            url: '/#',
          },
          {
            '@id': 'Pollution',
            description: '',
            items: [],
            review_state: null,
            title: 'Pollution',
            url: '/#',
          },
          {
            '@id': 'Production-and-consumption ',
            description: '',
            items: [],
            review_state: null,
            title: 'Production and consumption ',
            url: '/#',
          },
          {
            '@id': 'Protected-areas',
            description: '',
            items: [],
            review_state: null,
            title: 'Protected areas',
            url: '/#',
          },
          {
            '@id': 'Protecting-and-restoring-nature',
            description: '',
            items: [],
            review_state: null,
            title: 'Protecting and restoring nature',
            url: '/#',
          },
          {
            '@id': 'Renewable-energy',
            description: '',
            items: [],
            review_state: null,
            title: 'Renewable-energy',
            url: '/#',
          },
          {
            '@id': 'Resource-use-and-materials',
            description: '',
            items: [],
            review_state: null,
            title: 'Resource use and materials',
            url: '/#',
          },
          {
            '@id': 'Road-transport',
            description: '',
            items: [],
            review_state: null,
            title: 'Road transport',
            url: '/#',
          },
          {
            '@id': 'Soil',
            description: '',
            items: [],
            review_state: null,
            title: 'Soil',
            url: '/#',
          },
          {
            '@id': 'State-of-Europes-environment',
            description: '',
            items: [],
            review_state: null,
            title: 'State of Europe’s  environment',
            url: '/#',
          },
          {
            '@id': 'Sustainability-challenges',
            description: '',
            items: [],
            review_state: null,
            title: 'Sustainability challenges',
            url: '/#',
          },
          {
            '@id': 'Sustainability-solutions',
            description: '',
            items: [],
            review_state: null,
            title: 'Sustainability solutions',
            url: '/#',
          },
          {
            '@id': 'Sustainable-finance',
            description: '',
            items: [],
            review_state: null,
            title: 'Sustainable-finance',
            url: '/#',
          },
          {
            '@id': 'Textiles',
            description: '',
            items: [],
            review_state: null,
            title: 'Textiles',
            url: '/#',
          },
          {
            '@id': 'Urban-sustainability',
            description: '',
            items: [],
            review_state: null,
            title: 'Urban sustainability',
            url: '/#',
          },
          {
            '@id': 'Waste',
            description: '',
            items: [],
            review_state: null,
            title: 'Waste',
            url: '/#',
          },
          {
            '@id': 'Water',
            description: '',
            items: [],
            review_state: null,
            title: 'Water',
            url: '/#',
          },
        ],
        review_state: null,
        title: 'Closer look',
        url: '/#',
      },
    ],
    review_state: null,
    title: 'Topics',
    url: '/en/topics',
  },
  {
    '@id': 'Analysis-and-data',
    items: [
      {
        '@id': 'Pulications',
        nav_description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        items: [],
        review_state: null,
        title: 'Pulications',
        nav_title: 'Pulications nav',
        url: '/#',
      },
      {
        '@id': 'Indicators',
        nav_description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        items: [],
        review_state: null,
        title: 'Indicators',
        nav_title: 'Indicators nav',
        url: '/#',
      },
      {
        '@id': 'Maps-and-charts',
        nav_description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        items: [],
        review_state: null,
        title: 'Maps and charts',
        url: '/#',
      },
      {
        '@id': 'Country-fact-sheets',
        nav_description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        items: [],
        review_state: null,
        title: 'Country fact sheets',
        nav_title: '',
        url: '/#',
      },
      {
        '@id': 'Datahub',
        nav_description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        items: [],
        review_state: null,
        title: 'Datahub',
        nav_title: 'Datahub nav',
        url: '/#',
      },
    ],
    review_state: null,
    title: 'Analysis and data',
    url: '/#',
  },
  {
    '@id': 'Countries',
    items: [
      {
        '@id': 'EEA-member-countries',
        description: '',
        items: [
          {
            '@id': 'Austria',
            description: '',
            items: [],
            review_state: null,
            title: 'Austria',
            url: '/#',
          },
          {
            '@id': 'Belgium',
            description: '',
            items: [],
            review_state: null,
            title: 'Belgium',
            url: '/#',
          },
          {
            '@id': 'Bulgaria',
            description: '',
            items: [],
            review_state: null,
            title: 'Bulgaria',
            url: '/#',
          },
          {
            '@id': 'Croatia',
            description: '',
            items: [],
            review_state: null,
            title: 'Croatia',
            url: '/#',
          },
          {
            '@id': 'Cyprus',
            description: '',
            items: [],
            review_state: null,
            title: 'Cyprus',
            url: '/#',
          },
          {
            '@id': 'Czechia',
            description: '',
            items: [],
            review_state: null,
            title: 'Czechia',
            url: '/#',
          },
          {
            '@id': 'Denmark',
            description: '',
            items: [],
            review_state: null,
            title: 'Denmark',
            url: '/#',
          },
          {
            '@id': 'Estonia',
            description: '',
            items: [],
            review_state: null,
            title: 'Estonia',
            url: '/#',
          },
          {
            '@id': 'Finland',
            description: '',
            items: [],
            review_state: null,
            title: 'Finland',
            url: '/#',
          },
          {
            '@id': 'France',
            description: '',
            items: [],
            review_state: null,
            title: 'France',
            url: '/#',
          },
          {
            '@id': 'Germany',
            description: '',
            items: [],
            review_state: null,
            title: 'Germany',
            url: '/#',
          },
          {
            '@id': 'Greece',
            description: '',
            items: [],
            review_state: null,
            title: 'Greece',
            url: '/#',
          },
          {
            '@id': 'Hungary',
            description: '',
            items: [],
            review_state: null,
            title: 'Hungary',
            url: '/#',
          },
          {
            '@id': 'Iceland',
            description: '',
            items: [],
            review_state: null,
            title: 'Iceland',
            url: '/#',
          },
          {
            '@id': 'Ireland',
            description: '',
            items: [],
            review_state: null,
            title: 'Ireland',
            url: '/#',
          },
          {
            '@id': 'Italy',
            description: '',
            items: [],
            review_state: null,
            title: 'Italy',
            url: '/#',
          },
          {
            '@id': 'Latvia',
            description: '',
            items: [],
            review_state: null,
            title: 'Latvia',
            url: '/#',
          },
          {
            '@id': 'Liechtenstein',
            description: '',
            items: [],
            review_state: null,
            title: 'Liechtenstein',
            url: '/#',
          },
          {
            '@id': 'Lithuania',
            description: '',
            items: [],
            review_state: null,
            title: 'Lithuania',
            url: '/#',
          },
          {
            '@id': 'Luxembourg',
            description: '',
            items: [],
            review_state: null,
            title: 'Luxembourg',
            url: '/#',
          },
          {
            '@id': 'Malta',
            description: '',
            items: [],
            review_state: null,
            title: 'Malta',
            url: '/#',
          },
          {
            '@id': 'Netherlands',
            description: '',
            items: [],
            review_state: null,
            title: 'Netherlands',
            url: '/#',
          },
          {
            '@id': 'Norway',
            description: '',
            items: [],
            review_state: null,
            title: 'Norway',
            url: '/#',
          },
          {
            '@id': 'Poland',
            description: '',
            items: [],
            review_state: null,
            title: 'Poland',
            url: '/#',
          },
          {
            '@id': 'Portugal',
            description: '',
            items: [],
            review_state: null,
            title: 'Portugal',
            url: '/#',
          },
          {
            '@id': 'Romania',
            description: '',
            items: [],
            review_state: null,
            title: 'Romania',
            url: '/#',
          },
          {
            '@id': 'Slovakia',
            description: '',
            items: [],
            review_state: null,
            title: 'Slovakia',
            url: '/#',
          },
          {
            '@id': 'Slovenia',
            description: '',
            items: [],
            review_state: null,
            title: 'Slovenia',
            url: '/#',
          },
          {
            '@id': 'Spain',
            description: '',
            items: [],
            review_state: null,
            title: 'Spain',
            url: '/#',
          },
          {
            '@id': 'Sweden',
            description: '',
            items: [],
            review_state: null,
            title: 'Sweden',
            url: '/#',
          },
          {
            '@id': 'Switzerland',
            description: '',
            items: [],
            review_state: null,
            title: 'Switzerland',
            url: '/#',
          },
          {
            '@id': 'Turkey',
            description: '',
            items: [],
            review_state: null,
            title: 'Turkey',
            url: '/#',
          },
        ],
        review_state: null,
        title: 'EEA member countries',
        url: '/#',
      },
      {
        '@id': 'Cooperating-countries',
        description: '',
        items: [
          {
            '@id': 'Albania',
            description: '',
            items: [],
            review_state: null,
            title: 'Albania',
            url: '/#',
          },
          {
            '@id': 'Bosnia-and-Herzegovina',
            description: '',
            items: [],
            review_state: null,
            title: 'Bosnia and Herzegovina',
            url: '/#',
          },
          {
            '@id': 'Kosovo**',
            description: '',
            items: [],
            review_state: null,
            title: 'Kosovo**',
            url: '/#',
          },
          {
            '@id': 'Montenegro',
            description: '',
            items: [],
            review_state: null,
            title: 'Montenegro',
            url: '/#',
          },
          {
            '@id': 'North-Macedonia',
            description: '',
            items: [],
            review_state: null,
            title: 'North Macedonia',
            url: '/#',
          },
          {
            '@id': 'Serbia',
            description: '',
            items: [],
            review_state: null,
            title: 'Serbia',
            url: '/#',
          },
        ],
        review_state: null,
        title: 'Cooperating countries',
        url: '/#',
      },
      {
        '@id': 'Former-member-country',
        description: '',
        items: [
          {
            '@id': 'United Kingdom*',
            description: '',
            items: [],
            review_state: null,
            title: 'United Kingdom*',
            url: '/#',
          },
        ],
        review_state: null,
        title: 'Former member country',
        url: '/#',
      },
    ],
    review_state: null,
    title: 'Countries',
    url: '/en/countries',
  },
  {
    '@id': 'Newsroom',
    items: [
      {
        '@id': 'Press-releases',
        items: [],
        review_state: null,
        title: 'Press releases',
        url: '/#',
      },
      {
        '@id': 'Feature-articles',
        items: [],
        review_state: null,
        title: 'Feature articles',
        url: '/#',
      },
      {
        '@id': 'Corporate-visuals',
        items: [],
        review_state: null,
        title: 'Corporate visuals',
        url: '/#',
      },
      {
        '@id': 'Events',
        items: [],
        review_state: null,
        title: 'Events',
        url: '/#',
      },
      {
        '@id': 'Photo-competitions',
        items: [],
        review_state: null,
        title: 'Photo competitions',
        url: '/#',
      },
      {
        '@id': 'Newsletter',
        items: [],
        review_state: null,
        title: 'Newsletter',
        url: '/#',
      },
    ],
    review_state: null,
    title: 'Newsroom',
    url: '/#',
  },
  {
    '@id': 'About-Us',
    items: [
      {
        '@id': 'Who-we-are',
        description: '',
        items: [
          {
            '@id': 'Governance',
            description: '',
            items: [],
            review_state: null,
            title: 'Governance',
            url: '/#',
          },
          {
            '@id': 'Our-knowledge-network—Eionet',
            description: '',
            items: [],
            review_state: null,
            title: 'Our knowledge network — Eionet',
            url: '/#',
          },
          {
            '@id': 'Projects-and-cooperation-agreements',
            description: '',
            items: [],
            review_state: null,
            title: 'Projects and cooperation agreements',
            url: '/#',
          },
          {
            '@id': 'Becoming-a-climate-neutral-agency',
            description: '',
            items: [],
            review_state: null,
            title: 'Becoming a climate neutral agency',
            url: '/#',
          },
        ],
        review_state: null,
        title: 'Who we are',
        url: '/#',
      },
      {
        '@id': 'Key-partners',
        description: '',
        items: [
          {
            '@id': 'European-Union-partners',
            description: '',
            items: [],
            review_state: null,
            title: 'European Union partners',
            url: '/#',
          },
          {
            '@id': 'International-engagement',
            description: '',
            items: [],
            review_state: null,
            title: 'International engagement',
            url: '/#',
          },
          {
            '@id': 'Copernicus',
            description: '',
            items: [],
            review_state: null,
            title: 'Copernicus',
            url: '/#',
          },
        ],
        review_state: null,
        title: 'Key partners',
        url: '/#',
      },
      {
        '@id': 'Careers',
        description: '',
        items: [
          {
            '@id': 'How-to-apply',
            description: '',
            items: [],
            review_state: null,
            title: 'How to apply',
            url: '/#',
          },
          {
            '@id': 'Our-workplace',
            description: '',
            items: [],
            review_state: null,
            title: 'Our workplace',
            url: '/#',
          },
          {
            '@id': 'Traineeships',
            description: '',
            items: [],
            review_state: null,
            title: 'Traineeships',
            url: '/#',
          },
        ],
        review_state: null,
        title: 'Careers',
        url: '/#',
      },
      {
        '@id': 'Procurement-and-grants',
        description: '',
        items: [
          {
            '@id': 'Contracts-between-€15k-and-€140k',
            description: '',
            items: [],
            review_state: null,
            title: 'Contracts between €15k and €140k',
            url: '/#',
          },
          {
            '@id': 'Contracts-above-€140k',
            description: '',
            items: [],
            review_state: null,
            title: 'Contracts above €140k',
            url: '/#',
          },
          {
            '@id': 'Toolbox',
            description: '',
            items: [],
            review_state: null,
            title: 'Toolbox',
            url: '/#',
          },
        ],
        review_state: null,
        title: 'Procurement and grants',
        url: '/#',
      },
      {
        '@id': 'Policy-corner',
        description: '',
        items: [],
        review_state: null,
        title: 'Policy corner: EU policies we support',
        url: '/#',
      },
      {
        '@id': 'Working-practices',
        description: '',
        items: [
          {
            '@id': 'Procedures-and-policies',
            description: '',
            items: [],
            review_state: null,
            title: 'Procedures and policies',
            url: '/#',
          },
          {
            '@id': 'Personal-data-protection',
            description: '',
            items: [],
            review_state: null,
            title: 'Personal data protection',
            url: '/#',
          },
        ],
        review_state: null,
        title: 'Working practices',
        url: '/#',
      },
      {
        '@id': 'Contact-us',
        description: '',
        items: [
          {
            '@id': 'Frequently-asked-questions',
            description: '',
            items: [],
            review_state: null,
            title: 'Frequently asked questions (FAQs)',
            url: '/#',
          },
          {
            '@id': 'Ask-your-question',
            description: '',
            items: [],
            review_state: null,
            title: 'Ask your question',
            url: '/#',
          },
        ],
        review_state: null,
        title: 'Contact us',
        url: '/#',
      },
    ],
    review_state: null,
    title: 'About Us',
    url: '/en/about',
  },
];

const headerSearchBox = [
  {
    isDefault: true,
    path: '/en/advanced-search',
    placeholder: 'Search or ask your question...',
    description: 'For more search options',
    buttonTitle: 'Go to advanced search',
    searchSuggestions: {
      maxToShow: 6,
      suggestionsTitle: 'Try our suggestions',
      suggestions: [
        'What is PFAS?',
        'Which transport mode has the lowest pollution?',
        'Which countries use most renewable energy?',
        'How many premature deaths are attributed to PM2.5?',
        'How many premature deaths are attributed to air pollution?',
        'How much have new cars co2 emissions decreased?',
        'What countries had the highest land take in the EEA-39?',
        'How many people are exposed to air pollution?',
      ],
    },
  },
];

const debounce = (func) => {
  let timer;
  return (event) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, 50, event);
  };
};

const menuItemsLayouts = {
  '/en/topics': {
    menuItemChildrenListColumns: [1, 4],
    menuItemColumns: [
      'at-a-glance three wide column',
      'topics-right-column nine wide column',
    ],
    hideChildrenFromNavigation: false,
  },
  '/en/countries': {
    menuItemColumns: ['eight wide column', 'four wide column'],
    menuItemChildrenListColumns: [5, 2],
    appendExtraMenuItemsToLastColumn: true,
    hideChildrenFromNavigation: false,
  },
  '/en/about': {
    hideChildrenFromNavigation: false,
  },
};

const handleDropdownClick = (event) => {
  event.stopPropagation();
};

const Template = (args) => {
  const [viewportWidth, setWidth] = React.useState(
    typeof window !== 'undefined' && window.innerWidth,
  );
  React.useEffect(() => {
    const handleWindowResize = window.addEventListener('resize', () =>
      debounce(setWidth(window.innerWidth)),
    );

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const {
    languages,
    links,
    linksMenuTitle,
    tabletLinksMenuTitle,
    mobileLinksMenuTitle,
    menuItems,
    hasLanguageDropdown,
  } = args;

  const [language, setLanguage] = React.useState('en');
  const [pathname, setPathname] = React.useState('/');

  return (
    <>
      <Header>
        <Header.TopHeader>
          <Header.TopItem className="official-union">
            <Image src={eeaFlag} alt="European Union flag"></Image>
            <Header.TopDropdownMenu
              text="An official website of the European Union | How do you know?"
              tabletText="An official website of the European Union"
              mobileText=" "
              icon="chevron down"
              aria-label="dropdown"
              className=""
              classNameHeader="mobile-sr-only"
              viewportWidth={viewportWidth}
            >
              <div
                className="content"
                role="menu"
                tabIndex="0"
                onClick={handleDropdownClick}
                onKeyDown={handleDropdownClick}
              >
                <p>
                  All official European Union website addresses are in the{' '}
                  europa.eu domain.
                </p>
                <a
                  href="https://europa.eu/european-union/contact/institutions-bodies_en"
                  target="_blank"
                  role="option"
                  aria-selected="false"
                >
                  See all EU institutions and bodies
                </a>
              </div>
            </Header.TopDropdownMenu>
          </Header.TopItem>

          <Header.TopItem>
            <Header.TopDropdownMenu
              id="theme-sites"
              text={linksMenuTitle}
              tabletText={tabletLinksMenuTitle}
              mobileText={mobileLinksMenuTitle}
              viewportWidth={viewportWidth}
            >
              <div className="wrapper" tabIndex={0} role={'presentation'}>
                {links.map((item, index) => (
                  <Dropdown.Item key={index}>
                    <a href={item.href} className="site" target="_blank">
                      {item.title}
                    </a>
                  </Dropdown.Item>
                ))}
              </div>
            </Header.TopDropdownMenu>
          </Header.TopItem>

          {hasLanguageDropdown && (
            <Header.TopDropdownMenu
              id="language-switcher"
              className="item"
              ariaLabel={'language switcher'}
              text={`${language.toUpperCase()}`}
              mobileText={`${language.toUpperCase()}`}
              icon={
                <Image
                  role="option"
                  src={globeIcon}
                  alt="language dropdown globe icon"
                ></Image>
              }
              viewportWidth={viewportWidth}
            >
              <ul
                className="wrapper language-list"
                role="listbox"
                aria-label="language switcher"
              >
                {languages.map((item, index) => (
                  <Dropdown.Item
                    as="li"
                    key={index}
                    text={
                      <a
                        href={'/' + item.code}
                        onClick={() => setLanguage(item.code)}
                        tabIndex={0}
                        className={'language-link'}
                      >
                        {item.name}
                        <span className="country-code">
                          {item.code.toUpperCase()}
                        </span>
                      </a>
                    }
                  ></Dropdown.Item>
                ))}
              </ul>
            </Header.TopDropdownMenu>
          )}
        </Header.TopHeader>
        <Header.Main
          transparency={args.transparency}
          inverted={args.inverted}
          pathname={pathname}
          logo={<Logo {...logoProps} inverted={args.inverted} />}
          menuItems={menuItems}
          menuItemsLayouts={menuItemsLayouts}
          headerSearchBox={headerSearchBox}
          renderMenuItem={(item, options = {}, props) => {
            const { onClick } = options;
            return (
              <>
                <a
                  onClick={(e) => {
                    const path = item['@id'] || item.url;
                    setPathname(path);
                    e.preventDefault();
                    onClick && onClick(e, item);
                  }}
                  href={item['@id'] || item.url}
                  {...options}
                  className={cx(options?.className, {
                    active: item['@id'] === pathname,
                  })}
                >
                  {/* nav_title overrides title */}
                  {item.nav_title && item.nav_title !== '' ? (
                    <span>{item.nav_title}</span>
                  ) : (
                    <span>{item.title}</span>
                  )}
                  {/* Contains a string and an icon for the buttons */}
                  {props?.children}
                </a>
                {/* Item description */}
                {item.nav_description && (
                  <p className="nav-description">{item.nav_description}</p>
                )}
              </>
            );
          }}
          renderGlobalMenuItem={(item, options = {}) => {
            const { onClick } = options;
            return (
              <a
                onClick={(e) => {
                  // const path = item['@id'] || item.url;
                  // setPathname(path);
                  e.preventDefault();
                  onClick && onClick(e, item);
                }}
                href={item['@id'] || item.url}
              >
                {item.title}
              </a>
            );
          }}
        ></Header.Main>
      </Header>

      <Segment>Current location: {pathname}</Segment>
      <Container>
        <h1>Page title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link
          mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
          semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
          porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
          dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
          ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
          ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link
          mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
          semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
          porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
          dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
          ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
          ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link
          mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
          semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
          porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
          dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
          ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
          ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link
          mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
          semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
          porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
          dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
          ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
          ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link
          mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
          semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
          porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
          dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
          ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
          ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link
          mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
          semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
          porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
          dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
          ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
          ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link
          mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
          semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
          porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
          dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
          ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
          ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link
          mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
          semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
          porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
          dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
          ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
          ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link
          mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
          semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
          porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
          dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
          ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
          ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        </p>
      </Container>
    </>
  );
};

const headerArgs = {
  linksMenuTitle: 'Environmental information systems',
  tabletLinksMenuTitle: 'EEA information systems',
  mobileLinksMenuTitle: 'EEA information systems',
  hasLanguageDropdown: true,
  links,
  languages,
  menuItems,
  transparency: false,
  inverted: false,
};

export const Default = Template.bind({});
Default.args = headerArgs;
