import React from 'react';
import { render } from '@testing-library/react';
import { GridExamples, Basic12 } from './ComponentGrid.stories';
import '@testing-library/jest-dom/extend-expect';

describe('GridExamples component', () => {
  it('renders corectly', () => {
    const { getAllByText } = render(<GridExamples />);

    expect(getAllByText('12/2')).toHaveLength(3);
    expect(getAllByText('12/3')).toHaveLength(3);
    expect(getAllByText('12/4')).toHaveLength(6);
    expect(getAllByText('12/5')).toHaveLength(5);
  });
});

describe('Basic12 component', () => {
  it('renders corectly', () => {
    render(<Basic12 />);
  });
});
