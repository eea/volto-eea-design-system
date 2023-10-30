import React from 'react';
import { render } from '@testing-library/react';
import { Default, ProgressWithValue, CustomColor } from './Progress.stories';
import '@testing-library/jest-dom/extend-expect';

describe('CustomColor component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<CustomColor {...CustomColor.args} />);
    expect(getByText(`${CustomColor.args.value}%`)).toBeInTheDocument();
    expect(getByText(`${CustomColor.args.children}`)).toBeInTheDocument();
  });
});

describe('ProgressWithValue component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <ProgressWithValue {...ProgressWithValue.args} />,
    );
    expect(getByText(`${ProgressWithValue.args.value}%`)).toBeInTheDocument();
    expect(getByText(`${ProgressWithValue.args.children}`)).toBeInTheDocument();
  });
});

describe('Default component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Default {...Default.args} />);
    expect(getByText(`${Default.args.percent}%`)).toBeInTheDocument();
    expect(getByText(`${Default.args.children}`)).toBeInTheDocument();
  });
});
