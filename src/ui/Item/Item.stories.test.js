import React from 'react';
import { render } from '@testing-library/react';
import { DefaultGroup, DefaultItem, Default } from './Item.stories';
import '@testing-library/jest-dom/extend-expect';

describe('DefaultGroup Component', () => {
  it('renders correctly', () => {
    const { container } = render(<DefaultGroup {...DefaultGroup.args} />);
    DefaultGroup.args.items.forEach((element) => {
      expect(
        container.querySelector(`img[src="${element.image}"]`),
      ).toBeInTheDocument();
    });
    expect(container.querySelector('.header')).toBeInTheDocument();
    expect(container.querySelector('.meta')).toBeInTheDocument();
    expect(container.querySelector('.description')).toBeInTheDocument();
    expect(container.querySelector('.extra')).toBeInTheDocument();
  });
});

describe('DefaultItem Component', () => {
  it('renders correctly', () => {
    const { container } = render(<DefaultItem {...DefaultItem.args} />);
    expect(container.querySelector('.header')).toBeInTheDocument();
    expect(container.querySelector('.meta')).toBeInTheDocument();
    expect(container.querySelector('.description')).toBeInTheDocument();
    expect(container.querySelector('.extra')).toBeInTheDocument();
  });
});

describe('Default Component', () => {
  it('renders correctly', () => {
    const { container } = render(<Default {...Default.args} />);
    expect(container.querySelector('.header')).toBeInTheDocument();
    expect(container.querySelector('.meta')).toBeInTheDocument();
    expect(container.querySelector('.description')).toBeInTheDocument();
    expect(container.querySelector('.extra')).toBeInTheDocument();
  });
});
