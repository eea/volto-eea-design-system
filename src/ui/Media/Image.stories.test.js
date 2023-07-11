import React from 'react';
import { render } from '@testing-library/react';
import { Playground, Link, Default } from './Image.stories';
import '@testing-library/jest-dom/extend-expect';

describe('Playground component', () => {
  it('renders correctly', () => {
    const { container, getByText } = render(
      <Playground {...Playground.args} />,
    );

    expect(
      container.querySelector('img[alt="playground image"]'),
    ).toBeInTheDocument();
  });
});

describe('Link component', () => {
  it('renders correctly', () => {
    const { container } = render(<Link {...Link.args} />);

    expect(
      container.querySelector(`a[href="${Link.args.href}"]`),
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[alt="link image"]'),
    ).toBeInTheDocument();
  });
});

describe('Default component', () => {
  it('renders correctly', () => {
    const { container } = render(<Default {...Default.args} />);

    expect(container.querySelector('img[alt="image"]')).toBeInTheDocument();
  });
});
