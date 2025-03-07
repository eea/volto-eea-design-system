import React from 'react';
import {
  Container,
  Accordion as SemanticAccordion,
  Icon,
} from 'semantic-ui-react';
import cx from 'classnames';

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

const AccordionNavigation = ({ navigation, header }) => {
  const [isNavOpen, setIsNavOpen] = React.useState(true);
  const [activeItems, setActiveItems] = React.useState({});

  const onClickSummary = (e) => {
    e.preventDefault();
    setIsNavOpen((prev) => !prev);
  };

  const renderItems = ({ item, level = 0 }) => {
    const {
      title,
      href = item['@id'],
      is_current,
      is_in_path,
      items: childItems,
      type = 'Link',
    } = item;
    const hasChildItems = childItems && childItems.length > 0;

    const checkIfActive = () => {
      return activeItems[href] !== undefined ? activeItems[href] : is_in_path;
    };

    const isActive = checkIfActive();

    const handleTitleClick = () => {
      setActiveItems((prev) => ({ ...prev, [href]: !isActive }));
    };

    return (
      <li
        className={cx({
          is_in_path,
          'accordion-list-title': !hasChildItems,
          'accordion-list-item': hasChildItems,
        })}
        key={href}
      >
        {hasChildItems ? (
          <SemanticAccordion className="default">
            <SemanticAccordion.Title
              active={isActive}
              as={'button'}
              aria-expanded={isActive}
              onClick={handleTitleClick}
              aria-controls={`accordion-content-${title}`}
              id={`accordion-title-${title}`}
            >
              <span className="title-text">{title}</span>
              <Icon
                className={
                  isActive ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'
                }
              />
            </SemanticAccordion.Title>
            <SemanticAccordion.Content
              active={isActive}
              role="region"
              id={`accordion-content-${title}`}
              aria-labelledby={`accordion-title-${title}`}
            >
              <ul className="accordion-list">
                {childItems.map((child) =>
                  renderItems({ item: child, level: level + 1 }),
                )}
              </ul>
            </SemanticAccordion.Content>
          </SemanticAccordion>
        ) : (
          <a
            href={href}
            className={cx(`title-link contenttype-${type}`, {
              current: is_current,
              in_path: is_in_path,
            })}
          >
            {title}
          </a>
        )}
      </li>
    );
  };

  return navigation.length ? (
    <Container>
      <nav className="context-navigation" aria-label={header}>
        <details open={isNavOpen}>
          {/* eslint-disable-next-line */}
          <summary
            className="context-navigation-header accordion-header"
            onClick={onClickSummary}
          >
            {header}
            <Icon
              size="large"
              className={
                isNavOpen ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'
              }
            />
          </summary>

          <ul
            className="context-navigation-list accordion-list"
            style={{ width: '100%' }}
          >
            {navigation.map((item) => renderItems({ item }))}
          </ul>
        </details>
      </nav>
    </Container>
  ) : null;
};

export const Accordion = AccordionNavigation.bind({});

Accordion.args = {
  navigation: sidenavItems,
  header: 'Navigation',
};
