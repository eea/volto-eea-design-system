import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import HeaderSearchPopUp from './HeaderSearchPopUp';
import '@testing-library/jest-dom';

const mockStore = {
  getState: () => ({
    eeaSettings: {
      data: {
        header: {
          useAISearchIcon: false,
        },
      },
    },
  }),
  subscribe: () => () => {},
  dispatch: () => {},
};

describe('HeaderSearchPopUp', () => {
  let history;
  const mockOnClose = jest.fn();
  const sampleHeaderSearchBox = [
    {
      type: 'search-input',
      path: '/search',
      placeholder: 'Search',
      suggestionsTitle: 'Suggestions Title',
      suggestions: ['suggestion 1', 'suggestion 2', 'suggestion 3'],
      maxToShow: 3,
    },
    {
      type: 'button-link',
      title: 'Advanced Search',
      url: '/advanced-search',
    },
  ];

  const sampleHeaderSearchBoxWithMatchpath = [
    {
      type: 'search-input',
      matchpath: '/search',
      placeholder: 'Search',
      suggestionsTitle: 'Suggestions Title',
      suggestions: ['suggestion 1', 'suggestion 2', 'suggestion 3'],
      maxToShow: 3,
    },
  ];

  beforeEach(() => {
    history = createMemoryHistory();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render HeaderSearchPopUp', () => {
    render(
      <Provider store={mockStore}>
        <Router history={history}>
          <HeaderSearchPopUp
            headerSearchBox={sampleHeaderSearchBox}
            onClose={mockOnClose}
            triggerRefs={[]}
          />
        </Router>
      </Provider>,
    );
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });

  it('should update search text on change', () => {
    render(
      <Provider store={mockStore}>
        <Router history={history}>
          <HeaderSearchPopUp
            headerSearchBox={sampleHeaderSearchBox}
            onClose={mockOnClose}
            triggerRefs={[]}
          />
        </Router>
      </Provider>,
    );
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'New text' } });
    expect(input.value).toBe('New text');
  });

  it('should submit the form with search text', () => {
    window.searchContext = { resetSearch: jest.fn() };

    const { container } = render(
      <Provider store={mockStore}>
        <Router history={history}>
          <HeaderSearchPopUp
            headerSearchBox={sampleHeaderSearchBox}
            onClose={mockOnClose}
            triggerRefs={[]}
          />
        </Router>
      </Provider>,
    );
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'Search text' } });
    fireEvent.submit(container.querySelector('form'));
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(history.location.pathname).toBe('/search');
  });

  it('should navigate to the suggestion when a suggestion is clicked', () => {
    window.searchContext = { resetSearch: jest.fn() };

    render(
      <Provider store={mockStore}>
        <Router history={history}>
          <HeaderSearchPopUp
            headerSearchBox={sampleHeaderSearchBoxWithMatchpath}
            onClose={mockOnClose}
          />
        </Router>
      </Provider>,
    );
    fireEvent.click(screen.getByText('suggestion 1'));
    expect(history.location.pathname).toBe('/');
    expect(history.location.search).toBe('?q=suggestion 1');
  });

  it('should handle keydown events on search action button', () => {
    const { container } = render(
      <Provider store={mockStore}>
        <Router history={history}>
          <HeaderSearchPopUp
            headerSearchBox={sampleHeaderSearchBox}
            onClose={mockOnClose}
            triggerRefs={[]}
          />
        </Router>
      </Provider>,
    );

    const searchActionButton = container.querySelector(
      'button[aria-label="Submit search"]',
    );
    expect(searchActionButton).toBeInTheDocument();

    fireEvent.keyDown(searchActionButton, { key: 'Enter', code: 'Enter' });
    fireEvent.keyDown(searchActionButton, { key: 'Tab', code: 'Tab' });
  });

  it('should handle search without searchContext', () => {
    delete window.searchContext;

    const { container } = render(
      <Provider store={mockStore}>
        <Router history={history}>
          <HeaderSearchPopUp
            headerSearchBox={sampleHeaderSearchBox}
            onClose={mockOnClose}
            triggerRefs={[]}
          />
        </Router>
      </Provider>,
    );

    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'Test search' } });
    fireEvent.submit(container.querySelector('form'));

    expect(history.location.pathname).toBe('/search');
  });

  it('should handle suggestion click without searchContext', () => {
    delete window.searchContext;

    render(
      <Provider store={mockStore}>
        <Router history={history}>
          <HeaderSearchPopUp
            headerSearchBox={sampleHeaderSearchBox}
            onClose={mockOnClose}
          />
        </Router>
      </Provider>,
    );

    fireEvent.click(screen.getByText('suggestion 1'));
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('should render without search suggestions', () => {
    const headerSearchBoxNoSuggestions = [
      {
        type: 'search-input',
        path: '/search',
        placeholder: 'Search',
      },
      {
        type: 'button-link',
        title: 'Advanced Search',
        url: '/advanced-search',
      },
    ];

    render(
      <Provider store={mockStore}>
        <Router history={history}>
          <HeaderSearchPopUp
            headerSearchBox={headerSearchBoxNoSuggestions}
            onClose={mockOnClose}
            triggerRefs={[]}
          />
        </Router>
      </Provider>,
    );

    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
    expect(screen.queryByText('Suggestions Title')).not.toBeInTheDocument();
  });

  it('should render with empty suggestions array', () => {
    const headerSearchBoxEmptySuggestions = [
      {
        type: 'search-input',
        path: '/search',
        placeholder: 'Search',
        suggestionsTitle: 'Suggestions Title',
        suggestions: [],
        maxToShow: 3,
      },
    ];

    render(
      <Provider store={mockStore}>
        <Router history={history}>
          <HeaderSearchPopUp
            headerSearchBox={headerSearchBoxEmptySuggestions}
            onClose={mockOnClose}
            triggerRefs={[]}
          />
        </Router>
      </Provider>,
    );

    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
    expect(screen.queryByText('Suggestions Title')).not.toBeInTheDocument();
  });
});
