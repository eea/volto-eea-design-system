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
  { title: 'EEA Main Portal', href: '/#' },
  { title: 'Biodiversity Information System for Europe', href: '/#' },
  { title: 'Climate Adaptation Platform', href: '/#' },
  { title: 'Copernicus in situ component', href: '/#' },
  { title: 'Copernicus land monitoring', href: '/#' },
  { title: 'European Industrial Emissions Portal', href: '/#' },
  { title: 'Forest Information System for Europe', href: '/#' },
  { title: 'Information Platform for Chemical Monitoring', href: '/#' },
  { title: 'Marine Water Information System for Europe', href: '/#' },
  { title: 'Fresh Water Information System for Europe', href: '/#' },
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

const menuItems = [
  {
    '@id': 'Topics',
    items: [
      {
        '@id': 'At-a-glance',
        description: '',
        items: [
          {
            '@id': 'Climate',
            description: '',
            items: [],
            review_state: null,
            title: 'Climate',
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
          {
            '@id': 'Economy-and-resources',
            description: '',
            items: [],
            review_state: null,
            title: 'Economy and resources',
            url: '/#',
          },
          {
            '@id': 'State-of-Europe’s-environment',
            description: '',
            items: [],
            review_state: null,
            title: 'State of Europe’s environment',
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
    url: '/#',
  },
  {
    '@id': 'Analysis-and-data',
    items: [
      {
        '@id': 'Reports',
        nav_description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        items: [],
        review_state: null,
        title: 'Briefings',
        nav_title: 'Briefings nav',
        url: '/#',
      },
      {
        '@id': 'Briefings',
        nav_description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        items: [],
        review_state: null,
        title: 'Reports',
        nav_title: 'Reports nav',
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
        '@id': 'Datahub',
        nav_description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        items: [],
        review_state: null,
        title: 'Datahub',
        nav_title: 'Datahub nav',
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
    url: '/#',
  },
  {
    '@id': 'Newsroom',
    items: [],
    review_state: null,
    title: 'Newsroom',
    url: '/#',
  },
  {
    '@id': 'About-Us',
    items: [
      {
        '@id': 'Mission-vision-and-values',
        description: '',
        items: [
          {
            '@id': 'About-the-EEA',
            description: '',
            items: [],
            review_state: null,
            title: 'About the EEA',
            url: '/#',
          },
          {
            '@id': 'Eco-management-Reducing-our-environmental-footprint-EMAS',
            description: '',
            items: [],
            review_state: null,
            title: 'Eco-management/Reducing our environmental footprint (EMAS)',
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
          {
            '@id': 'Digitilization',
            description: '',
            items: [],
            review_state: null,
            title: 'Digitilization',
            url: '/#',
          },
        ],
        review_state: null,
        title: 'Mission, vision and values',
        url: '/#',
      },
      {
        '@id': 'Governance',
        description: '',
        items: [
          {
            '@id': 'Executive-Director',
            description: '',
            items: [],
            review_state: null,
            title: 'Executive Director',
            url: '/#',
          },
          {
            '@id': 'Management-board-&-bureau',
            description: '',
            items: [],
            review_state: null,
            title: 'Management board & bureau',
            url: '/#',
          },
          {
            '@id': 'Operational-management-Senior-Management-Team)',
            description: '',
            items: [],
            review_state: null,
            title: 'Operational management (Senior Management Team)',
            url: '/#',
          },
          {
            '@id': 'Scientific-commitee',
            description: '',
            items: [],
            review_state: null,
            title: 'Scientific commitee',
            url: '/#',
          },
          {
            '@id': 'Organizational-chart',
            description: '',
            items: [],
            review_state: null,
            title: 'Organizational chart',
            url: '/#',
          },
        ],
        review_state: null,
        title: 'Governance',
        url: '/#',
      },
      {
        '@id': 'Our-knowledge-network-Eionet',
        description: '',
        items: [
          {
            '@id': 'About-the-Eionet',
            description: '',
            items: [],
            review_state: null,
            title: 'About the Eionet',
            url: '/#',
          },
          {
            '@id': 'Members',
            description: '',
            items: [],
            review_state: null,
            title: 'Members',
            url: '/#',
          },
          {
            '@id': 'ETCs',
            description: '',
            items: [],
            review_state: null,
            title: 'ETCs',
            url: '/#',
          },
          {
            '@id': 'Interest-groups',
            description: '',
            items: [],
            review_state: null,
            title: 'Interest groups',
            url: '/#',
          },
          {
            '@id': 'Data-reporting',
            description: '',
            items: [],
            review_state: null,
            title: 'Data-reporting',
            url: '/#',
          },
          {
            '@id': 'Eionet-projects',
            description: '',
            items: [],
            review_state: null,
            title: 'Eionet projects',
            url: '/#',
          },
        ],
        review_state: null,
        title: 'Our knowledge network (Eionet)',
        url: '/#',
      },
      {
        '@id': 'Services-and-projects',
        description: '',
        items: [
          {
            '@id': 'EUROGEO',
            description: '',
            items: [],
            review_state: null,
            title: 'EUROGEO',
            url: '/#',
          },
          {
            '@id': 'Human-Biomonitoring-for-Europe',
            description: '',
            items: [],
            review_state: null,
            title: 'Human Biomonitoring for Europe',
            url: '/#',
          },
          {
            '@id': 'COPERNICUS',
            description: '',
            items: [],
            review_state: null,
            title: 'COPERNICUS',
            url: '/#',
          },
          {
            '@id': 'IPA-2020',
            description: '',
            items: [],
            review_state: null,
            title: 'IPA 2020',
            url: '/#',
          },
          {
            '@id': 'UNEP-IRP',
            description: '',
            items: [],
            review_state: null,
            title: 'UNEP IRP',
            url: '/#',
          },
        ],
        review_state: null,
        title: 'Services and projects',
        url: '/#',
      },
      {
        '@id': 'Contract-opportunities',
        description: '',
        items: [
          {
            '@id': 'Open-calls-Tenders-above',
            description: '',
            items: [],
            review_state: null,
            title: 'Open calls - Tenders above 140Κ €',
            url: '/#',
          },
          {
            '@id': 'Negotiation-procedures-Tenders',
            description: '',
            items: [],
            review_state: null,
            title: 'Negotiation procedures - Tenders 15K - 140K €',
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
          {
            '@id': 'Contracts-and-grants-awarded',
            description: '',
            items: [],
            review_state: null,
            title: 'Contracts and grants awarded',
            url: '/#',
          },
        ],
        review_state: null,
        title: 'Contract opportunities',
        url: '/#',
      },
      {
        '@id': 'Careers',
        description: '',
        items: [
          {
            '@id': 'What-do-we-offer',
            description: '',
            items: [],
            review_state: null,
            title: 'What do we offer?',
            url: '/#',
          },
          {
            '@id': 'Vacancies',
            description: '',
            items: [],
            review_state: null,
            title: 'Vacancies',
            url: '/#',
          },
          {
            '@id': 'Bluebook-traineeships',
            description: '',
            items: [],
            review_state: null,
            title: 'Bluebook traineeships',
            url: '/#',
          },
        ],
        review_state: null,
        title: 'Careers',
        url: '/#',
      },
      {
        '@id': 'Partners-and-networks',
        description: '',
        items: [
          {
            '@id': 'Network-of-heads-of-Environmental-Protection-Agencies',
            description: '',
            items: [],
            review_state: null,
            title:
              'Network of heads of Environmental Protection Agencies (EPA network)',
            url: '/#',
          },
          {
            '@id': 'EU-instititions-and-agencies',
            description: '',
            items: [],
            review_state: null,
            title: 'EU instititions and agencies',
            url: '/#',
          },
          {
            '@id': 'International-cooperation-Research-Institutions',
            description: '',
            items: [],
            review_state: null,
            title: 'International cooperation (Research Institutions)',
            url: '/#',
          },
        ],
        review_state: null,
        title: 'Partners and networks',
        url: '/#',
      },
      {
        '@id': 'Contact-us',
        description: '',
        items: [
          {
            '@id': 'Contact-details-and-form',
            description: '',
            items: [],
            review_state: null,
            title: 'Contact details and form',
            url: '/#',
          },
          {
            '@id': 'Frequently-Asked-Questions',
            description: '',
            items: [],
            review_state: null,
            title: 'Frequently Asked Questions',
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
    url: '/#',
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
            <Image src={eeaFlag} alt="eea flag"></Image>
            <Header.TopDropdownMenu
              text="An official website of the European Union | How do you know?"
              tabletText="An official website of the European Union"
              mobileText=" "
              icon="chevron down"
              aria-label="dropdown"
              className=""
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
                  rel="noreferrer"
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
              <div className="wrapper">
                {links.map((item, index) => (
                  <Dropdown.Item key={index}>
                    <a
                      href={item.href}
                      className="site"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.title}
                    </a>
                  </Dropdown.Item>
                ))}
              </div>
            </Header.TopDropdownMenu>
          </Header.TopItem>

          <Header.TopDropdownMenu
            id="language-switcher"
            hasLanguageDropdown={hasLanguageDropdown}
            className="item"
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
        </Header.TopHeader>
        <Header.Main
          transparency={args.transparency}
          inverted={args.inverted}
          pathname={pathname}
          logo={<Logo {...logoProps} inverted={args.inverted} />}
          menuItems={menuItems}
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

export const Default = Template.bind({});
Default.args = {
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
