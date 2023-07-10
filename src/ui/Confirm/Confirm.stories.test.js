import React from 'react';
import { render } from '@testing-library/react';
import { Default } from './Confirm.stories';
import '@testing-library/jest-dom/extend-expect';

describe('Default component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Default {...Default.args} />);

    expect(getByText('Show Confirmation')).toBeInTheDocument();
  });
});
