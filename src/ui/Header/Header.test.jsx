import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Header from './Header';
import '@testing-library/jest-dom/extend-expect';

describe('Header component', () => {
  let history;

  beforeEach(() => {
    history = createMemoryHistory();
  });

  it('renders without crashing', () => {
    render(<Header />);
  });

  it('renders children correctly', () => {
    render(<Header>Test Children</Header>);
    expect(screen.getByText('Test Children')).toBeInTheDocument();
  });

  it('renders without crashing', () => {
    render(
      <Header>
        <Header.TopHeader>
          <Header.TopItem>
            <p>Test</p>
          </Header.TopItem>
          <Header.TopItem>
            <Header.TopDropdownMenu viewportWidth={1000}>
              <div aria-label="language switcher">Language Switcher</div>
            </Header.TopDropdownMenu>
          </Header.TopItem>
        </Header.TopHeader>
        <Header.Main
          menuItems={[{ '@id': '/home', title: 'Home', items: [] }]}
          pathname={'/home'}
          renderGlobalMenuItem={(item, { onClick }) =>
            item.title !== 'Home' && (
              <a
                href={item.url}
                title={item.title}
                onClick={(e) => {
                  e.preventDefault();
                  onClick(e, item);
                }}
              >
                {item.title}
              </a>
            )
          }
          renderMenuItem={(item, options, props) => {
            return (
              <a
                href={item.url || '/'}
                title={item.nav_title || item.title}
                {...(options || {})}
              >
                {props?.iconPosition !== 'right' && props?.children}
                <span>{item.nav_title || item.title}</span>
                {props?.iconPosition === 'right' && props?.children}
              </a>
            );
          }}
        />
      </Header>,
    );
  });

  it('renders without crashing', () => {
    render(
      <Header>
        <Header.TopHeader>
          <Header.TopItem>
            <Header.TopDropdownMenu viewportWidth={900}>
              <div aria-label="test">No Language Switcher</div>
            </Header.TopDropdownMenu>
          </Header.TopItem>
        </Header.TopHeader>
        <Header.Main
          menuItems={[{ '@id': '/home', title: 'Home', items: [] }]}
          pathname={'/home'}
          isMultilingual={true}
          renderGlobalMenuItem={(item, { onClick }) =>
            item.title !== 'Home' && (
              <a
                href={item.url}
                title={item.title}
                onClick={(e) => {
                  e.preventDefault();
                  onClick(e, item);
                }}
              >
                {item.title}
              </a>
            )
          }
          renderMenuItem={(item, options, props) => {
            return (
              <a
                href={item.url || '/'}
                title={item.nav_title || item.title}
                {...(options || {})}
              >
                {props?.iconPosition !== 'right' && props?.children}
                <span>{item.nav_title || item.title}</span>
                {props?.iconPosition === 'right' && props?.children}
              </a>
            );
          }}
        />
      </Header>,
    );
  });

  it('renders without crashing', () => {
    const { getByText, getAllByText, container } = render(
      <Router history={history}>
        <Header>
          <Header.TopHeader>
            <Header.TopItem>
              <Header.TopDropdownMenu viewportWidth={760}>
                <div aria-label="test">No Language Switcher</div>
              </Header.TopDropdownMenu>
            </Header.TopItem>
          </Header.TopHeader>
          <Header.Main
            transparency={true}
            inverted={true}
            menuItems={[
              {
                '@id': '/countries',
                url: '/countries',
                title: 'Countries',
                items: [
                  {
                    title: 'At a glance',
                    url: '/countries/at-a-glance/in-depth',
                    items: [
                      {
                        title: 'test',
                        url: '/countries/at-a-glance/test',
                        items: [
                          {
                            title: 'test',
                            url: '/countries/at-a-glance/test',
                            items: [],
                          },
                          {
                            title: 'test',
                            url: '/countries/at-a-glance/test',
                            items: [],
                          },
                        ],
                      },
                      {
                        title: 'test2',
                        url: '/countries/at-a-glance/test2',
                        items: [
                          {
                            title: 'test',
                            url: '/countries/at-a-glance/test',
                            items: [],
                          },
                          {
                            title: 'test',
                            url: '/countries/at-a-glance/test',
                            items: [],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    title: 'anything else',
                    url: '/countries/anything-else/in-depth',
                    items: [],
                  },
                ],
              },
              {
                '@id': '/topics',
                url: '/topics',
                title: 'Topics',
                items: [
                  {
                    title: 'At a glance',
                    url: '/topics/at-a-glance/in-depth',
                    items: [
                      {
                        title: 'test',
                        url: '/topics/at-a-glance/test',
                        items: [],
                      },
                    ],
                  },
                  {
                    title: 'Anything else',
                    url: '/topics/anything-else/in-depth',
                    items: [
                      {
                        title: 'test',
                        url: '/topics/anything-else/test',
                        items: [],
                      },
                    ],
                  },
                ],
              },
              {
                '@id': '/test',
                url: '/test',
                title: 'Test Click',
                items: [
                  {
                    title: 'test',
                    items: [
                      {
                        title: 'test',
                        url: '/test/at-a-glance/test',
                        items: [],
                      },
                    ],
                  },
                ],
              },
              {
                '@id': undefined,
                url: '/test2',
                title: 'Test Click 2',
                items: [],
              },
              {
                '@id': undefined,
                url: 'http://test.com',
                title: 'Test Click 3',
                items: [],
              },
            ]}
            pathname={'/test'}
            renderGlobalMenuItem={(item, { onClick }) =>
              item.title !== 'Home' && (
                <a
                  href={item.url}
                  title={item.title}
                  onClick={(e) => {
                    e.preventDefault();
                    onClick(e, item);
                  }}
                >
                  {item.title}
                </a>
              )
            }
            renderMenuItem={(item, options, props) => {
              return (
                <a
                  href={item.url || '/'}
                  title={item.nav_title || item.title}
                  {...(options || {})}
                >
                  {props?.iconPosition !== 'right' && props?.children}
                  <span>{item.nav_title || item.title}</span>
                  {props?.iconPosition === 'right' && props?.children}
                </a>
              );
            }}
          />
        </Header>
      </Router>,
    );
    const menuItemsWithInternalUrl = getAllByText('Test Click 2');
    const menuItemsWithExternalUrl = getAllByText('Test Click 3');
    const menuItemsWithCountries = getAllByText('Countries');
    const menuItemsWithTopics = getAllByText('Topics');

    fireEvent.click(getByText('Test Click'));
    fireEvent.click(menuItemsWithInternalUrl[0]);
    fireEvent.click(container.querySelector('.search-action'));
    fireEvent.click(menuItemsWithExternalUrl[0]);
    fireEvent.click(menuItemsWithCountries[0]);
    fireEvent.click(menuItemsWithTopics[0]);
    fireEvent.keyDown(getByText('No Language Switcher'), {
      key: 'Enter',
      code: 'Enter',
    });
  });

  test('TopDropdownMenu renders without crashing', () => {
    render(<Header.TopDropdownMenu text="Desktop" />);
    const dropdownMenu = screen.getByText('Desktop');
    expect(dropdownMenu).toBeInTheDocument();
  });

  test('TopDropdownMenu renders the correct text based on viewportWidth', () => {
    render(
      <Header.TopDropdownMenu
        text="Desktop"
        mobileText="Mobile"
        viewportWidth={500}
      />,
    );
    expect(screen.getByText('Mobile')).toBeInTheDocument();

    render(
      <Header.TopDropdownMenu
        text="Desktop"
        mobileText="Mobile"
        viewportWidth={1200}
      />,
    );
    expect(screen.getByText('Desktop')).toBeInTheDocument();
  });

  test('TopDropdownMenu opens dropdown menu when clicked, closed on escape', () => {
    render(<Header.TopDropdownMenu text={'Desktop'} />);
    const dropdownMenu = screen.getByText('Desktop');
    fireEvent.click(dropdownMenu);
    const dropdownItems = screen.getByRole('option');
    expect(dropdownItems).toBeVisible();

    fireEvent.keyDown(screen.getByText('Desktop'), {
      key: 'Escape',
      code: 'Escape',
    });
  });
  test('renders dropdown text and checks for visibility of options on click', () => {
    // Render the component
    render(
      <div className="wrapper">
        <Header.TopDropdownMenu
          text="Dropdown"
          tabletText="Tablet Dropdown"
          mobileText="Mobile Dropdown"
        >
          <a href="/" data-testid="option1">
            Option 1
          </a>
        </Header.TopDropdownMenu>
        <a href="/" data-testid="option2">
          Option 2
        </a>
      </div>,
    );

    const dropdown = screen.getByRole('listbox');

    // Find the dropdown text and options
    const dropdownText = screen.getByText('Dropdown');

    // Initially, options should not be visible
    expect(dropdown).toHaveAttribute('aria-expanded', 'false');

    // Simulate click on the dropdown text
    fireEvent.click(dropdownText);

    // After clicking, options should be visible
    expect(dropdown).toHaveAttribute('aria-expanded', 'true');

    // Simulate Escape key press to trigger onBlur
    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });

    // After Escape key press, options should not be visible
    expect(dropdown).toHaveAttribute('aria-expanded', 'false');

    // Simulate click on the dropdown text
    // fireEvent.click(dropdownText);

    // Click on document to trigger onBlur
    // fireEvent.click(document);

    // Hit Enter key on the dropdown text
    // fireEvent.keyDown(dropdownText, { key: 'Enter', code: 'Enter' });

    // Tab outside of the dropdown
    fireEvent.keyDown(dropdownText, { key: 'Tab', code: 'Tab' });
    fireEvent.keyDown(dropdownText, { key: 'Enter', code: 'Enter' });

    expect(dropdown).toHaveAttribute('aria-expanded', 'true');

    // Simulate Escape key press to trigger onBlur
    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });

    // Call onBlur on the dropdown text
    fireEvent.blur(dropdownText);
  });
});
