import React from 'react';
import { Card, Image, Grid, Container, Icon, Button } from 'semantic-ui-react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const tabletBreakpoint = 835;
const mobileBreakpoint = 480;

export default {
  title: 'Components/Card/Default',
  component: Card,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    titleOnImage: {
      name: 'Display title on image',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
      },
    },
    variant: {
      options: ['default', 'primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
      description: 'card variation class',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'default' },
      },
    },
    inverted: {
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    cards: {
      table: {
        type: {
          summary: 'Object',
        },
        defaultValue: { summary: ' "" ' },
      },
    },
  },
};

const CardTemplate = ({ variant, inverted, titleOnImage, card }) => (
  <Card
    fluid={card.fluid}
    className={`${variant === 'default' ? '' : variant} ${
      inverted ? 'inverted' : ''
    }`}
  >
    {/* Card Image */}
    {card.hasImage ? (
      titleOnImage ? (
        <CardImage {...card} />
      ) : (
        <Image
          as="a"
          href={card.href}
          src={card.imgUrl}
          wrapped
          ui={false}
          alt="card image"
        />
      )
    ) : (
      ''
    )}
    <Card.Content>
      {/* Type & Date */}
      <Card.Meta>
        {card.meta} <MetaRight {...card} />
      </Card.Meta>

      {/* Title */}
      {!titleOnImage || !card.hasImage ? (
        <Card.Header>
          <a href={card.href}>{card.title}</a>
        </Card.Header>
      ) : (
        ''
      )}

      {/* Decription */}
      <Card.Description>{card.description}</Card.Description>
    </Card.Content>

    {/* Additional links */}
    {card.links &&
      card.links.map((item, index) => (
        <Card.Content extra key={index}>
          <a href={card.href}>{item.linkName}</a>
        </Card.Content>
      ))}
  </Card>
);

const CardImage = (card) => (
  <div className="image-with-title">
    <Image
      as="a"
      href={card.href}
      src={card.imgUrl}
      wrapped
      ui={false}
      alt="card image"
    />
    <div className="gradient">
      <Card.Header>
        <a href={card.href}>{card.title}</a>
      </Card.Header>
    </div>
  </div>
);

const MetaRight = (args) => (
  <span className="bold text-right">{args.metaRight}</span>
);

const Template = (args) => (
  <Container>
    {args.cards.map((card, index) => (
      <CardTemplate
        variant={args.variant}
        titleOnImage={args.titleOnImage}
        inverted={args.inverted}
        card={card}
        key={index}
      />
    ))}
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  titleOnImage: false,
  variant: 'default',
  inverted: false,
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
    },
  ],
};

const GridTemplate = (args) => (
  <Container>
    <Grid>
      {args.cards.map((card, index) => (
        <Grid.Column mobile={12} tablet={6} computer={4} key={index}>
          <CardTemplate
            variant={args.variant}
            titleOnImage={args.titleOnImage}
            inverted={args.inverted}
            card={card}
            key={index}
          />
        </Grid.Column>
      ))}
    </Grid>
  </Container>
);

export const CardGrid = GridTemplate.bind({});
CardGrid.args = {
  titleOnImage: false,
  variant: 'default',
  inverted: false,
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
      title: 'State of Europe\'s environment',
      description:
        'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
      hasImage: false,
      meta: 'Article',
      metaRight: '30/07/2022',
      href: '/#',
      fluid: true,
    },
  ],
};

const FluidGridTemplate = (args) => (
  <Container>
    <div className="fluid-card-row">
      {args.cards.map((card, index) => (
        <CardTemplate
          variant={args.variant}
          titleOnImage={args.titleOnImage}
          inverted={args.inverted}
          card={card}
          key={index}
        />
      ))}
    </div>
  </Container>
);

export const FluidGrid = FluidGridTemplate.bind({});
FluidGrid.args = {
  titleOnImage: false,
  variant: 'default',
  inverted: false,
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
      title: 'State of Europe\'s environment',
      description:
        'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
      hasImage: false,
      meta: 'Article',
      metaRight: '30/07/2022',
      href: '/#',
      fluid: true,
    },
  ],
};

const Arrows = (props) => {
  const { slider = {} } = props;

  return (
    <>
      <Button
        aria-label="Previous slide"
        className="slider-arrow prev-arrow tablet or lower hidden"
        icon
        onClick={() => {
          if (slider.current) {
            slider.current.slickPrev();
          }
        }}
      >
        <Icon className="ri-arrow-left-s-line" />
      </Button>
      <Button
        aria-label="Next slide"
        className="slider-arrow next-arrow tablet or lower hidden"
        icon
        onClick={() => {
          if (slider.current) {
            slider.current.slickNext();
          }
        }}
      >
        <Icon className="ri-arrow-right-s-line" />
      </Button>
    </>
  );
};

function CarouselCardsContent({
  titleOnImage,
  variant,
  inverted,
  settings,
  cards,
  ...rest
}) {
  const slider = React.useRef(null);
  return (
    <div className="cards-carousel">
      <Slider {...settings} ref={slider}>
        {cards.map((card, index) => (
          <CardTemplate
            variant={variant}
            titleOnImage={titleOnImage}
            inverted={inverted}
            card={card}
            key={index}
          />
        ))}
      </Slider>
      <Arrows slider={slider} />
    </div>
  );
}

const CarouselCardsTemplate = (args) => (
  <Container>
    <CarouselCardsContent {...args}></CarouselCardsContent>
  </Container>
);

export const CarouselCards = CarouselCardsTemplate.bind({});
CarouselCards.args = {
  titleOnImage: false,
  variant: 'default',
  inverted: false,
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
      title: 'State of Europe\'s environment',
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
CarouselCards.argTypes = {
  settings: {
    description: 'carousel slider settings',
    table: {
      type: {
        summary: 'object',
      },
      defaultValue: { summary: '' },
    },
  },
};
