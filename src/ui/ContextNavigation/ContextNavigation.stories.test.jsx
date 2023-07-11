import React from 'react';
import { render } from '@testing-library/react';
import { Default } from './ContextNavigation.stories';
import '@testing-library/jest-dom/extend-expect';

const sidenavItems = [
  {
    '@id': 'Gravida',
    items: [
      {
        '@id': 'Lorem-ipsum-0',
        description: '',
        items: [],
        review_state: null,
        title: 'Item 1',
        url: '/#',
        is_current: true,
      },
      {
        '@id': 'item-2',
        description: '',
        items: [],
        review_state: null,
        title: 'Item 2',
        url: '/#',
      },
      {
        '@id': 'item-3',
        description: '',
        items: [],
        review_state: null,
        title: 'Item 3',
        url: '/#',
      },
    ],
    review_state: null,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    url: '/#',
  },
  {
    '@id': 'Signals-2021',
    description: '',
    items: [],
    review_state: null,
    title: 'Signals 2021',
    url: '/#',
  },
  {
    '@id': 'Articles',
    description: '',
    items: [],
    review_state: null,
    title: 'Articles',
    url: '/#',
  },
  {
    '@id': 'Infographics',
    items: [
      {
        '@id': 'Lorem-ipsum-1',
        description: '',
        items: [],
        review_state: null,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        url: '/#',
      },
      {
        '@id': 'Signals-2021-infographics',
        description: '',
        items: [],
        review_state: null,
        title: 'Signals 2021',
        url: '/#',
      },
      {
        '@id': 'Articles',
        description: '',
        items: [
          {
            '@id': 'article-1',
            description: '',
            items: [],
            review_state: null,
            title: 'Summer 2022: Living in a state of multiple crises',
            url: '/#',
            is_current: true,
          },
          {
            '@id': 'article-2',
            description: '',
            items: [],
            review_state: null,
            title:
              'Interview — Prosumers and the energy crisis: citizens contributing to Europe’s energy transition',
            url: '/#',
          },
        ],
        review_state: null,
        title: 'Articles',
        url: '/#',
        is_in_path: true,
      },
      {
        '@id': 'Infographics-overview',
        description: '',
        items: [],
        review_state: null,
        title: 'Infographics',
        url: '/#',
      },
    ],
    review_state: null,
    title: 'Infographics',
    url: '/#',
    is_in_path: true,
  },
  {
    '@id': 'About',
    review_state: null,
    title: 'About',
    items: [],
    url: '/#',
    is_in_path: true,
    is_current: true,
  },
];

describe('Default component', () => {
  it('renders corectly', () => {
    const { container, getByText } = render(<Default {...Default.args} />);

    expect(getByText('Navigation')).toBeInTheDocument();
    expect(getByText('Navigation')).toHaveClass('context-navigation-header');

    Default.args.sidenavItems.forEach((item) => {
      expect(container.querySelector(`#${item['@id']}`).textContent).toMatch(
        item.title,
      );
      item.items.forEach((subitem) => {
        expect(
          container.querySelector(`#${subitem['@id']}`).textContent,
        ).toMatch(subitem.title);
      });
    });
  });

  it('renders corectly', () => {
    const { container, getByText, queryByText } = render(
      <Default
        {...Default.args}
        sidenavItems={sidenavItems}
        header={'Test Header'}
      />,
    );

    expect(queryByText('Navigation')).toBeNull();
    expect(getByText('Test Header')).toBeInTheDocument();

    Default.args.sidenavItems.forEach((item) => {
      expect(container.querySelector(`#${item['@id']}`).textContent).toMatch(
        item.title,
      );
      item.items.forEach((subitem) => {
        expect(
          container.querySelector(`#${subitem['@id']}`).textContent,
        ).toMatch(subitem.title);
      });
    });
  });
});
