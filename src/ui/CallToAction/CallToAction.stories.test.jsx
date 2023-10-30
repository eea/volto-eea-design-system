import React from 'react';
import { render } from '@testing-library/react';
import { Default, Inverted, Link, Labeled } from './CallToAction.stories';
import '@testing-library/jest-dom/extend-expect';

describe('Link', () => {
  it('renders correctly', () => {
    const { container } = render(<Link {...Link.args} />);
    expect(
      container.querySelector(`a[href="${Link.args.href}"]`),
    ).toBeInTheDocument();
  });
});

describe('Labeled', () => {
  it('renders correctly', () => {
    const { container, getByText } = render(<Labeled {...Labeled.args} />);
    expect(
      container.querySelector(`a[href="${Labeled.args.href}"]`),
    ).toBeInTheDocument();
    expect(getByText(Labeled.args.label)).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const { container, getByText } = render(
      <Labeled {...Labeled.args} variant={'default'} />,
    );
    expect(
      container.querySelector(`a[href="${Labeled.args.href}"]`),
    ).toBeInTheDocument();
    expect(getByText(Labeled.args.label)).toBeInTheDocument();
  });
});

describe('Inverted', () => {
  it('renders correctly', () => {
    const { container } = render(<Inverted {...Inverted.args} />);
    expect(
      container.querySelector(`a[href="${Inverted.args.href}"]`),
    ).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const { container } = render(
      <Inverted {...Inverted.args} variant={'default'} />,
    );
    expect(
      container.querySelector(`a[href="${Inverted.args.href}"]`),
    ).toBeInTheDocument();
  });
});

describe('Default', () => {
  it('renders correctly', () => {
    const { container } = render(<Default {...Default.args} />);
    expect(
      container.querySelector(`a[href="${Default.args.href}"]`),
    ).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const { container } = render(
      <Default {...Default.args} variant={'default'} />,
    );
    expect(
      container.querySelector(`a[href="${Default.args.href}"]`),
    ).toBeInTheDocument();
  });
});
