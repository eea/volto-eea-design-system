import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import HeaderSearchPopUp from './HeaderSearchPopUp';
import '@testing-library/jest-dom';

const mockState = {
  reduxAsyncConnect: {
    headerSettings: {
      useAISearchIcon: false,
    },
  },
};

const mockStore = {
  getState: () => mockState,
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

  const submitText = (headerSearchBox, text) => {
    const searchInputRef = React.createRef();
    const { container } = render(
      <Provider store={mockStore}>
        <Router history={history}>
          <HeaderSearchPopUp
            headerSearchBox={headerSearchBox}
            onClose={mockOnClose}
            searchInputRef={searchInputRef}
            triggerRefs={[]}
          />
        </Router>
      </Provider>,
    );
    fireEvent.change(screen.getByPlaceholderText('Search'), {
      target: { value: text },
    });
    fireEvent.submit(container.querySelector('form'));
  };

  it('should submit the search text as q by default', () => {
    submitText(sampleHeaderSearchBox, 'plenary');
    expect(history.location.pathname).toBe('/search');
    expect(history.location.search).toBe('?q=plenary');
  });

  it('should submit the search text as the entry queryParam', () => {
    submitText(
      [
        {
          type: 'search-input',
          path: '/en/epanet/site-search',
          queryParam: 'SearchableText',
          placeholder: 'Search',
        },
      ],
      'plenary',
    );
    expect(history.location.pathname).toBe('/en/epanet/site-search');
    expect(history.location.search).toBe('?SearchableText=plenary');
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

  describe('search icon and AI summary state', () => {
    beforeEach(() => {
      window.localStorage.clear();
      mockState.reduxAsyncConnect.headerSettings.useAISearchIcon = false;
    });

    const renderPopup = () =>
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

    it('shows the plain magnifier when useAISearchIcon is false', () => {
      const { container } = renderPopup();
      expect(container.querySelector('img')).toHaveAttribute(
        'src',
        'search-line.svg',
      );
    });

    it('shows the AI sparkle when useAISearchIcon is true and AI summaries are enabled', () => {
      mockState.reduxAsyncConnect.headerSettings.useAISearchIcon = true;

      const { container } = renderPopup();
      expect(container.querySelector('img')).toHaveAttribute(
        'src',
        'ai-search.svg',
      );
    });

    it('shows the plain magnifier when useAISearchIcon is true but AI summaries are disabled', () => {
      mockState.reduxAsyncConnect.headerSettings.useAISearchIcon = true;
      window.localStorage.setItem('eea-ai-summary-enabled', '0');

      const { container } = renderPopup();
      expect(container.querySelector('img')).toHaveAttribute(
        'src',
        'search-line.svg',
      );
    });
  });

  describe('search box useAISearchIcon override', () => {
    beforeEach(() => {
      window.localStorage.clear();
    });

    const renderWithEntry = (entry) =>
      render(
        <Provider store={mockStore}>
          <Router history={history}>
            <HeaderSearchPopUp
              headerSearchBox={[{ ...sampleHeaderSearchBox[0], ...entry }]}
              onClose={mockOnClose}
              triggerRefs={[]}
            />
          </Router>
        </Provider>,
      );

    it('shows the plain magnifier when the search box turns the AI icon off', () => {
      mockState.reduxAsyncConnect.headerSettings.useAISearchIcon = true;

      const { container } = renderWithEntry({ useAISearchIcon: false });
      expect(container.querySelector('img')).toHaveAttribute(
        'src',
        'search-line.svg',
      );
    });
  });

  describe('hideActions', () => {
    const renderWith = (headerSearchBox) =>
      render(
        <Provider store={mockStore}>
          <Router history={history}>
            <HeaderSearchPopUp
              headerSearchBox={headerSearchBox}
              onClose={mockOnClose}
              triggerRefs={[]}
            />
          </Router>
        </Provider>,
      );

    it('shows the actions by default', () => {
      renderWith(sampleHeaderSearchBox);
      expect(screen.getByText('Advanced Search')).toBeInTheDocument();
    });

    it('hides the actions when the matched search input has hideActions', () => {
      renderWith([
        { ...sampleHeaderSearchBox[0], hideActions: true },
        ...sampleHeaderSearchBox.slice(1),
      ]);
      expect(screen.queryByText('Advanced Search')).toBeNull();
      expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
    });
  });

  describe('enableGeneratedSeedQuestions in searchInput', () => {
    let originalFetch;

    beforeEach(() => {
      window.localStorage.clear();
      originalFetch = global.fetch;
    });

    afterEach(() => {
      global.fetch = originalFetch;
      window.localStorage.clear();
    });

    it('does not call fetch when enableGeneratedSeedQuestions is false or omitted', () => {
      global.fetch = jest.fn();

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

      expect(global.fetch).not.toHaveBeenCalled();
      expect(screen.getByText('Suggestions Title')).toBeInTheDocument();
    });

    it('uses cached seed questions from localStorage without calling fetch', () => {
      global.fetch = jest.fn();
      const cacheKey = 'eea_header_search_seed_questions_/search';
      window.localStorage.setItem(
        cacheKey,
        JSON.stringify({
          timestamp: Date.now(),
          questions: ['Cached Question 1', 'Cached Question 2'],
        }),
      );

      render(
        <Provider store={mockStore}>
          <Router history={history}>
            <HeaderSearchPopUp
              headerSearchBox={[
                {
                  ...sampleHeaderSearchBox[0],
                  enableGeneratedSeedQuestions: true,
                },
              ]}
              onClose={mockOnClose}
              triggerRefs={[]}
            />
          </Router>
        </Provider>,
      );

      expect(global.fetch).not.toHaveBeenCalled();
      expect(screen.getByText('Cached Question 1')).toBeInTheDocument();
      expect(screen.getByText('Cached Question 2')).toBeInTheDocument();
    });

    it('fetches seed questions from /_rq/questions when cache is missing or expired and saves to localStorage', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: () =>
          Promise.resolve({
            questions: ['Generated Question A', 'Generated Question B'],
          }),
      });

      render(
        <Provider store={mockStore}>
          <Router history={history}>
            <HeaderSearchPopUp
              headerSearchBox={[
                {
                  ...sampleHeaderSearchBox[0],
                  enableGeneratedSeedQuestions: true,
                  topics: ['Climate change', 'Air pollution'],
                  maxToShow: 4,
                },
              ]}
              onClose={mockOnClose}
              triggerRefs={[]}
            />
          </Router>
        </Provider>,
      );

      expect(global.fetch).toHaveBeenCalledWith(
        '/_rq/questions',
        expect.objectContaining({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            topics: ['Climate change', 'Air pollution'],
            count: 4,
          }),
        }),
      );

      const generatedLink = await screen.findByText('Generated Question A');
      expect(generatedLink).toBeInTheDocument();
      expect(screen.getByText('Generated Question B')).toBeInTheDocument();

      const cacheKey = 'eea_header_search_seed_questions_/search';
      const stored = JSON.parse(window.localStorage.getItem(cacheKey));
      expect(stored.questions).toEqual([
        'Generated Question A',
        'Generated Question B',
      ]);
    });

    it('renders skeleton lines matching maxToShow while loading', () => {
      global.fetch = jest.fn(() => new Promise(() => {}));

      const { container } = render(
        <Provider store={mockStore}>
          <Router history={history}>
            <HeaderSearchPopUp
              headerSearchBox={[
                {
                  ...sampleHeaderSearchBox[0],
                  enableGeneratedSeedQuestions: true,
                  maxToShow: 5,
                },
              ]}
              onClose={mockOnClose}
              triggerRefs={[]}
            />
          </Router>
        </Provider>,
      );

      const skeletons = container.querySelectorAll('.suggestion-skeleton');
      expect(skeletons).toHaveLength(5);
    });

    it('falls back to static suggestions when fetch fails', async () => {
      global.fetch = jest.fn().mockRejectedValue(new Error('Network error'));

      render(
        <Provider store={mockStore}>
          <Router history={history}>
            <HeaderSearchPopUp
              headerSearchBox={[
                {
                  ...sampleHeaderSearchBox[0],
                  enableGeneratedSeedQuestions: true,
                  suggestions: ['Static Fallback Question'],
                },
              ]}
              onClose={mockOnClose}
              triggerRefs={[]}
            />
          </Router>
        </Provider>,
      );

      expect(
        await screen.findByText('Static Fallback Question'),
      ).toBeInTheDocument();
    });
  });
});
