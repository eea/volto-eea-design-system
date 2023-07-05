import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {
  TeaserCardGrid,
  CarouselCards,
  FluidGrid,
  CardGrid,
  Default,
} from './Card.stories';

const tabletBreakpoint = 835;
const mobileBreakpoint = 480;

describe('TeaserCardGrid component', () => {
  it('renders the teaser card grid with correct number of cards', () => {
    const args = {
      titleOnImage: false,
      variant: 'default',
      inverted: false,
      rounded: false,
      objectFit: 'cover',
      objectPosition: 'center',
      titleMaxLines: '2',
      maxLines: '2',
      cards: [
        {
          title: "State of Europe's environment",
          imgUrl:
            'https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large',
          description:
            'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
          hasImage: true,
          href: '/#',
          fluid: true,
        },
        {
          title: 'Climate',
          imgUrl:
            'https://www.eea.europa.eu/publications/eea-eionet-strategy-2021-2030/image_mini',
          hasImage: true,
          description:
            'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
          href: '/#',
          fluid: true,
        },
        {
          title: 'Economy and resources',
          imgUrl:
            'https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large',
          hasImage: true,
          description:
            'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
          href: '/#',
          fluid: true,
        },
      ],
    };
    const { container } = render(<TeaserCardGrid {...args} />);
    const teaserCards = container.querySelectorAll('.column.grid-block-teaser');
    expect(teaserCards.length).toBe(3);
  });

  it('displays the correct title on each card', () => {
    const args = {
      titleOnImage: true,
      variant: 'test',
      inverted: true,
      rounded: true,
      objectFit: 'unset',
      objectPosition: 'none',
      titleMaxLines: 'none',
      maxLines: 'none',
      cards: [
        {
          title: "State of Europe's environment",
          imgUrl:
            'https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large',
          description:
            'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
          hasImage: true,
          href: '/#',
          fluid: false,
        },
        {
          title: 'Climate',
          imgUrl:
            'https://www.eea.europa.eu/publications/eea-eionet-strategy-2021-2030/image_mini',
          hasImage: true,
          description:
            'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
          href: '/#',
          fluid: true,
        },
        {
          title: 'Economy and resources',
          imgUrl:
            'https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large',
          hasImage: true,
          description:
            'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
          href: '/#',
          fluid: true,
        },
      ],
    };
    const { container } = render(<TeaserCardGrid {...args} />);
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
  const args = {
    titleOnImage: false,
    variant: 'default',
    inverted: false,
    rounded: false,
    objectFit: 'cover',
    objectPosition: 'center',
    titleMaxLines: '2',
    maxLines: '2',
    settings: {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: tabletBreakpoint,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        {
          breakpoint: mobileBreakpoint,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    },
    cards: [
      {
        title: "State of Europe's environment",
        meta: 'March 20, 2022.',
        imgUrl:
          'https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large',
        hasImage: true,
        href: '/#',
        fluid: true,
      },
      {
        title: 'Nature',
        meta: 'March 20, 2022.',
        imgUrl:
          'https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large',
        hasImage: true,
        href: '/#',
        fluid: true,
      },
      {
        title: 'Health',
        meta: 'March 20, 2022.',
        imgUrl:
          'https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large',
        hasImage: true,
        href: '/#',
        fluid: true,
      },
      {
        title: 'Climate',
        meta: 'March 20, 2022.',
        imgUrl:
          'https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large',
        hasImage: true,
        href: '/#',
        fluid: true,
      },
      {
        title: 'Economy and resources',
        meta: 'March 20, 2022.',
        imgUrl:
          'https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large',
        hasImage: true,
        href: '/#',
        fluid: true,
      },
    ],
  };
  it('renders the carousel with correct number of cards', () => {
    const { container } = render(<CarouselCards {...args} />);
    const carouselCards = container.querySelectorAll(
      '.cards-carousel .slick-slide:not(.slick-cloned) .content .header',
    );
    expect(carouselCards.length).toBe(5);
  });

  it('calls the slickPrev function when the previous arrow is clicked', () => {
    const { getByLabelText } = render(<CarouselCards {...args} />);
    const prevArrowButton = getByLabelText('Previous slide');
    fireEvent.click(prevArrowButton);

    const nextArrowButton = getByLabelText('Next slide');
    fireEvent.click(nextArrowButton);
  });
});

describe('FluidGrid component', () => {
  const args = {
    titleOnImage: true,
    variant: 'test',
    inverted: true,
    rounded: true,
    objectFit: 'unset',
    objectPosition: 'none',
    titleMaxLines: 'none',
    maxLines: 'none',
    cards: [
      {
        title: 'Nature',
        imgUrl:
          'https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large',
        description:
          'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
        hasImage: true,
        meta: 'Article',
        metaRight: '30/07/2022',
        href: '/#',
        fluid: true,
      },
      {
        title: 'Health',
        imgUrl:
          'https://www.eea.europa.eu/publications/eea-eionet-strategy-2021-2030/image_mini',
        description:
          'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
        hasImage: true,
        meta: 'Article',
        metaRight: '30/07/2022',
        href: '/#',
        fluid: true,
      },
      {
        title: "State of Europe's environment",
        imgUrl:
          'https://www.eea.europa.eu/publications/eea-eionet-strategy-2021-2030/image_mini',
        description:
          'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
        hasImage: true,
        meta: 'Article',
        metaRight: '30/07/2022',
        href: '/#',
        fluid: true,
      },
    ],
  };

  it('renders fluid grid with correct number of cards', () => {
    const { container } = render(<FluidGrid {...args} />);
    const fluidGridCards = container.querySelectorAll(
      '.fluid-card-row .fluid.card .header',
    );

    expect(fluidGridCards.length).toBe(3);
  });
});

describe('CardGrid component', () => {
  const args = {
    titleOnImage: false,
    variant: 'default',
    inverted: false,
    rounded: false,
    objectFit: 'cover',
    objectPosition: 'center',
    titleMaxLines: '2',
    maxLines: '2',
    cards: [
      {
        title: 'Nature',
        imgUrl:
          'https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large',
        description:
          'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
        hasImage: true,
        meta: 'Article',
        metaRight: '30/07/2022',
        href: '/#',
        fluid: true,
      },
      {
        title: 'Economy and resources',
        imgUrl:
          'https://www.eea.europa.eu/publications/eea-eionet-strategy-2021-2030/image_mini',
        description:
          'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
        hasImage: true,
        meta: 'Article',
        metaRight: '30/07/2022',
        href: '/#',
        fluid: true,
      },
      {
        title: "State of Europe's environment",
        imgUrl:
          'https://www.eea.europa.eu/publications/eea-eionet-strategy-2021-2030/image_mini',
        description:
          'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
        hasImage: true,
        meta: 'Article',
        metaRight: '30/07/2022',
        href: '/#',
        fluid: true,
      },
    ],
  };

  it('renders the card grid with correct number of cards', () => {
    const { container } = render(<CardGrid {...args} />);
    const cardGridCards = container.querySelectorAll(
      '.ui.fluid.card .content .header',
    );
    expect(cardGridCards.length).toBe(3);
  });
});

describe('Default component', () => {
  const args = {
    titleOnImage: false,
    variant: 'default',
    inverted: false,
    rounded: false,
    objectFit: 'cover',
    objectPosition: 'center',
    titleMaxLines: '2',
    maxLines: '2',
    cards: [
      {
        title: 'Economy and resources',
        imgUrl:
          'https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large',
        description:
          'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
        hasImage: true,
        meta: 'Article',
        metaRight: '30/07/2022',
        href: '/#',
        fluid: false,
        links: [{ href: 'test', linkName: 'test' }],
      },
    ],
  };

  it('renders the default with correct number of cards', () => {
    const { container } = render(<Default {...args} />);
    const defaultCards = container.querySelectorAll(
      '.ui.card.default .content .header',
    );
    expect(defaultCards.length).toBe(1);
  });
});
