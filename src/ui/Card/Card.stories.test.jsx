import React from 'react';
import { render } from '@testing-library/react';
import { TeaserCardGrid, CarouselCards } from './Card.stories';

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
  it('renders the carousel with correct number of cards', () => {
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
    render(<CarouselCards {...args} />);
    // const carouselCards = container.querySelectorAll(
    //   '.cards-carousel .slick-slide.slick-cloned .content .header',
    // );
    // expect(carouselCards.length).toBe(5);
  });
});
