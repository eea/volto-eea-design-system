import React from 'react';
import { render } from '@testing-library/react';
import { Default } from './Tab.stories';
import '@testing-library/jest-dom';

describe('It renderes corectly', () => {
  it('renders corectly', () => {
    render(<Default {...Default.args} />);
  });
});
