import React from 'react';
import { Container } from 'semantic-ui-react';

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
  },
];

function Template({ ...args }) {
  return (
    <Container>
      <nav className="context-navigation">
        <div className="context-navigation-header" id="Navigation">
          {args?.header ? <a href="/#">{args?.header}</a> : 'Navigation'}
        </div>
        <div role="list" className="ui list" aria-labelledby="Navigation">
          {args.sidenavItems &&
            args.sidenavItems.map((element, index) => {
              return (
                <div
                  key={index}
                  role="listitem"
                  className={
                    (element.is_current ? 'active ' : '') +
                    (element.is_in_path ? 'in_path ' : '') +
                    'item level-1'
                  }
                >
                  <div className="content">
                    <a
                      id={element['@id']}
                      title={element.title}
                      className={
                        element?.items?.length > 0
                          ? 'contenttype-folder'
                          : 'contenttype-document'
                      }
                      href={element.url}
                    >
                      {element.title}
                    </a>
                    {element?.items?.length > 0
                      ? element.items.map((subelement, index) => {
                          return (
                            <div
                              className="list"
                              role="list"
                              key={index}
                              aria-labelledby={element['@id']}
                            >
                              <div
                                role="listitem"
                                className={
                                  (subelement.is_current ? 'active ' : '') +
                                  (subelement.is_in_path ? 'in_path ' : '') +
                                  'item level-2'
                                }
                              >
                                <div className="content">
                                  <a
                                    id={subelement['@id']}
                                    title={subelement.title}
                                    className="contenttype-document"
                                    href={subelement.url}
                                  >
                                    {subelement.title}
                                  </a>
                                  {subelement?.items?.length > 0 &&
                                    subelement.items.map(
                                      (subparelement, index) => {
                                        return (
                                          <div
                                            className="list"
                                            role="list"
                                            key={index}
                                            aria-labelledby={subelement['@id']}
                                          >
                                            <div
                                              role="listitem"
                                              className={
                                                (subparelement.is_current
                                                  ? 'active '
                                                  : '') + 'item level-3'
                                              }
                                            >
                                              <div className="content">
                                                <a
                                                  id={subparelement['@id']}
                                                  title={subparelement.title}
                                                  className="contenttype-document"
                                                  href={subparelement.url}
                                                >
                                                  {subparelement.title}
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        );
                                      },
                                    )}
                                </div>
                              </div>
                            </div>
                          );
                        })
                      : null}
                  </div>
                </div>
              );
            })}
        </div>
      </nav>
    </Container>
  );
}

export default {
  title: 'Components/Navigation portlet',
  component: Template,
};

export const Default = Template.bind({});
Default.args = {
  header: '',
  sidenavItems: sidenavItems,
};
