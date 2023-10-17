import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {
  TeaserCardGrid,
  CarouselCards,
  FluidGrid,
  CardGrid,
  ImageGrid,
  Default,
} from './Card.stories';

describe('TeaserCardGrid component', () => {
  it('renders correctly', () => {
    const { container } = render(<TeaserCardGrid {...TeaserCardGrid.args} />);

    expect(container.querySelector('.image')).toBeInTheDocument();
    expect(container.querySelector('.header')).toBeInTheDocument();
    expect(container.querySelector('.description')).toBeInTheDocument();

    expect(
      container.querySelector(`.ui.card.u-card.${TeaserCardGrid.args.variant}`),
    ).toBeInTheDocument();
    expect(
      container.querySelector(
        `.ui.card.u-card.max-${TeaserCardGrid.args.maxLines}-lines`,
      ),
    ).toBeInTheDocument();
    expect(
      container.querySelector(
        `.ui.card.u-card.title-max-${TeaserCardGrid.args.maxLines}-lines`,
      ),
    ).toBeInTheDocument();
    expect(
      container.querySelector(
        `.ui.card.u-card.has--object-fit--${TeaserCardGrid.args.objectFit}`,
      ),
    ).toBeInTheDocument();
    expect(
      container.querySelector(
        `.ui.card.u-card.has--object-position--${TeaserCardGrid.args.objectPosition}`,
      ),
    ).toBeInTheDocument();
  });

  it('renders the teaser card grid with correct number of cards', () => {
    const { container } = render(<TeaserCardGrid {...TeaserCardGrid.args} />);
    const teaserCards = container.querySelectorAll('.column.grid-block-teaser');
    expect(teaserCards.length).toBe(3);
  });

  it('displays the correct title on each card', () => {
    const { container } = render(<TeaserCardGrid {...TeaserCardGrid.args} />);
    const cardTitles = container.querySelectorAll('.content .header a');
    const expectedTitles = ['Economy and resources', 'Health', 'Nature'];
    cardTitles.forEach((titleElement, index) => {
      expect(titleElement.textContent).toBe(expectedTitles[index]);
    });
  });
});

describe('CarouselCards component', () => {
  it('renders correctly', () => {
    const { container } = render(<CarouselCards {...CarouselCards.args} />);

    expect(container.querySelector('.image')).toBeInTheDocument();
    expect(container.querySelector('.header')).toBeInTheDocument();
    expect(container.querySelector('.meta')).toBeInTheDocument();
    expect(container.querySelector('.description')).toBeInTheDocument();

    expect(
      container.querySelector(`.ui.card.u-card.${CarouselCards.args.variant}`),
    ).toBeInTheDocument();
    expect(
      container.querySelector(
        `.ui.card.u-card.max-${CarouselCards.args.maxLines}-lines`,
      ),
    ).toBeInTheDocument();
    expect(
      container.querySelector(
        `.ui.card.u-card.title-max-${CarouselCards.args.maxLines}-lines`,
      ),
    ).toBeInTheDocument();
    expect(
      container.querySelector(
        `.ui.card.u-card.has--object-fit--${CarouselCards.args.objectFit}`,
      ),
    ).toBeInTheDocument();
    expect(
      container.querySelector(
        `.ui.card.u-card.has--object-position--${CarouselCards.args.objectPosition}`,
      ),
    ).toBeInTheDocument();
  });

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
  it('renders correctly', () => {
    const { container } = render(<FluidGrid {...FluidGrid.args} />);

    expect(container.querySelector('.image')).toBeInTheDocument();
    expect(container.querySelector('.header')).toBeInTheDocument();
    expect(container.querySelector('.meta')).toBeInTheDocument();
    expect(container.querySelector('.description')).toBeInTheDocument();

    expect(
      container.querySelector(`.ui.card.u-card.${FluidGrid.args.variant}`),
    ).toBeInTheDocument();
    expect(
      container.querySelector(
        `.ui.card.u-card.max-${FluidGrid.args.maxLines}-lines`,
      ),
    ).toBeInTheDocument();
    expect(
      container.querySelector(
        `.ui.card.u-card.title-max-${FluidGrid.args.maxLines}-lines`,
      ),
    ).toBeInTheDocument();
    expect(
      container.querySelector(
        `.ui.card.u-card.has--object-fit--${FluidGrid.args.objectFit}`,
      ),
    ).toBeInTheDocument();
    expect(
      container.querySelector(
        `.ui.card.u-card.has--object-position--${FluidGrid.args.objectPosition}`,
      ),
    ).toBeInTheDocument();
  });

  it('renders fluid grid with correct number of cards', () => {
    const { container } = render(<FluidGrid {...FluidGrid.args} />);
    const fluidGridCards = container.querySelectorAll(
      '.fluid-card-row .fluid.card .header',
    );

    expect(fluidGridCards.length).toBe(3);
  });
});

describe('CardGrid component', () => {
  it('renders correctly', () => {
    const { container } = render(<CardGrid {...CardGrid.args} />);

    expect(container.querySelector('.image')).toBeInTheDocument();
    expect(container.querySelector('.header')).toBeInTheDocument();
    expect(container.querySelector('.meta')).toBeInTheDocument();
    expect(container.querySelector('.description')).toBeInTheDocument();

    expect(
      container.querySelector(`.ui.card.u-card.${CardGrid.args.variant}`),
    ).toBeInTheDocument();
    expect(
      container.querySelector(
        `.ui.card.u-card.max-${CardGrid.args.maxLines}-lines`,
      ),
    ).toBeInTheDocument();
    expect(
      container.querySelector(
        `.ui.card.u-card.title-max-${CardGrid.args.maxLines}-lines`,
      ),
    ).toBeInTheDocument();
    expect(
      container.querySelector(
        `.ui.card.u-card.has--object-fit--${CardGrid.args.objectFit}`,
      ),
    ).toBeInTheDocument();
    expect(
      container.querySelector(
        `.ui.card.u-card.has--object-position--${CardGrid.args.objectPosition}`,
      ),
    ).toBeInTheDocument();
  });

  it('renders the card grid with correct number of cards', () => {
    const { container } = render(<CardGrid {...CardGrid.args} />);
    const cardGridCards = container.querySelectorAll(
      '.ui.fluid.card .content .header',
    );
    expect(cardGridCards.length).toBe(5);
  });
});

describe('ImageGrid component', () => {
  it('renders correctly', () => {
    const { container } = render(<ImageGrid {...ImageGrid.args} />);

    expect(container.querySelector('.ui.image')).toBeInTheDocument();

    expect(
      container.querySelector(`.ui.card.u-card.${ImageGrid.args.variant}`),
    ).toBeInTheDocument();
    expect(
      container.querySelector(
        `.ui.card.u-card.has--object-fit--${ImageGrid.args.objectFit}`,
      ),
    ).toBeInTheDocument();
    expect(
      container.querySelector(
        `.ui.card.u-card.has--object-position--${ImageGrid.args.objectPosition}`,
      ),
    ).toBeInTheDocument();
  });

  it('renders the image grid with correct number of cards', () => {
    const { container } = render(<ImageGrid {...ImageGrid.args} />);
    const imageGridCards = container.querySelectorAll(
      '.ui.card.u-card.default .ui.image',
    );
    expect(imageGridCards.length).toBe(5);
  });
});

describe('Default component', () => {
  it('renders correctly', () => {
    const { container } = render(<Default {...Default.args} />);

    expect(container.querySelector('.image')).toBeInTheDocument();
    expect(container.querySelector('.header')).toBeInTheDocument();
    expect(container.querySelector('.meta')).toBeInTheDocument();
    expect(container.querySelector('.description')).toBeInTheDocument();

    expect(
      container.querySelector(`.ui.card.u-card.${Default.args.variant}`),
    ).toBeInTheDocument();
    expect(
      container.querySelector(
        `.ui.card.u-card.max-${Default.args.maxLines}-lines`,
      ),
    ).toBeInTheDocument();
    expect(
      container.querySelector(
        `.ui.card.u-card.title-max-${Default.args.maxLines}-lines`,
      ),
    ).toBeInTheDocument();
    expect(
      container.querySelector(
        `.ui.card.u-card.has--object-fit--${Default.args.objectFit}`,
      ),
    ).toBeInTheDocument();
    expect(
      container.querySelector(
        `.ui.card.u-card.has--object-position--${Default.args.objectPosition}`,
      ),
    ).toBeInTheDocument();
  });

  it('renders the default with correct number of cards', () => {
    const { container } = render(<Default {...Default.args} />);
    const defaultCards = container.querySelectorAll(
      '.ui.card.default .content .header',
    );
    expect(defaultCards.length).toBe(1);
  });
});
