import React from 'react';
import { render } from '@testing-library/react';
import {
  Text,
  Labeled,
  Inverted,
  Secondary,
  Primary,
  Default,
} from './Button.stories';
import '@testing-library/jest-dom/extend-expect';

describe('Text component', () => {
  it('renders a button with label', () => {
    const { getByText } = render(<Text {...Text.args} />);
    expect(getByText(Text.args.label)).toBeInTheDocument();
  });
});

describe('Labeled component', () => {
  it('renders a button with label', () => {
    const { getByText } = render(<Labeled {...Labeled.args} />);
    expect(getByText(Labeled.args.label)).toBeInTheDocument();
  });
});

describe('Inverted component', () => {
  it('renders a button with label', () => {
    const { getByText } = render(<Inverted {...Inverted.args} />);
    expect(getByText(Inverted.args.button1)).toBeInTheDocument();
    expect(getByText(Inverted.args.button2)).toBeInTheDocument();
    expect(getByText(Inverted.args.button3)).toBeInTheDocument();
  });
});

describe('Secondary component', () => {
  it('renders a button with label', () => {
    const { getByText } = render(<Secondary {...Secondary.args} />);
    expect(getByText(Secondary.args.label)).toBeInTheDocument();
  });
});

describe('Primary component', () => {
  it('renders a button with label', () => {
    const { getByText } = render(<Primary {...Primary.args} />);
    expect(getByText(Primary.args.label)).toBeInTheDocument();
  });
});

describe('Default component', () => {
  it('renders a button with label', () => {
    const { getByText } = render(<Default {...Default.args} />);
    expect(getByText(Default.args.label)).toBeInTheDocument();
  });
});
