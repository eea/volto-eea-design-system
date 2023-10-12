import React from 'react';
import { render } from '@testing-library/react';
import { ErrorDropdown, Default } from './Dropdown.stories';
import '@testing-library/jest-dom/extend-expect';

describe('ErrorDropdown component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<ErrorDropdown {...ErrorDropdown.args} />);
    ErrorDropdown.args.options.forEach((item) => {
      expect(getByText(item.value)).toBeInTheDocument();
    });
    expect(getByText(ErrorDropdown.args.placeholder)).toBeInTheDocument();
  });
});

describe('Default component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Default {...Default.args} />);
    Default.args.options.forEach((item) => {
      expect(getByText(item.value)).toBeInTheDocument();
    });
    expect(getByText(Default.args.placeholder)).toBeInTheDocument();
  });
});
