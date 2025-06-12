import React from 'react';
import { render } from '@testing-library/react';
import {
  Info,
  ErrorMessage,
  Warning,
  Success,
  Default,
} from './Message.stories';
import '@testing-library/jest-dom/extend-expect';

describe('Info component', () => {
  it('renders a Message component', () => {
    const { getByText } = render(<Info {...Info.args} />);
    expect(getByText(Info.args.header)).toBeInTheDocument();
    expect(getByText(Info.args.content)).toBeInTheDocument();
  });
});

describe('ErrorMessage component', () => {
  it('renders a Message component', () => {
    const { getByText } = render(<ErrorMessage {...ErrorMessage.args} />);
    expect(getByText(ErrorMessage.args.header)).toBeInTheDocument();
    expect(getByText(ErrorMessage.args.content)).toBeInTheDocument();
  });
});

describe('Warning component', () => {
  it('renders a Message component', () => {
    const { getByText } = render(<Warning {...Warning.args} />);
    expect(getByText(Warning.args.header)).toBeInTheDocument();
    expect(getByText(Warning.args.content)).toBeInTheDocument();
  });
});

describe('Success component', () => {
  it('renders a Message component', () => {
    const { getByText } = render(<Success {...Success.args} />);
    expect(getByText(Success.args.header)).toBeInTheDocument();
    expect(getByText(Success.args.content)).toBeInTheDocument();
  });
});

describe('Default component', () => {
  it('renders a Message component', () => {
    const { getByText } = render(<Default {...Default.args} />);
    expect(getByText(Default.args.header)).toBeInTheDocument();
    expect(getByText(Default.args.content)).toBeInTheDocument();
  });
});
