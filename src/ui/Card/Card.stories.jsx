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
    cards: {
      description: 'cards data',
      table: {
        type: {
          summary: 'object',
        },
        defaultValue: { summary: '' },
      },
    },
    inverted: {
      description: 'Inverted card',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
  },
};

const MetaRight = (args) => (
  <span className="bold text-right">{args.metaRight}</span>
);

const Template = (args) => (
  <Container>
    <Card
      fluid={args.fluid}
      className={`${args.variant === 'default' ? '' : args.variant} ${
        args.inverted ? 'inverted' : ''
      }`}
    >
      {args.hasImage && (
        <Image
          as="a"
          href={args.href}
          src={args.imgUrl}
          wrapped
          ui={false}
          alt="card image"
        />
      )}
      <Card.Content>
        <Card.Meta>
          {args.meta} <MetaRight {...args} />
        </Card.Meta>
        <Card.Header>
          <a href={args.href}>{args.title}</a>
        </Card.Header>
        <Card.Description>{args.description}</Card.Description>
      </Card.Content>
      {args.links !== null &&
        args.links.map((item, index) => (
          <Card.Content extra key={index}>
            <a href={args.href}>{item.linkName}</a>
          </Card.Content>
        ))}
    </Card>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  inverted: false,
  imgUrl:
    'https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large',

  meta: 'Article',
  metaRight: '30/07/2022',
  title: 'Lorem Ipsum',
  description:
    'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
  hasImage: true,
  href: '/#',
  links: null,
  fluid: false,
};
Default.argTypes = {
  imgUrl:
    'https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large',
  hasImage: {
    description: 'true if card contains image',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: { summary: true },
    },
  },
  fluid: {
    description: 'take up the width of its container',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: { summary: false },
    },
  },
  meta: {
    description: 'Card metadata',
    table: {
      category: 'Card content',
      type: { summary: 'string' },
      defaultValue: { summary: ' "" ' },
    },
  },
  metaRight: {
    description: 'Card right metadata',
    table: {
      category: 'Card content',
      type: { summary: 'string' },
      defaultValue: { summary: ' "" ' },
    },
  },
  title: {
    description: 'card header',
    table: {
      category: 'Card content',
      type: { summary: 'string' },
      defaultValue: { summary: ' "" ' },
    },
  },
  description: {
    description: 'card main content',
    table: {
      category: 'Card content',
      type: { summary: 'string' },
      defaultValue: { summary: ' "" ' },
    },
  },
};
Default.parameters = {
  controls: { exclude: ['cards', 'href', 'links'] },
  hideNoControlsWarning: true,
};

const GridTemplate = (args) => (
  <Container>
    <Grid>
      {args.cards.map((card, index) => (
        <Grid.Column mobile={12} tablet={6} computer={4} key={index}>
          <Card
            fluid={card.fluid}
            className={`${args.variant === 'default' ? '' : args.variant} ${
              args.inverted ? 'inverted' : ''
            }`}
          >
            {card.hasImage && (
              <Image
                as="a"
                href={card.href}
                src={card.imgUrl}
                wrapped
                ui={false}
                alt="card image"
              />
            )}
            <Card.Content>
              <Card.Meta>
                {card.meta} <MetaRight {...card} />
              </Card.Meta>
              <Card.Header>
                <a href={args.href}>{card.title}</a>
              </Card.Header>
              <Card.Description>{card.description}</Card.Description>
            </Card.Content>
            {card.links !== null &&
              card.links.map((item, index) => (
                <Card.Content extra key={index}>
                  <a href="/#">{item.linkName}</a>
                </Card.Content>
              ))}
          </Card>
        </Grid.Column>
      ))}
    </Grid>
  </Container>
);

export const CardGrid = GridTemplate.bind({});
CardGrid.args = {
  variant: 'default',
  inverted: false,
  cards: [
    {
      title: 'Lorem Ipsum',
      imgUrl:
        'https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large',
      description:
        'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
      hasImage: true,
      meta: 'Article',
      metaRight: '30/07/2022',
      href: '/#',
      links: null,
      fluid: true,
    },
    {
      title: 'Suspendisse iaculis feugiat',
      imgUrl:
        'https://www.eea.europa.eu/publications/eea-eionet-strategy-2021-2030/image_mini',
      description:
        'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
      hasImage: true,
      meta: 'Article',
      metaRight: '30/07/2022',
      href: '/#',
      links: null,
      fluid: true,
    },
    {
      title: 'Eget tellus blandit aenean mattis.',
      description:
        'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
      hasImage: false,
      meta: 'Article',
      metaRight: '30/07/2022',
      href: '/#',
      links: null,
      fluid: true,
    },
  ],
};
CardGrid.argTypes = {
  cards: {
    description: 'array with cards data',
    table: {
      type: {
        summary: 'Object',
      },
      defaultValue: { summary: ' "" ' },
    },
  },
};

const FluidGridTemplate = (args) => (
  <Container>
    <div className="fluid-card-row">
      {args.cards.map((card, index) => (
        <Card
          fluid={card.fluid}
          className={`${args.variant === 'default' ? '' : args.variant} ${
            args.inverted ? 'inverted' : ''
          }`}
          key={index}
        >
          {card.hasImage && (
            <Image
              as="a"
              href={card.href}
              src={card.imgUrl}
              wrapped
              ui={false}
              alt="card image"
            />
          )}
          <Card.Content>
            <Card.Meta>
              {card.meta} <MetaRight {...card} />
            </Card.Meta>
            <Card.Header>
              <a href={args.href}>{card.title}</a>
            </Card.Header>
            <Card.Description>{card.description}</Card.Description>
          </Card.Content>
          {card.links !== null &&
            card.links.map((item, index) => (
              <Card.Content extra key={index}>
                <a href="/#">{item.linkName}</a>
              </Card.Content>
            ))}
        </Card>
      ))}
    </div>
  </Container>
);

export const FluidGrid = FluidGridTemplate.bind({});
FluidGrid.args = {
  variant: 'default',
  inverted: false,
  cards: [
    {
      title: 'Lorem Ipsum',
      imgUrl:
        'https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large',
      description:
        'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
      hasImage: true,
      meta: 'Article',
      metaRight: '30/07/2022',
      href: '/#',
      fluid: true,
      links: null,
    },
    {
      title: 'Suspendisse iaculis feugiat',
      imgUrl:
        'https://www.eea.europa.eu/publications/eea-eionet-strategy-2021-2030/image_mini',
      description:
        'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
      hasImage: true,
      meta: 'Article',
      metaRight: '30/07/2022',
      href: '/#',
      fluid: true,
      links: null,
    },
    {
      title: 'Eget tellus blandit aenean mattis.',
      description:
        'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
      hasImage: false,
      meta: 'Article',
      metaRight: '30/07/2022',
      href: '/#',
      fluid: true,
      links: null,
    },
  ],
};
CardGrid.argTypes = {
  cards: {
    description: 'array with cards data',
    table: {
      type: {
        summary: 'Object',
      },
      defaultValue: { summary: ' "" ' },
    },
  },
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

function CarouselCardsContent({ variant, inverted, settings, cards, ...rest }) {
  const slider = React.useRef(null);
  return (
    <div className="cards-carousel">
      <Slider {...settings} ref={slider}>
        {cards.map((card, index) => (
          <Card
            fluid={card.fluid}
            key={index}
            className={`${variant === 'default' ? '' : variant} ${
              inverted ? 'inverted' : ''
            }`}
          >
            {card.hasImage && (
              <Image
                as="a"
                href={card.href}
                src={card.imgUrl}
                wrapped
                ui={false}
                alt="card image"
              />
            )}
            <Card.Content>
              <Card.Meta>{card.meta}</Card.Meta>
              <Card.Header>
                <a href={card.href}>{card.title}</a>
              </Card.Header>
            </Card.Content>
          </Card>
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
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      meta: 'March 20, 2022.',
      imgUrl:
        'https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large',
      hasImage: true,
      href: '/#',
      fluid: true,
    },
    {
      title: 'Lorem ipsum.',
      meta: 'March 20, 2022.',
      imgUrl:
        'https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large',
      hasImage: true,
      href: '/#',
      fluid: true,
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      meta: 'March 20, 2022.',
      imgUrl:
        'https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large',
      hasImage: true,
      href: '/#',
      fluid: true,
    },
    {
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean massa strong.',
      meta: 'March 20, 2022.',
      imgUrl:
        'https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large',
      hasImage: true,
      href: '/#',
      fluid: true,
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
