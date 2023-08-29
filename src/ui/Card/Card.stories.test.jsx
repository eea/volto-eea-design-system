import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {
  TeaserCardGrid,
  CarouselCards,
  FluidGrid,
  CardGrid,
  Default,
} from './Card.stories';

describe('TeaserCardGrid component', () => {
  it('renders the teaser card grid with correct number of cards', () => {
    const { container } = render(<TeaserCardGrid {...TeaserCardGrid.args} />);
    const teaserCards = container.querySelectorAll('.column.grid-block-teaser');
    expect(teaserCards.length).toBe(3);
  });

  it('displays the correct title on each card', () => {
    const { container } = render(<TeaserCardGrid {...TeaserCardGrid.args} />);
    const cardTitles = container.querySelectorAll('.content .header a');
    const expectedTitles = [
      "State of Europe's environment",
      'Climate',
      'Economy and resources',
    ];
    cardTitles.forEach((titleElement, index) => {
      expect(titleElement.textContent).toBe(expectedTitles[index]);
    });
  });
});

describe('CarouselCards component', () => {
  it('renders the carousel with correct number of cards', () => {
    const { container } = render(<CarouselCards {...CarouselCards.args} />);
    const carouselCards = container.querySelectorAll(
      '.cards-carousel .slick-slide:not(.slick-cloned) .content .header',
    );
    expect(carouselCards.length).toBe(5);
  });

  it('calls the slickPrev function when the previous arrow is clicked', () => {
    const { getByLabelText } = render(
      <CarouselCards {...CarouselCards.args} />,
    );
    const prevArrowButton = getByLabelText('Previous slide');
    fireEvent.click(prevArrowButton);

    const nextArrowButton = getByLabelText('Next slide');
    fireEvent.click(nextArrowButton);
  });
});

describe('FluidGrid component', () => {
  it('renders fluid grid with correct number of cards', () => {
    const { container } = render(<FluidGrid {...FluidGrid.args} />);
    const fluidGridCards = container.querySelectorAll(
      '.fluid-card-row .fluid.card .header',
    );

    expect(fluidGridCards.length).toBe(3);
  });
});

describe('CardGrid component', () => {
  it('renders the card grid with correct number of cards', () => {
    const { container } = render(<CardGrid {...CardGrid.args} />);
    const cardGridCards = container.querySelectorAll(
      '.ui.fluid.card .content .header',
    );
    expect(cardGridCards.length).toBe(3);
  });
});

describe('Default component', () => {
  it('renders the default with correct number of cards', () => {
    const { container } = render(<Default {...Default.args} />);
    const defaultCards = container.querySelectorAll(
      '.ui.card.default .content .header',
    );
    expect(defaultCards.length).toBe(1);
  });
});
