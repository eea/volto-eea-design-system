import React from 'react';
import { render } from '@testing-library/react';
import { Default } from './InpageNavigation.stories';
import '@testing-library/jest-dom';

describe('Default component', () => {
  it('renders correctly', () => {
    render(<Default {...Default.args} />);
  });
});
