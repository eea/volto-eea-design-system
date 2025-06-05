import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import HeaderSearchPopUp from './HeaderSearchPopUp';
import '@testing-library/jest-dom/extend-expect';

describe('HeaderSearchPopUp', () => {
  let history;
  const mockOnClose = jest.fn();
  const sampleHeaderSearchBox = [
    {
      path: '/search',
      buttonTitle: 'Advanced Search',
      buttonUrl: '/advanced-search',
      description: 'Sample description',
      placeholder: 'Search',
      searchSuggestions: {
        suggestionsTitle: 'Suggestions Title',
        suggestions: ['suggestion 1', 'suggestion 2', 'suggestion 3'],
        maxToShow: 3,
      },
      isDefault: true,
    },
  ];

  const sampleHeaderSearchBoxWithMatchpath = [
    {
      matchpath: '/search',
      buttonTitle: 'Advanced Search',
      buttonUrl: undefined,
      description: 'Sample description',
      placeholder: 'Search',
      searchSuggestions: {
        suggestionsTitle: 'Suggestions Title',
        suggestions: ['suggestion 1', 'suggestion 2', 'suggestion 3'],
        maxToShow: 3,
      },
      isDefault: true,
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
      <Router history={history}>
        <HeaderSearchPopUp
          headerSearchBox={sampleHeaderSearchBox}
          onClose={mockOnClose}
          triggerRefs={[]}
        />
      </Router>,
    );
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });

  it('should update search text on change', () => {
    render(
      <Router history={history}>
        <HeaderSearchPopUp
          headerSearchBox={sampleHeaderSearchBox}
          onClose={mockOnClose}
          triggerRefs={[]}
        />
      </Router>,
    );
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'New text' } });
    expect(input.value).toBe('New text');
  });

  it('should submit the form with search text', () => {
    window.searchContext = { resetSearch: jest.fn() };

    const { container } = render(
      <Router history={history}>
        <HeaderSearchPopUp
          headerSearchBox={sampleHeaderSearchBox}
          onClose={mockOnClose}
          triggerRefs={[]}
        />
      </Router>,
    );
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'Search text' } });
    fireEvent.submit(container.querySelector('form'));
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(history.location.pathname).toBe('/search');
    // expect(history.location.search).toBe('?q=Search text');
  });

  it('should navigate to the suggestion when a suggestion is clicked', () => {
    window.searchContext = { resetSearch: jest.fn() };

    render(
      <Router history={history}>
        <HeaderSearchPopUp
          headerSearchBox={sampleHeaderSearchBoxWithMatchpath}
          onClose={mockOnClose}
        />
      </Router>,
    );
    fireEvent.click(screen.getByText('suggestion 1'));
    expect(history.location.pathname).toBe('/');
    expect(history.location.search).toBe('?q=suggestion 1');
  });
});
