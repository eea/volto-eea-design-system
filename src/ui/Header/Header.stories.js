import React from 'react';
import Header from './Header';
//import { Segment } from 'semantic-ui-react';
import Wrapper from '@plone/volto/storybook';

export default {
  title: 'Layout/Header',
  cocmponent: Header,
  argTypes: {
    linksDropdown: {
      description: 'links dropdown content',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '' },
      },
    },
    languages: {
      description: 'language list',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '' },
      },
    },
    menuItems: {
      description: 'items for the header menu',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '' },
      },
    },
  },
  decorators: [
    (Story) => (
      <Wrapper location={{ pathname: '/folder2/folder21/doc212' }}>
        <>
          <Story />
        </>
      </Wrapper>
    ),
  ],
};

// export const Default = injectIntl(({ children, ...args }) => {
//     return (
//       <Wrapper location={{ pathname: '/folder2/folder21/doc212' }}>
//         <Segment className="portal-footer">
//           <Header />
//         </Segment>
//       </Wrapper>
//     );
//   });

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

const languagesList = [
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
    '@id': 'item1',
    items: [
      {
        '@id': 'section1',
        description: '',
        items: [],
        review_state: null,
        title: 'Section 1',
      },
      {
        '@id': 'section2',
        description: '',
        items: [
          {
            '@id': 'page1',
            description: '',
            items: [],
            review_state: null,
            title: 'Page 1',
          },
        ],
        review_state: null,
        title: 'Section 2',
      },
      {
        '@id': 'section3',
        description: '',
        items: [],
        review_state: null,
        title: 'Section 3',
      },
    ],
    review_state: null,
    title: 'Item 1',
  },
  {
    '@id': 'item2',
    items: [
      {
        '@id': 'section1',
        description: '',
        items: [],
        review_state: null,
        title: 'Section 1',
      },
      {
        '@id': 'section2',
        description: '',
        items: [
          {
            '@id': 'page1',
            description: '',
            items: [],
            review_state: null,
            title: 'Page 1',
          },
          {
            '@id': 'page2',
            description: '',
            items: [],
            review_state: null,
            title: 'Page 2',
          },
        ],
        review_state: null,
        title: 'Section 2',
      },
      {
        '@id': 'section3',
        description: '',
        items: [],
        review_state: null,
        title: 'Section 3',
      },
    ],
    review_state: null,
    title: 'Item 2',
  },
  {
    '@id': 'Topics',
    items: [
      {
        '@id': 'Air-and-climate',
        description: '',
        items: [
          {
            '@id': 'Air-pollution-sources',
            description: '',
            items: [],
            review_state: null,
            title: 'Air pollution sources',
          },
          {
            '@id': 'Air-quality-and-COVID-19',
            description: '',
            items: [],
            review_state: null,
            title: 'Air quality and COVID-19',
          },
        ],
        review_state: null,
        title: 'Air and climate',
      },
      {
        '@id': 'Nature',
        description: '',
        items: [
          {
            '@id': 'An-introduction-to-habitats',
            description: '',
            items: [],
            review_state: null,
            title: 'An introduction to habitats',
          },
          {
            '@id': 'EUNIS',
            description: '',
            items: [],
            review_state: null,
            title:
              'Find species, habitat types and protected sites across Europe (EUNIS)',
          },
        ],
        review_state: null,
        title: 'Nature',
      },
      {
        '@id': 'Sustainability-and-well-being',
        description: '',
        items: [],
        review_state: null,
        title: 'Sustainability and well-being',
      },
      {
        '@id': 'Economic-sectors',
        description: '',
        items: [],
        review_state: null,
        title: 'Economic sectors',
      },
    ],
    review_state: null,
    title: 'Topics',
  },
  {
    '@id': 'item4',
    description: '',
    items: [],
    review_state: null,
    title: 'Item 4',
  },
  {
    '@id': 'item5',
    description: '',
    items: [],
    review_state: null,
    title: 'Item 5',
  },
];

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  linksDropdown: { title: 'Environmental information systems', links: links },
  languages: languagesList,
  menuItems: menuItems,
};
