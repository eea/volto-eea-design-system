import React from 'react';
import { render } from '@testing-library/react';
import Description from './Description';
import '@testing-library/jest-dom/extend-expect';

describe('Description component', () => {
  it('renders corectly with children', () => {
    const { getByText } = render(<Description>Description Test</Description>);
    expect(getByText('Description Test')).toBeInTheDocument();
  });
});
