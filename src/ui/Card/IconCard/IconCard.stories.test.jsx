import React from 'react';
import { render } from '@testing-library/react';
import { GridIconCard, Default } from './IconCard.stories';
import '@testing-library/jest-dom/extend-expect';

describe('GridIconCard component', () => {
  it('renders correctly', () => {
    const { container, getByText } = render(
      <GridIconCard {...GridIconCard.args} />,
    );

    GridIconCard.args.cards.forEach((card) => {
      expect(getByText(card.title)).toBeInTheDocument();
      expect(
        container.querySelector(`.${card.size}.${card.icon}`),
      ).toBeInTheDocument();
    });
  });

  it('renders correctly', () => {
    const { container, getByText } = render(
      <GridIconCard
        {...GridIconCard.args}
        variant={'primary'}
        inverted={true}
        hasLink={false}
      />,
    );

    GridIconCard.args.cards.forEach((card) => {
      expect(getByText(card.title)).toBeInTheDocument();
      expect(
        container.querySelector(`.${card.size}.${card.icon}`),
      ).toBeInTheDocument();
    });
  });
});

describe('Default component', () => {
  it('renders correctly', () => {
    const { container, getByText } = render(<Default {...Default.args} />);

    expect(getByText(Default.args.title)).toBeInTheDocument();
    expect(
      container.querySelector(`.${Default.args.size}.${Default.args.icon}`),
    ).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const { container, getByText } = render(
      <Default
        {...Default.args}
        variant={'primary'}
        inverted={true}
        hasLink={false}
      />,
    );

    expect(getByText(Default.args.title)).toBeInTheDocument();
    expect(
      container.querySelector(`.${Default.args.size}.${Default.args.icon}`),
    ).toBeInTheDocument();
  });
});
