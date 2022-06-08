import React from 'react';
import Header from './Header';
import { Dropdown, Image, Segment, Container } from 'semantic-ui-react';
import { Logo } from '@eeacms/volto-eea-design-system/ui';

import LogoImage from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/eea-logo.svg';
import InvertedLogoImage from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/EEA-Logo-White-2.svg';
import globeIcon from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/global-line.svg';
import eeaFlag from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/eea.png';

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
  { title: 'Biodiversity Information System for Europe', href: '/#' },
  { title: 'Climate Adaptation Platform', href: '/#' },
  { title: 'Copernicus in situ component', href: '/#' },
  { title: 'European Industrial Emissions Portal', href: '/#' },
  { title: 'Forest Information System for Europe', href: '/#' },
  { title: 'Information Platform for Chemical Monitoring', href: '/#' },
  { title: 'Marine Water Information System for Europe', href: '/#' },
  { title: 'Fresh Water Information System for Europe', href: '/#' },
];

const languages = [
  { name: 'Albanian', code: 'sq' },
  { name: 'Български', code: 'bg' },
  { name: 'Bosnian', code: 'bs' },
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
  { name: 'Macedonian', code: 'mk' },
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
            href: '/#',
          },
          {
            '@id': 'Health',
            description: '',
            items: [],
            review_state: null,
            title: 'Health',
            href: '/#',
          },
          {
            '@id': 'Nature',
            description: '',
            items: [],
            review_state: null,
            title: 'Nature',
            href: '/#',
          },
          {
            '@id': 'Sustainability',
            description: '',
            items: [],
            review_state: null,
            title: 'Sustainability',
            href: '/#',
          },
          {
            '@id': 'Economy-and-resources',
            description: '',
            items: [],
            review_state: null,
            title: 'Economy and resources',
            href: '/#',
          },
          {
            '@id': 'State-of-Europe’s-environment',
            description: '',
            items: [],
            review_state: null,
            title: 'State of Europe’s environment',
            href: '/#',
          },
        ],
        review_state: null,
        title: 'At a glance',
        href: '/#',
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
            href: '/#',
          },
          {
            '@id': 'Air-quality',
            description: '',
            items: [],
            review_state: null,
            title: 'Air quality',
            href: '/#',
          },
          {
            '@id': 'Bathing-water',
            description: '',
            items: [],
            review_state: null,
            title: 'Bathing water',
            href: '/#',
          },
          {
            '@id': 'Biodiversity-habitats-and-species',
            description: '',
            items: [],
            review_state: null,
            title: 'Biodiversity , habitats and species',
            href: '/#',
          },
          {
            '@id': 'Bioeconomy',
            description: '',
            items: [],
            review_state: null,
            title: 'Bioeconomy',
            href: '/#',
          },
          {
            '@id': 'Buildings and construction',
            description: '',
            items: [],
            review_state: null,
            title: 'Buildings and construction',
            href: '/#',
          },
          {
            '@id': 'CC-Adaptation',
            description: '',
            items: [],
            review_state: null,
            title: 'CC Adaptation',
            href: '/#',
          },
          {
            '@id': 'CC-impacts-and-risks',
            description: '',
            items: [],
            review_state: null,
            title: 'CC impacts and risks',
            href: '/#',
          },
          {
            '@id': 'CC-mitigation',
            description: '',
            items: [],
            review_state: null,
            title: 'CC mitigation',
            href: '/#',
          },
          {
            '@id': 'Chemicals',
            description: '',
            items: [],
            review_state: null,
            title: 'Chemicals',
            href: '/#',
          },
          {
            '@id': 'Circular-economy',
            description: '',
            items: [],
            review_state: null,
            title: 'Circular economy',
            href: '/#',
          },
          {
            '@id': 'Electric-vehicles',
            description: '',
            items: [],
            review_state: null,
            title: 'Electric vehicles',
            href: '/#',
          },
          {
            '@id': 'Energy',
            description: '',
            items: [],
            review_state: null,
            title: 'Energy',
            href: '/#',
          },
          {
            '@id': 'Energy-efficiency',
            description: '',
            items: [],
            review_state: null,
            title: 'Energy efficiency',
            href: '/#',
          },
          {
            '@id': 'Environmental-health-impacts',
            description: '',
            items: [],
            review_state: null,
            title: 'Environmental health impacts',
            href: '/#',
          },
          {
            '@id': 'Enivornmental-inequalities',
            description: '',
            items: [],
            review_state: null,
            title: 'Enivornmental inequalities',
            href: '/#',
          },
          {
            '@id': 'Environmental-noise',
            description: '',
            items: [],
            review_state: null,
            title: 'Environmental noise',
            href: '/#',
          },
          {
            '@id': 'Extreme-weather-floods-droughts-heatwaves',
            description: '',
            items: [],
            review_state: null,
            title: 'Extreme weather: floods, droughts, heatwaves',
            href: '/#',
          },
          {
            '@id': 'Forests-and-forestry',
            description: '',
            items: [],
            review_state: null,
            title: 'Forests and forestry',
            href: '/#',
          },
          {
            '@id': 'Industry',
            description: '',
            items: [],
            review_state: null,
            title: 'Industry',
            href: '/#',
          },
          {
            '@id': 'Land-use',
            description: '',
            items: [],
            review_state: null,
            title: 'Land use',
            href: '/#',
          },
          {
            '@id': 'Marine-and-coastal-zones',
            description: '',
            items: [],
            review_state: null,
            title: 'Marine and coastal zones',
            href: '/#',
          },
          {
            '@id': 'Plastics',
            description: '',
            items: [],
            review_state: null,
            title: 'Plastics',
            href: '/#',
          },
          {
            '@id': 'Pollution',
            description: '',
            items: [],
            review_state: null,
            title: 'Pollution',
            href: '/#',
          },
          {
            '@id': 'Production-and-consumption ',
            description: '',
            items: [],
            review_state: null,
            title: 'Production and consumption ',
            href: '/#',
          },
          {
            '@id': 'Protected-areas',
            description: '',
            items: [],
            review_state: null,
            title: 'Protected areas',
            href: '/#',
          },
          {
            '@id': 'Protecting-and-restoring-nature',
            description: '',
            items: [],
            review_state: null,
            title: 'Protecting and restoring nature',
            href: '/#',
          },
          {
            '@id': 'Renewable-energy',
            description: '',
            items: [],
            review_state: null,
            title: 'Renewable-energy',
            href: '/#',
          },
          {
            '@id': 'Resource-use-and-materials',
            description: '',
            items: [],
            review_state: null,
            title: 'Resource use and materials',
            href: '/#',
          },
          {
            '@id': 'Road-transport',
            description: '',
            items: [],
            review_state: null,
            title: 'Road transport',
            href: '/#',
          },
          {
            '@id': 'Soil',
            description: '',
            items: [],
            review_state: null,
            title: 'Soil',
            href: '/#',
          },
          {
            '@id': 'State-of-Europes-environment',
            description: '',
            items: [],
            review_state: null,
            title: 'State of Europe’s  environment',
            href: '/#',
          },
          {
            '@id': 'Sustainability-challenges',
            description: '',
            items: [],
            review_state: null,
            title: 'Sustainability challenges',
            href: '/#',
          },
          {
            '@id': 'Sustainability-solutions',
            description: '',
            items: [],
            review_state: null,
            title: 'Sustainability solutions',
            href: '/#',
          },
          {
            '@id': 'Sustainable-finance',
            description: '',
            items: [],
            review_state: null,
            title: 'Sustainable-finance',
            href: '/#',
          },
          {
            '@id': 'Textiles',
            description: '',
            items: [],
            review_state: null,
            title: 'Textiles',
            href: '/#',
          },
          {
            '@id': 'Urban-sustainability',
            description: '',
            items: [],
            review_state: null,
            title: 'Urban sustainability',
            href: '/#',
          },
          {
            '@id': 'Waste',
            description: '',
            items: [],
            review_state: null,
            title: 'Waste',
            href: '/#',
          },
          {
            '@id': 'Water',
            description: '',
            items: [],
            review_state: null,
            title: 'Water',
            href: '/#',
          },
        ],
        review_state: null,
        title: 'Closer look',
        href: '/#',
      },
    ],
    review_state: null,
    title: 'Topics',
    href: '/#',
  },
  {
    '@id': 'Data-and-publications',
    items: [],
    review_state: null,
    title: 'Data and publications',
    href: '/#',
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
            href: '/#',
          },
          {
            '@id': 'Belgium',
            description: '',
            items: [],
            review_state: null,
            title: 'Belgium',
            href: '/#',
          },
          {
            '@id': 'Bulgaria',
            description: '',
            items: [],
            review_state: null,
            title: 'Bulgaria',
            href: '/#',
          },
          {
            '@id': 'Croatia',
            description: '',
            items: [],
            review_state: null,
            title: 'Croatia',
            href: '/#',
          },
          {
            '@id': 'Cyprus',
            description: '',
            items: [],
            review_state: null,
            title: 'Cyprus',
            href: '/#',
          },
          {
            '@id': 'Czechia',
            description: '',
            items: [],
            review_state: null,
            title: 'Czechia',
            href: '/#',
          },
          {
            '@id': 'Denmark',
            description: '',
            items: [],
            review_state: null,
            title: 'Denmark',
            href: '/#',
          },
          {
            '@id': 'Estonia',
            description: '',
            items: [],
            review_state: null,
            title: 'Estonia',
            href: '/#',
          },
          {
            '@id': 'Finland',
            description: '',
            items: [],
            review_state: null,
            title: 'Finland',
            href: '/#',
          },
          {
            '@id': 'France',
            description: '',
            items: [],
            review_state: null,
            title: 'France',
            href: '/#',
          },
          {
            '@id': 'Germany',
            description: '',
            items: [],
            review_state: null,
            title: 'Germany',
            href: '/#',
          },
          {
            '@id': 'Greece',
            description: '',
            items: [],
            review_state: null,
            title: 'Greece',
            href: '/#',
          },
          {
            '@id': 'Hungary',
            description: '',
            items: [],
            review_state: null,
            title: 'Hungary',
            href: '/#',
          },
          {
            '@id': 'Iceland',
            description: '',
            items: [],
            review_state: null,
            title: 'Iceland',
            href: '/#',
          },
          {
            '@id': 'Ireland',
            description: '',
            items: [],
            review_state: null,
            title: 'Ireland',
            href: '/#',
          },
          {
            '@id': 'Italy',
            description: '',
            items: [],
            review_state: null,
            title: 'Italy',
            href: '/#',
          },
          {
            '@id': 'Latvia',
            description: '',
            items: [],
            review_state: null,
            title: 'Latvia',
            href: '/#',
          },
          {
            '@id': 'Liechtenstein',
            description: '',
            items: [],
            review_state: null,
            title: 'Liechtenstein',
            href: '/#',
          },
          {
            '@id': 'Lithuania',
            description: '',
            items: [],
            review_state: null,
            title: 'Lithuania',
            href: '/#',
          },
          {
            '@id': 'Luxembourg',
            description: '',
            items: [],
            review_state: null,
            title: 'Luxembourg',
            href: '/#',
          },
          {
            '@id': 'Malta',
            description: '',
            items: [],
            review_state: null,
            title: 'Malta',
            href: '/#',
          },
          {
            '@id': 'Netherlands',
            description: '',
            items: [],
            review_state: null,
            title: 'Netherlands',
            href: '/#',
          },
          {
            '@id': 'Norway',
            description: '',
            items: [],
            review_state: null,
            title: 'Norway',
            href: '/#',
          },
          {
            '@id': 'Poland',
            description: '',
            items: [],
            review_state: null,
            title: 'Poland',
            href: '/#',
          },
          {
            '@id': 'Portugal',
            description: '',
            items: [],
            review_state: null,
            title: 'Portugal',
            href: '/#',
          },
          {
            '@id': 'Romania',
            description: '',
            items: [],
            review_state: null,
            title: 'Romania',
            href: '/#',
          },
          {
            '@id': 'Slovakia',
            description: '',
            items: [],
            review_state: null,
            title: 'Slovakia',
            href: '/#',
          },
          {
            '@id': 'Slovenia',
            description: '',
            items: [],
            review_state: null,
            title: 'Slovenia',
            href: '/#',
          },
          {
            '@id': 'Spain',
            description: '',
            items: [],
            review_state: null,
            title: 'Spain',
            href: '/#',
          },
          {
            '@id': 'Sweden',
            description: '',
            items: [],
            review_state: null,
            title: 'Sweden',
            href: '/#',
          },
          {
            '@id': 'Switzerland',
            description: '',
            items: [],
            review_state: null,
            title: 'Switzerland',
            href: '/#',
          },
          {
            '@id': 'Turkey',
            description: '',
            items: [],
            review_state: null,
            title: 'Turkey',
            href: '/#',
          },
        ],
        review_state: null,
        title: 'EEA member countries',
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
            href: '/#',
          },
          {
            '@id': 'Bosnia-and-Herzegovina',
            description: '',
            items: [],
            review_state: null,
            title: 'Bosnia and Herzegovina',
            href: '/#',
          },
          {
            '@id': 'Kosovo**',
            description: '',
            items: [],
            review_state: null,
            title: 'Kosovo**',
            href: '/#',
          },
          {
            '@id': 'Montenegro',
            description: '',
            items: [],
            review_state: null,
            title: 'Montenegro',
            href: '/#',
          },
          {
            '@id': 'North-Macedonia',
            description: '',
            items: [],
            review_state: null,
            title: 'North Macedonia',
            href: '/#',
          },
          {
            '@id': 'Serbia',
            description: '',
            items: [],
            review_state: null,
            title: 'Serbia',
            href: '/#',
          },
        ],
        review_state: null,
        title: 'Cooperating countries',
        href: '/#',
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
            href: '/#',
          },
        ],
        review_state: null,
        title: 'Former member country',
        href: '/#',
      },
    ],
    review_state: null,
    title: 'Countries',
    href: '/#',
  },
  {
    '@id': 'Newsroom',
    items: [],
    review_state: null,
    title: 'Newsroom',
    href: '/#',
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
            href: '/#',
          },
          {
            '@id': 'Eco-management-Reducing-our-environmental-footprint-EMAS',
            description: '',
            items: [],
            review_state: null,
            title: 'Eco-management/Reducing our environmental footprint (EMAS)',
            href: '/#',
          },
          {
            '@id': 'Copernicus',
            description: '',
            items: [],
            review_state: null,
            title: 'Copernicus',
            href: '/#',
          },
          {
            '@id': 'Digitilization',
            description: '',
            items: [],
            review_state: null,
            title: 'Digitilization',
            href: '/#',
          },
        ],
        review_state: null,
        title: 'Mission, vision and values',
        href: '/#',
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
            href: '/#',
          },
          {
            '@id': 'Management-board-&-bureau',
            description: '',
            items: [],
            review_state: null,
            title: 'Management board & bureau',
            href: '/#',
          },
          {
            '@id': 'Operational-management-Senior-Management-Team)',
            description: '',
            items: [],
            review_state: null,
            title: 'Operational management (Senior Management Team)',
            href: '/#',
          },
          {
            '@id': 'Scientific-commitee',
            description: '',
            items: [],
            review_state: null,
            title: 'Scientific commitee',
            href: '/#',
          },
          {
            '@id': 'Organizational-chart',
            description: '',
            items: [],
            review_state: null,
            title: 'Organizational chart',
            href: '/#',
          },
        ],
        review_state: null,
        title: 'Governance',
        href: '/#',
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
            href: '/#',
          },
          {
            '@id': 'Members',
            description: '',
            items: [],
            review_state: null,
            title: 'Members',
            href: '/#',
          },
          {
            '@id': 'ETCs',
            description: '',
            items: [],
            review_state: null,
            title: 'ETCs',
            href: '/#',
          },
          {
            '@id': 'Interest-groups',
            description: '',
            items: [],
            review_state: null,
            title: 'Interest groups',
            href: '/#',
          },
          {
            '@id': 'Data-reporting',
            description: '',
            items: [],
            review_state: null,
            title: 'Data-reporting',
            href: '/#',
          },
          {
            '@id': 'Eionet-projects',
            description: '',
            items: [],
            review_state: null,
            title: 'Eionet projects',
            href: '/#',
          },
        ],
        review_state: null,
        title: 'Our knowledge network (Eionet)',
        href: '/#',
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
            href: '/#',
          },
          {
            '@id': 'Human-Biomonitoring-for-Europe',
            description: '',
            items: [],
            review_state: null,
            title: 'Human Biomonitoring for Europe',
            href: '/#',
          },
          {
            '@id': 'COPERNICUS',
            description: '',
            items: [],
            review_state: null,
            title: 'COPERNICUS',
            href: '/#',
          },
          {
            '@id': 'IPA-2020',
            description: '',
            items: [],
            review_state: null,
            title: 'IPA 2020',
            href: '/#',
          },
          {
            '@id': 'UNEP-IRP',
            description: '',
            items: [],
            review_state: null,
            title: 'UNEP IRP',
            href: '/#',
          },
        ],
        review_state: null,
        title: 'Services and projects',
        href: '/#',
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
            href: '/#',
          },
          {
            '@id': 'Negotiation-procedures-Tenders',
            description: '',
            items: [],
            review_state: null,
            title: 'Negotiation procedures - Tenders 15K - 140K €',
            href: '/#',
          },
          {
            '@id': 'Toolbox',
            description: '',
            items: [],
            review_state: null,
            title: 'Toolbox',
            href: '/#',
          },
          {
            '@id': 'Contracts-and-grants-awarded',
            description: '',
            items: [],
            review_state: null,
            title: 'Contracts and grants awarded',
            href: '/#',
          },
        ],
        review_state: null,
        title: 'Contract opportunities',
        href: '/#',
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
            href: '/#',
          },
          {
            '@id': 'Vacancies',
            description: '',
            items: [],
            review_state: null,
            title: 'Vacancies',
            href: '/#',
          },
          {
            '@id': 'Bluebook-traineeships',
            description: '',
            items: [],
            review_state: null,
            title: 'Bluebook traineeships',
            href: '/#',
          },
        ],
        review_state: null,
        title: 'Careers',
        href: '/#',
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
            href: '/#',
          },
          {
            '@id': 'EU-instititions-and-agencies',
            description: '',
            items: [],
            review_state: null,
            title: 'EU instititions and agencies',
            href: '/#',
          },
          {
            '@id': 'International-cooperation-Research-Institutions',
            description: '',
            items: [],
            review_state: null,
            title: 'International cooperation (Research Institutions)',
            href: '/#',
          },
        ],
        review_state: null,
        title: 'Partners and networks',
        href: '/#',
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
            href: '/#',
          },
          {
            '@id': 'Frequently-Asked-Questions',
            description: '',
            items: [],
            review_state: null,
            title: 'Frequently Asked Questions',
            href: '/#',
          },
        ],
        review_state: null,
        title: 'Contact us',
        href: '/#',
      },
    ],
    review_state: null,
    title: 'About Us',
    href: '/#',
  },
];

const debounce = (func) => {
  let timer;
  return (event) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, 50, event);
  };
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

  const { languages, links, linksMenuTitle, menuItems } = args;

  const [language, setLanguage] = React.useState('en');
  const [pathname, setPathname] = React.useState('/');

  return (
    <>
      <Header>
        <Header.TopHeader>
          <Header.TopItem className="official-union">
            <Image src={eeaFlag} alt="eea flag"></Image>
            <Header.TopDropdownMenu
              text="An official website of the European Union | How do you Know?"
              mobileText=" "
              icon="chevron down"
              aria-label="dropdown"
              className=""
              viewportWidth={viewportWidth}
            >
              <div className="content">
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
              className="tablet hidden"
              text={linksMenuTitle}
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
                    <span>
                      {item.name}
                      <span className="country-code">
                        {item.code.toUpperCase()}
                      </span>
                    </span>
                  }
                  onClick={() => setLanguage(item.code)}
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
          renderMenuItem={(item, options = {}) => {
            const { onClick } = options;
            return (
              <a
                onClick={(e) => {
                  const path = item['@id'] || item.url;
                  setPathname(path);
                  e.preventDefault();
                  onClick && onClick(e, item);
                }}
                href={item['@id'] || item.url}
              >
                <span className={'item'}>{item.title}</span>
              </a>
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
  linksMenuTitle: 'EEA information systems',
  links,
  languages,
  menuItems,
  transparency: false,
  inverted: false,
};
