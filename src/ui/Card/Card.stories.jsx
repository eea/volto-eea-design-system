import React from 'react';
import { Card, Image, Grid, Container, Icon, Button } from 'semantic-ui-react';
import Slider from 'react-slick';

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
    class: {
      options: [null, 'primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
      description: 'card variation class',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'null' },
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
  },
};

const Template = (args) => (
  <Container>
    <Card fluid={args.fluid} className={args.class}>
      {args.hasImage && (
        <Image src={args.imgUrl} wrapped ui={false} alt="card image" />
      )}
      <Card.Content>
        <Card.Header>{args.title}</Card.Header>
        <Card.Description>{args.description}</Card.Description>
      </Card.Content>
      {args.links !== null &&
        args.links.map((item, index) => (
          <Card.Content extra key={index}>
            <a href="/#">{item.linkName}</a>
          </Card.Content>
        ))}
    </Card>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  class: null,
  imgUrl:
    'https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large',
  title: 'Lorem Ipsum',
  description:
    'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
  hasImage: true,
  fluid: false,
  links: [{ linkName: 'Link 1' }],
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
  title: {
    description: 'card header',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: { summary: ' "" ' },
    },
  },
  description: {
    description: 'card main content',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: { summary: ' "" ' },
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
  links: {
    description: 'array with links to other content',
    table: {
      type: {
        summary: 'Object',
      },
      defaultValue: { summary: ' "" ' },
    },
  },
};
Default.parameters = {
  controls: { exclude: ['cards'] },
  hideNoControlsWarning: true,
};

const GridTemplate = (args) => (
  <Container>
    <Grid>
      {args.cards.map((card, index) => (
        <Grid.Column mobile={12} tablet={6} computer={4} key={index}>
          <Card fluid={card.fluid} className={args.class}>
            {card.hasImage && (
              <Image src={card.imgUrl} wrapped ui={false} alt="card image" />
            )}
            <Card.Content>
              <Card.Header>{card.title}</Card.Header>
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
  class: null,
  cards: [
    {
      title: 'Lorem Ipsum',
      imgUrl:
        'https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large',
      description:
        'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
      hasImage: true,
      fluid: true,
      links: [{ linkName: 'Link 1' }],
    },
    {
      title: 'Suspendisse iaculis feugiat',
      imgUrl:
        'https://www.eea.europa.eu/publications/eea-eionet-strategy-2021-2030/image_mini',
      description:
        'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
      hasImage: true,
      fluid: true,
      links: [{ linkName: 'Link 1' }],
    },
    {
      title: 'Eget tellus blandit aenean mattis.',
      description:
        'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
      hasImage: false,
      fluid: true,
      links: [{ linkName: 'Link 1' }],
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
        <Card fluid={card.fluid} className={args.class} key={index}>
          {card.hasImage && (
            <Image src={card.imgUrl} wrapped ui={false} alt="card image" />
          )}
          <Card.Content>
            <Card.Header>{card.title}</Card.Header>
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
  class: null,
  cards: [
    {
      title: 'Lorem Ipsum',
      imgUrl:
        'https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large',
      description:
        'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
      hasImage: true,
      fluid: true,
      links: [{ linkName: 'Link 1' }],
    },
    {
      title: 'Suspendisse iaculis feugiat',
      imgUrl:
        'https://www.eea.europa.eu/publications/eea-eionet-strategy-2021-2030/image_mini',
      description:
        'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
      hasImage: true,
      fluid: true,
      links: [{ linkName: 'Link 1' }],
    },
    {
      title: 'Eget tellus blandit aenean mattis.',
      description:
        'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
      hasImage: false,
      fluid: true,
      links: [{ linkName: 'Link 1' }],
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

function CarouselCardsContent({ settings, cards, ...rest }) {
  const slider = React.useRef(null);
  return (
    <div className="cards-carousel">
      <Slider {...settings} ref={slider}>
        {cards.map((card, index) => (
          <Card fluid={card.fluid} key={index} className={rest.class}>
            {card.hasImage && (
              <Image
                as="a"
                href="/#"
                src={card.imgUrl}
                wrapped
                ui={false}
                alt="card image"
              />
            )}
            <Card.Content>
              <Card.Meta>
                <a href="/#">{card.meta}</a>
              </Card.Meta>
              <Card.Header>
                <a href="/#">{card.title}</a>
              </Card.Header>
            </Card.Content>
            {/* {card.links !== null &&
              card.links.map((item, index) => (
                <Card.Content extra key={index}>
                  <a href="/#">{item.linkName}</a>
                </Card.Content>
              ))} */}
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
  class: null,
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
      fluid: true,
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      meta: 'March 20, 2022.',
      imgUrl:
        'https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large',
      hasImage: true,
      fluid: true,
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      meta: 'March 20, 2022.',
      imgUrl:
        'https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large',
      hasImage: true,
      fluid: true,
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      meta: 'March 20, 2022.',
      imgUrl:
        'https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large',
      hasImage: true,
      fluid: true,
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      meta: 'March 20, 2022.',
      imgUrl:
        'https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large',
      hasImage: true,
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
