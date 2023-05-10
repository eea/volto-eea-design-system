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
    rounded: {
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    objectFit: {
      name: 'Image fit',
      options: ['unset', 'cover', 'contain', 'fill', 'scale-down'],
      control: { type: 'select' },
      table: {
        category: 'Image',
        defaultValue: { summary: 'cover' },
      },
    },
    objectPosition: {
      name: 'Image position',
      options: ['none', 'center', 'top', 'bottom', 'left', 'right'],
      control: { type: 'select' },
      table: {
        category: 'Image',
        defaultValue: { summary: 'center' },
      },
    },
    titleMaxLines: {
      name: 'Title max lines',
      options: ['none', '1', '2', '3', '4', '5'],
      control: { type: 'select' },
      table: {
        category: 'Content',
        defaultValue: { summary: '2' },
      },
    },
    maxLines: {
      name: 'Content max lines',
      options: ['none', '1', '2', '3', '4', '5'],
      control: { type: 'select' },
      table: {
        category: 'Content',
        defaultValue: { summary: '2' },
      },
    },
    cards: {
      name: 'Cards content',
      table: {
        type: {
          summary: 'Object',
        },
        category: 'Content',
        defaultValue: { summary: ' "" ' },
      },
    },
  },
};

const CardTemplate = ({
  variant,
  inverted,
  titleOnImage,
  rounded,
  objectFit,
  objectPosition,
  titleMaxLines,
  maxLines,
  card,
}) => (
  <Card
    fluid={card.fluid}
    className={`u-card ${variant === 'default' ? '' : variant} ${
      inverted ? 'inverted' : ''
    } ${variant} ${rounded ? 'rounded' : ''} ${
      objectFit === 'unset' ? '' : 'has--object-fit--' + objectFit
    } ${
      objectPosition === 'none' ? '' : 'has--object-position--' + objectPosition
    } ${
      titleMaxLines === 'none'
        ? 'title-max-0-lines'
        : 'title-max-' + titleMaxLines + '-lines'
    } ${maxLines === 'none' ? 'max-0-lines' : 'max-' + maxLines + '-lines'}`}
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

      {/* Description */}
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
  <a href={card.href} className={'image'}>
    <Image src={card.imgUrl} ui={false} alt="card image" />
    <div className="gradient">
      <Card.Header>{card.title}</Card.Header>
    </div>
  </a>
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
        rounded={args.rounded}
        objectFit={args.objectFit}
        objectPosition={args.objectPosition}
        titleMaxLines={args.titleMaxLines}
        maxLines={args.maxLines}
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
            rounded={args.rounded}
            objectFit={args.objectFit}
            objectPosition={args.objectPosition}
            titleMaxLines={args.titleMaxLines}
            maxLines={args.maxLines}
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

export const ImageGrid = GridTemplate.bind({});
ImageGrid.args = {
  titleOnImage: true,
  variant: 'default',
  inverted: false,
  rounded: false,
  objectFit: 'center',
  objectPosition: 'cover',
  titleMaxLines: '2',
  maxLines: '2',
  cards: [
    {
      title: 'Nature',
      imgUrl:
        'https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large',
      hasImage: true,
      href: '/#',
      fluid: true,
    },
    {
      title: 'Economy and resources',
      imgUrl:
        'https://www.eea.europa.eu/publications/eea-eionet-strategy-2021-2030/image_mini',
      hasImage: true,
      href: '/#',
      fluid: true,
    },
    {
      title: "State of Europe's environment",
      imgUrl:
        'https://www.eea.europa.eu/publications/eea-eionet-strategy-2021-2030/image_mini',
      hasImage: true,
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
          rounded={args.rounded}
          objectFit={args.objectFit}
          objectPosition={args.objectPosition}
          titleMaxLines={args.titleMaxLines}
          maxLines={args.maxLines}
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
  rounded,
  objectFit,
  settings,
  objectPosition,
  titleMaxLines,
  maxLines,
  cards,
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
            rounded={rounded}
            objectFit={objectFit}
            objectPosition={objectPosition}
            titleMaxLines={titleMaxLines}
            maxLines={maxLines}
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

const TeaserCard = ({
  variant,
  titleOnImage,
  inverted,
  rounded,
  objectFit,
  objectPosition,
  titleMaxLines,
  maxLines,
  card,
}) => (
  <div className="column grid-block-teaser">
    <div
      className={`styled-teaser styled ${variant === 'default' ? '' : variant}`}
    >
      <div
        className={`ui card u-card ${card.fluid ? 'fluid' : ''} ${
          inverted ? 'inverted' : ''
        } ${variant} ${rounded ? 'rounded' : ''} ${
          objectFit === 'unset' ? '' : 'has--object-fit--' + objectFit
        } ${
          objectPosition === 'none'
            ? ''
            : 'has--object-position--' + objectPosition
        } ${
          titleMaxLines === 'none'
            ? 'title-max-0-lines'
            : 'title-max-' + titleMaxLines + '-lines'
        } ${
          maxLines === 'none' ? 'max-0-lines' : 'max-' + maxLines + '-lines'
        }`}
      >
        <a className="image" href={card.href}>
          <img src={card.imgUrl} alt={card.title} className="ui image" />
          {titleOnImage && (
            <div className="gradient">
              <div className="header">{card.title}</div>
            </div>
          )}
        </a>

        {!titleOnImage && (
          <div className="content">
            <div className="header">
              <a href={card.href}>{card.title}</a>
            </div>
            <Card.Description>{card.description}</Card.Description>
          </div>
        )}
      </div>
    </div>
  </div>
);

const TeaserTemplate = (args) => (
  <Container>
    <div className="block __grid teaserGrid centered three">
      <div className="ui stackable stretched three column grid">
        {args.cards.map((card, index) => (
          <TeaserCard
            variant={args.variant}
            titleOnImage={args.titleOnImage}
            inverted={args.inverted}
            rounded={args.rounded}
            objectFit={args.objectFit}
            objectPosition={args.objectPosition}
            titleMaxLines={args.titleMaxLines}
            maxLines={args.maxLines}
            card={card}
            key={index}
          />
        ))}
      </div>
    </div>
  </Container>
);

export const TeaserCardGrid = TeaserTemplate.bind({});
TeaserCardGrid.args = {
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
