import React from 'react';
import { render } from '@testing-library/react';
import Social from './Social';
import '@testing-library/jest-dom';

describe('Social component', () => {
  it('renders corectly with children', () => {
    const { getByText } = render(<Social>Social Test</Social>);
    expect(getByText('Social Test')).toBeInTheDocument();
  });
});
