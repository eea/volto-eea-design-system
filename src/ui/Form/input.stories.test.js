import React from 'react';
import { render } from '@testing-library/react';
import {
  Default,
  StandardInput,
  DisabledInput,
  LoadingInput,
  ErrorInput,
} from './Input.stories';
import '@testing-library/jest-dom/extend-expect';

describe('ErrorInput component', () => {
  it('renders corectly', () => {
    const { getByText } = render(<ErrorInput {...ErrorInput.args} />);

    expect(getByText(ErrorInput.args.label)).toBeInTheDocument();
  });
});

describe('LoadingInput component', () => {
  it('renders corectly', () => {
    const { getByText } = render(<LoadingInput {...LoadingInput.args} />);

    expect(getByText(LoadingInput.args.label)).toBeInTheDocument();
  });
});

describe('DisabledInput component', () => {
  it('renders corectly', () => {
    const { getByText } = render(<DisabledInput {...DisabledInput.args} />);

    expect(getByText(DisabledInput.args.label)).toBeInTheDocument();
  });
});

describe('StandardInput component', () => {
  it('renders corectly', () => {
    const { getByText } = render(<StandardInput {...StandardInput.args} />);

    expect(getByText(StandardInput.args.label)).toBeInTheDocument();
  });
});

describe('Default component', () => {
  it('renders corectly', () => {
    const { container } = render(<Default {...Default.args} />);

    expect(
      container.querySelector('input#temp-id[placeholder="Placeholder"]'),
    ).toBeInTheDocument();
  });
});
