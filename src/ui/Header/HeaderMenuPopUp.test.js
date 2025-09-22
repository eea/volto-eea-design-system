import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

// Mock the useClickOutside hook
jest.mock('@eeacms/volto-eea-design-system/helpers', () => ({
  useClickOutside: jest.fn(),
}));

import HeaderMenuPopUp, { StandardMegaMenuGrid } from './HeaderMenuPopUp';

describe('HeaderMenuPopUp', () => {
  let history;
  const mockOnClose = jest.fn();
  const mockRenderMenuItem = jest.fn((item, options, props) => (
    <a
      href={item.url || '/'}
      title={item.nav_title || item.title}
      {...(options || {})}
    >
      {props?.iconPosition !== 'right' && props?.children}
      <span>{item.nav_title || item.title}</span>
      {props?.iconPosition === 'right' && props?.children}
    </a>
  ));

  const sampleMenuItems = [
    {
      '@id': '/topics',
      url: '/topics',
      title: 'Topics',
      items: [
        {
          title: 'At a glance',
          url: '/topics/at-a-glance',
          items: [
            {
              title: 'Climate',
              url: '/topics/climate',
              items: [],
            },
          ],
        },
        {
          title: 'In depth',
          url: '/topics/in-depth',
          items: [],
        },
      ],
    },
    {
      '@id': '/countries',
      url: '/countries',
      title: 'Countries',
      items: [
        {
          title: 'Overview',
          url: '/countries/overview',
          items: [],
        },
      ],
    },
  ];

  const sampleMenuItemsLayouts = {
    '/topics': {
      menuItemColumns: ['four wide column', 'four wide column'],
      menuItemChildrenListColumns: [2, 1],
      hideChildrenFromNavigation: false,
      gridContainerClass: 'ui two column grid',
    },
    '*': {
      hideChildrenFromNavigation: true,
    },
  };

  beforeEach(() => {
    history = createMemoryHistory();
    jest.clearAllMocks();
  });

  it('renders without crashing when visible', () => {
    render(
      <Router history={history}>
        <HeaderMenuPopUp
          menuItems={sampleMenuItems}
          renderMenuItem={mockRenderMenuItem}
          pathName="/topics"
          onClose={mockOnClose}
          triggerRefs={[]}
          activeItem="/topics"
          visible={true}
        />
      </Router>,
    );
  });

  it('renders without crashing when not visible', () => {
    render(
      <Router history={history}>
        <HeaderMenuPopUp
          menuItems={sampleMenuItems}
          renderMenuItem={mockRenderMenuItem}
          pathName="/topics"
          onClose={mockOnClose}
          triggerRefs={[]}
          activeItem="/topics"
          visible={false}
        />
      </Router>,
    );
  });

  it('renders menu content for desktop when menu item is found', () => {
    render(
      <Router history={history}>
        <HeaderMenuPopUp
          menuItems={sampleMenuItems}
          menuItemsLayouts={sampleMenuItemsLayouts}
          renderMenuItem={mockRenderMenuItem}
          pathName="/topics"
          onClose={mockOnClose}
          triggerRefs={[]}
          activeItem="/topics"
          visible={true}
        />
      </Router>,
    );

    expect(screen.getAllByText('Topics')).toHaveLength(3); // Desktop, mobile accordion button, and mobile overview
  });

  it('renders nested accordion for mobile/tablet', () => {
    render(
      <Router history={history}>
        <HeaderMenuPopUp
          menuItems={sampleMenuItems}
          renderMenuItem={mockRenderMenuItem}
          pathName="/topics"
          onClose={mockOnClose}
          triggerRefs={[]}
          activeItem="/topics"
          visible={true}
        />
      </Router>,
    );

    // Check for accordion structure
    const accordionElements = screen.getAllByRole('button');
    expect(accordionElements.length).toBeGreaterThan(0);
  });

  it('handles menu item without items', () => {
    const menuItemsWithoutItems = [
      {
        '@id': '/simple',
        url: '/simple',
        title: 'Simple Item',
        items: [],
      },
    ];

    render(
      <Router history={history}>
        <HeaderMenuPopUp
          menuItems={menuItemsWithoutItems}
          renderMenuItem={mockRenderMenuItem}
          pathName="/simple"
          onClose={mockOnClose}
          triggerRefs={[]}
          activeItem="/simple"
          visible={true}
        />
      </Router>,
    );

    expect(screen.getAllByText('Simple Item')).toHaveLength(3); // Desktop, mobile accordion button, and mobile overview
  });

  it('handles accordion click interactions', async () => {
    render(
      <Router history={history}>
        <HeaderMenuPopUp
          menuItems={sampleMenuItems}
          renderMenuItem={mockRenderMenuItem}
          pathName="/topics"
          onClose={mockOnClose}
          triggerRefs={[]}
          activeItem=""
          visible={true}
        />
      </Router>,
    );

    // Find and click accordion buttons
    const accordionButtons = screen.getAllByRole('button');
    if (accordionButtons.length > 0) {
      fireEvent.click(accordionButtons[0]);

      await waitFor(() => {
        expect(accordionButtons[0]).toHaveAttribute('aria-expanded');
      });
    }
  });

  it('handles menu items with special Topics title', () => {
    const topicsMenuItem = [
      {
        '@id': '/topics',
        url: '/topics',
        title: 'Topics',
        items: [
          {
            title: 'At a glance',
            url: '/topics/at-a-glance',
            items: [
              {
                title: 'Climate',
                url: '/topics/climate',
                items: [],
              },
            ],
          },
          {
            title: 'In depth',
            url: '/topics/in-depth',
            items: [],
          },
        ],
      },
    ];

    render(
      <Router history={history}>
        <HeaderMenuPopUp
          menuItems={topicsMenuItem}
          renderMenuItem={mockRenderMenuItem}
          pathName="/topics"
          onClose={mockOnClose}
          triggerRefs={[]}
          activeItem="/topics"
          visible={true}
        />
      </Router>,
    );

    expect(screen.getAllByText('Topics')).toHaveLength(3); // Desktop, mobile accordion button, and mobile overview
  });
});

describe('StandardMegaMenuGrid', () => {
  const mockRenderMenuItem = jest.fn((item, options) => (
    <a href={item.url || '/'} {...(options || {})}>
      {item.title}
    </a>
  ));

  const sampleMenuItem = {
    title: 'Sample Menu',
    url: '/sample',
    items: [
      {
        title: 'Sub Item 1',
        url: '/sample/sub1',
        items: [],
      },
      {
        title: 'Sub Item 2',
        url: '/sample/sub2',
        items: [],
      },
    ],
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with default layout when no menuItemColumns', () => {
    const layout = {};

    render(
      <StandardMegaMenuGrid
        menuItem={sampleMenuItem}
        renderMenuItem={mockRenderMenuItem}
        layout={layout}
      />,
    );

    expect(mockRenderMenuItem).toHaveBeenCalled();
  });

  it('renders with custom menuItemColumns layout', () => {
    const layout = {
      menuItemColumns: ['six wide column', 'ten wide column'],
      menuItemChildrenListColumns: [1, 2],
    };

    render(
      <StandardMegaMenuGrid
        menuItem={sampleMenuItem}
        renderMenuItem={mockRenderMenuItem}
        layout={layout}
      />,
    );

    expect(mockRenderMenuItem).toHaveBeenCalled();
  });

  it('handles gridContainerClass in layout', () => {
    const layout = {
      gridContainerClass: 'ui three column grid',
    };

    const { container } = render(
      <StandardMegaMenuGrid
        menuItem={sampleMenuItem}
        renderMenuItem={mockRenderMenuItem}
        layout={layout}
      />,
    );

    expect(
      container.querySelector('.ui.three.column.grid'),
    ).toBeInTheDocument();
  });

  it('handles complex menuItemColumns layout with multiple items', () => {
    const complexMenuItem = {
      title: 'Complex Menu',
      url: '/complex',
      items: [
        {
          title: 'Item 1',
          url: '/complex/item1',
          items: [
            { title: 'Sub 1', url: '/complex/item1/sub1', items: [] },
            { title: 'Sub 2', url: '/complex/item1/sub2', items: [] },
          ],
        },
        {
          title: 'Item 2',
          url: '/complex/item2',
          items: [],
        },
        {
          title: 'Item 3',
          url: '/complex/item3',
          items: [],
        },
        {
          title: 'Item 4',
          url: '/complex/item4',
          items: [],
        },
      ],
    };

    const layout = {
      menuItemColumns: [
        'four wide column',
        'four wide column',
        'eight wide column',
      ],
      menuItemChildrenListColumns: [1, 2, 1],
      hideChildrenFromNavigation: false,
    };

    render(
      <StandardMegaMenuGrid
        menuItem={complexMenuItem}
        renderMenuItem={mockRenderMenuItem}
        layout={layout}
      />,
    );

    expect(mockRenderMenuItem).toHaveBeenCalled();
  });
});

describe('HeaderMenuPopUp - Complex scenarios', () => {
  let history;
  const mockOnClose = jest.fn();
  const mockRenderMenuItem = jest.fn((item, options, props) => (
    <a
      href={item.url || '/'}
      title={item.nav_title || item.title}
      {...(options || {})}
    >
      {props?.iconPosition !== 'right' && props?.children}
      <span>{item.nav_title || item.title}</span>
      {props?.iconPosition === 'right' && props?.children}
    </a>
  ));

  beforeEach(() => {
    history = createMemoryHistory();
    jest.clearAllMocks();
  });

  it('handles Topics menu with special structure', () => {
    const topicsMenuItems = [
      {
        '@id': '/topics',
        url: '/topics',
        title: 'Topics',
        items: [
          {
            title: 'At a glance',
            url: '/topics/at-a-glance',
            items: [
              {
                title: 'Climate',
                url: '/topics/climate',
                items: [],
              },
            ],
          },
          {
            title: 'In depth',
            url: '/topics/in-depth',
            items: [],
          },
        ],
      },
    ];

    render(
      <Router history={history}>
        <HeaderMenuPopUp
          menuItems={topicsMenuItems}
          renderMenuItem={mockRenderMenuItem}
          pathName="/topics/climate"
          onClose={mockOnClose}
          triggerRefs={[]}
          activeItem="/topics"
          visible={true}
        />
      </Router>,
    );

    expect(screen.getAllByText('Topics')).toHaveLength(3); // Desktop, mobile accordion button, and mobile overview
  });

  it('handles accordion interactions with nested content', async () => {
    const nestedMenuItems = [
      {
        '@id': '/countries',
        url: '/countries',
        title: 'Countries',
        items: [
          {
            title: 'Europe',
            url: '/countries/europe',
            items: [
              {
                title: 'Germany',
                url: '/countries/europe/germany',
                items: [],
              },
              {
                title: 'France',
                url: '/countries/europe/france',
                items: [],
              },
            ],
          },
          {
            title: 'Asia',
            url: '/countries/asia',
            items: [],
          },
        ],
      },
    ];

    render(
      <Router history={history}>
        <HeaderMenuPopUp
          menuItems={nestedMenuItems}
          renderMenuItem={mockRenderMenuItem}
          pathName="/countries/europe"
          onClose={mockOnClose}
          triggerRefs={[]}
          activeItem=""
          visible={true}
        />
      </Router>,
    );

    // Find accordion buttons and test interactions
    const accordionButtons = screen.getAllByRole('button');

    if (accordionButtons.length > 0) {
      // Click first accordion
      fireEvent.click(accordionButtons[0]);

      await waitFor(() => {
        expect(accordionButtons[0]).toHaveAttribute('aria-expanded');
      });

      // Click again to close
      fireEvent.click(accordionButtons[0]);
    }
  });

  it('handles menu items without layout configuration', () => {
    const simpleMenuItems = [
      {
        '@id': '/simple',
        url: '/simple',
        title: 'Simple',
        items: [
          {
            title: 'Sub Item',
            url: '/simple/sub',
            items: [],
          },
        ],
      },
    ];

    render(
      <Router history={history}>
        <HeaderMenuPopUp
          menuItems={simpleMenuItems}
          renderMenuItem={mockRenderMenuItem}
          pathName="/simple"
          onClose={mockOnClose}
          triggerRefs={[]}
          activeItem="/simple"
          visible={true}
        />
      </Router>,
    );

    expect(screen.getAllByText('Simple')).toHaveLength(3); // Desktop, mobile accordion button, and mobile overview
  });

  it('handles layout with wildcard fallback', () => {
    const menuItems = [
      {
        '@id': '/test',
        url: '/test',
        title: 'Test',
        items: [
          {
            title: 'Sub Test',
            url: '/test/sub',
            items: [],
          },
        ],
      },
    ];

    const layoutsWithWildcard = {
      '*': {
        hideChildrenFromNavigation: false,
        menuItemColumns: ['eight wide column', 'eight wide column'],
      },
    };

    render(
      <Router history={history}>
        <HeaderMenuPopUp
          menuItems={menuItems}
          menuItemsLayouts={layoutsWithWildcard}
          renderMenuItem={mockRenderMenuItem}
          pathName="/test"
          onClose={mockOnClose}
          triggerRefs={[]}
          activeItem="/test"
          visible={true}
        />
      </Router>,
    );

    expect(screen.getAllByText('Test')).toHaveLength(3); // Desktop, mobile accordion button, and mobile overview
  });
});
