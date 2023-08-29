import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, fireEvent, act } from '@testing-library/react';
import { Default } from './Header.stories';
import '@testing-library/jest-dom/extend-expect';

global.ResizeObserver = require('resize-observer-polyfill');

const history = createMemoryHistory();

const links = [
  { title: 'EEA Main Portal', href: '/#portal' },
  { title: 'Biodiversity Information System for Europe', href: '/#bise' },
  { title: 'Forest Information System for Europe', href: '/#Fise' },
  { title: 'Marine Water Information System for Europe', href: '/#marine' },
  { title: 'Fresh Water Information System for Europe', href: '/#freshwater' },
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
    ],
    review_state: null,
    title: 'Topics',
    url: '/#',
  },
];

describe('Default component', () => {
  const args = {
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

  it('renders the default with correct number of cards', () => {
    const { container, getByText } = render(
      <Router history={history}>
        <Default {...args} />
      </Router>,
    );
    const dropdown = container.querySelector('.official-union .content');
    fireEvent.click(dropdown);
    act(() => {
      fireEvent(window, new Event('resize'));
    });
    expect(getByText('EEA Main Portal')).toBeInTheDocument();
    expect(
      getByText('Biodiversity Information System for Europe'),
    ).toBeInTheDocument();
    expect(
      getByText('Forest Information System for Europe'),
    ).toBeInTheDocument();
    expect(
      getByText('Marine Water Information System for Europe'),
    ).toBeInTheDocument();
    expect(
      getByText('Fresh Water Information System for Europe'),
    ).toBeInTheDocument();

    fireEvent.click(container.querySelector('a[href="/#bise"]'));
    fireEvent.click(container.querySelector('.language-link'));
  });
});
