import React from 'react';
import { Container, Icon } from 'semantic-ui-react';

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
        items: [],
        review_state: null,
        title: 'Articles',
        url: '/#',
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
  },
];

function Template({ ...args }) {
  return (
    <Container>
      <nav className="context-navigation">
        <div className="context-navigation-header">
          <Icon className="ri-menu-2-line" /> {args.header}
        </div>
        <div role="list" className="ui list">
          {args.sidenavItems &&
            args.sidenavItems.map((element, index) => {
              return (
                <div role="listitem" className="item level-1">
                  <div className="content">
                    <a
                      title={element.title}
                      className="contenttype-folder"
                      href={element.url}
                    >
                      {element.title}
                    </a>
                    {element.items.length > 0 &&
                      element.items.map((subelement, index) => {
                        return (
                          <div className="list" role="list">
                            <div role="listitem" className="item level-2">
                              <div className="content">
                                <a
                                  title={subelement.title}
                                  className="contenttype-document"
                                  href={subelement.url}
                                >
                                  {subelement.title}
                                </a>
                              </div>
                            </div>
                          </div>
                        );
                      })}
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
  header: 'Navigation',
  sidenavItems: sidenavItems,
};
