import React from 'react';
import { render } from '@testing-library/react';
import { Default } from './InpageNavigation.stories';
import '@testing-library/jest-dom/extend-expect';

describe('Default component', () => {
  it('renders correctly', () => {
    render(<Default {...Default.args} />);
  });
});
