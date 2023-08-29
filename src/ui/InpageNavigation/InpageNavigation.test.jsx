import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InpageNavigation from './InpageNavigation';
import '@testing-library/jest-dom/extend-expect';

describe('InpageNavigation', () => {
  let scrollToMock;

  beforeEach(() => {
    scrollToMock = jest.fn();
    global.window.scrollTo = scrollToMock;
  });

  afterEach(() => {
    scrollToMock.mockClear();
    delete global.window.scrollTo;
  });

  it('should scroll to top on button click', () => {
    const { getByTitle } = render(<InpageNavigation />);
    const button = getByTitle('Go to top');

    fireEvent.click(button);

    expect(scrollToMock).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });

  it('should hide the button when scroll position is less than or equal to 50', () => {
    Object.defineProperty(window, 'scrollY', { value: 30 });

    const { getByTitle } = render(<InpageNavigation />);
    const button = getByTitle('Go to top');

    expect(button).toHaveClass('hidden');
  });

  it('should render the correct button content for different screen sizes', () => {
    const { container } = render(<InpageNavigation />);
    const mobileTabletOnlyContent = container.querySelector(
      '.mobile.tablet.only',
    );
    const tabletOrLowerHiddenContent = container.querySelector(
      '.tablet.or.lower.hidden',
    );

    expect(mobileTabletOnlyContent).toBeInTheDocument();
    expect(tabletOrLowerHiddenContent).toBeInTheDocument();
    expect(container.querySelector('.text')).toBeInTheDocument();
  });

  it('should scroll to top on button click', () => {
    const { getByTitle } = render(<InpageNavigation />);
    const button = getByTitle('Go to top');

    fireEvent.click(button);

    expect(scrollToMock).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });

  it('should show the button when scroll position is greater than 50', () => {
    Object.defineProperty(window, 'scrollY', { value: 100 });

    const { getByTitle } = render(<InpageNavigation />);
    const button = getByTitle('Go to top');

    expect(button).toHaveStyle('display: inline-block;');
  });

  it('should update button visibility based on scroll position', () => {
    const { getByTitle } = render(<InpageNavigation />);
    const button = getByTitle('Go to top');

    Object.defineProperty(window, 'scrollY', { value: 100 });
    fireEvent.scroll(window);

    expect(button).toHaveStyle('display: inline-block;');

    Object.defineProperty(window, 'scrollY', { value: 30 });
    fireEvent.scroll(window);
  });
});
