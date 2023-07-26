import React from 'react';
import { Card, Image, Grid, Container, Icon, Button } from 'semantic-ui-react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const tabletBreakpoint = 835;
const mobileBreakpoint = 480;

let cardModels = [
  {
    title: 'Economy and resources',
    imgUrl:
      'https://www.eea.europa.eu/publications/eea-eionet-strategy-2021-2030/image_mini',
    description:
      'The economy plays a vital role in our lives by providing access to employment, ' +
      'products and services that help us thrive. Unfortunately, with its key sectors like agriculture,' +
      ' energy and transport, our economy also harms the environment and causes climate change. ' +
      'Europe needs a circular, carbon-neutral and zero-pollution economy. ',
    meta: 'Article',
    metaRight: '20/05/2022',
    href: '/#',
  },
  {
    title: 'Health',
    imgUrl:
      'https://www.eea.europa.eu/en/topics/at-a-glance/health/@@images/image/preview',
    description:
      'By improving air, water, and soil quality and limiting pollution released to nature, ' +
      'the EU has significantly contributed to enhancing human health in the last five ' +
      'decades. Yet, many vulnerable groups continue to be impacted by environmental ' +
      'degradation and climate change. Further improvements can help keep Europeans ' +
      'healthier and better equipped to cope with climate change impacts.',
    meta: 'Article',
    metaRight: '30/06/2023',
    href: '/#',
  },
  {
    title: 'Nature',
    imgUrl:
      'https://www.eea.europa.eu/en/topics/at-a-glance/nature/@@images/image/preview',
    description:
      'Europe’s nature is filled with forests, mountains, vast plains, long rivers, deep blue seas and ' +
      'refreshing lakes. But it also is under threat. Unsustainable farming and forestry practices, ' +
      'pollution, climate change and invasive species are stressing and destabilising all natural ' +
      'systems in Europe. The result is a biodiversity crisis. The EU is taking steps to protect and restore nature.',
    meta: 'Article',
    metaRight: '10/04/2022',
    href: '/#',
  },
  {
    title: 'Climate',
    meta: 'Article',
    imgUrl:
      'https://www.eea.europa.eu/en/topics/at-a-glance/climate/@@images/image/preview',
    description:
      'Climate change affects us all and is accelerating. Its impacts will become even more severe if ' +
      'the increase in global temperature is not kept below 1.5°C. The EU and its Member States are ' +
      'taking important steps to rapidly reduce greenhouse gas emissions and adapt to climate change.',
    href: '/#',
  },
  {
    title: "State of Europe's environment",
    imgUrl:
      'https://www.eea.europa.eu/en/topics/at-a-glance/state-of-europes-environment/@@images/image/preview',
    description:
      'EU environment and climate policies have delivered substantial benefits over recent ' +
      'decades, such as cleaner air and water. Nevertheless, Europe, as well as the rest ' +
      'of the globe, is facing environmental challenges of unprecedented scale and urgency.',
    meta: 'Article',
    metaRight: '16/03/2022',
    href: '/#',
  },
];

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
    fluid: {
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
    numberOfCards: {
      name: 'Number of cards',
      options: [1, 2, 3, 4, 5],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 3 },
        type: { summary: 'number' },
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

const CardTemplate = ({
  variant,
  inverted,
  titleOnImage,
  rounded,
  objectFit,
  objectPosition,
  titleMaxLines,
  maxLines,
  fluid,
  card,
}) => (
  <Card
    fluid={fluid}
    className={`u-card ${variant === 'default' ? '' : variant} ${
      inverted ? 'inverted' : ''
    } ${variant} ${rounded ? 'rounded' : ''} ${
      objectFit === 'unset' ? '' : 'has--object-fit--' + objectFit
    } ${
      objectPosition === 'none' ? '' : 'has--object-position--' + objectPosition
    } ${
      titleMaxLines === 'none' ? '' : 'title-max-' + titleMaxLines + '-lines'
    } ${maxLines === 'none' ? '' : 'max-' + maxLines + '-lines'}`}
  >
    {/* Card Image */}
    {titleOnImage ? (
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
    )}
    <Card.Content>
      {/* Type & Date */}
      <Card.Meta>
        {card.meta} <MetaRight {...card} />
      </Card.Meta>

      {/* Title */}
      {!titleOnImage ? (
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

const Template = (args) => (
  <Container>
    {args.cards.slice(0, args.numberOfCards).map((card, index) => (
      <CardTemplate {...args} card={card} key={index} />
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
  numberOfCards: 1,
  fluid: false,
  cards: [...cardModels],
};
const GridTemplate = (args) => (
  <Container>
    <Grid>
      {args.cards.slice(0, args.numberOfCards).map((card, index) => (
        <Grid.Column mobile={12} tablet={6} computer={4} key={index}>
          <CardTemplate {...args} card={card} key={index} />
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
  fluid: true,
  numberOfCards: 5,
  cards: [...cardModels],
};

const ImageCard = ({
  variant,
  inverted,
  rounded,
  objectFit,
  objectPosition,
  fluid,
  card,
}) => (
  <div
    className={`ui card u-card ${fluid ? 'fluid' : ''} ${
      inverted ? 'inverted' : ''
    } ${variant} ${rounded ? 'rounded' : ''} ${
      objectFit === 'unset' ? '' : 'has--object-fit--' + objectFit
    } ${
      objectPosition === 'none' ? '' : 'has--object-position--' + objectPosition
    } `}
  >
    <a className="image" href={card.href}>
      <img src={card.imgUrl} alt={card.title} className="ui image" />
    </a>
  </div>
);

const ImageCardTemplate = (args) => (
  <Container>
    <div className="items imageCard-items">
      {args.cards.slice(0, args.numberOfCards).map((card, index) => (
        <ImageCard {...args} card={card} key={index} />
      ))}
    </div>
  </Container>
);
export const ImageGrid = ImageCardTemplate.bind({});
ImageGrid.args = {
  variant: 'default',
  inverted: false,
  rounded: false,
  objectFit: 'center',
  objectPosition: 'cover',
  fluid: true,
  cards: [...cardModels],
  numberOfCards: 5,
};

ImageGrid.argTypes = {
  titleOnImage: {
    table: {
      disable: true,
    },
  },
  titleMaxLines: {
    table: {
      disable: true,
    },
  },
  maxLines: {
    table: {
      disable: true,
    },
  },
};

const FluidGridTemplate = (args) => (
  <Container>
    <div className="fluid-card-row">
      {args.cards.slice(0, args.numberOfCards).map((card, index) => (
        <CardTemplate {...args} card={card} key={index} />
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
  numberOfCards: 3,
  fluid: true,
  cards: [...cardModels],
};
const PrevArrow = (props) => {
  const { onClick } = props;

  return (
    <Button
      aria-label="Previous slide"
      className="slider-arrow prev-arrow tablet or lower hidden"
      icon
      onClick={onClick}
    >
      <Icon className="ri-arrow-left-s-line" />
    </Button>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;

  return (
    <Button
      aria-label="Next slide"
      className="slider-arrow next-arrow tablet or lower hidden"
      icon
      onClick={onClick}
    >
      <Icon className="ri-arrow-right-s-line" />
    </Button>
  );
};

function CarouselCardsContent(args) {
  const slider = React.useRef(null);
  const dots_parent = React.useRef(null);
  const settings = {
    ...args.settings,
    customPaging: (i) => (
      <button className={'slider-dots-button'} aria-current={i === 0}>
        <span className="slick-dot-icon" aria-hidden="true" />
        <span className="slick-sr-only">Go to slide {i + 1}</span>
      </button>
    ),
    appendDots: (dots) => (
      <ul ref={dots_parent} className={'slick-dots'}>
        {dots}
      </ul>
    ),
    afterChange: (currentSlide) => {
      const dots = dots_parent.current;
      if (dots) {
        dots
          .querySelectorAll('.slider-dots-button')
          .forEach(function (el, idx) {
            el.setAttribute('aria-current', idx === currentSlide);
          });
      }
    },
  };
  return (
    <div className="cards-carousel" role={'region'} aria-label={'carousel'}>
      <Slider {...settings} ref={slider}>
        {args.cards.slice(0, args.numberOfCards).map((card, index) => (
          <CardTemplate {...args} card={card} key={index} />
        ))}
      </Slider>
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
  fluid: true,
  settings: {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
  numberOfCards: 5,
  cards: [...cardModels],
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
  fluid,
  maxLines,
  card,
}) => (
  <div className="column grid-block-teaser">
    <div
      className={`styled-teaser styled ${variant === 'default' ? '' : variant}`}
    >
      <div
        className={`ui card u-card ${fluid ? 'fluid' : ''} ${
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

const TeaserTemplate = (args) => {
  const columnCount = { 1: 'one', 2: 'two', 3: 'three', 4: 'four' };
  return (
    <Container>
      <div
        className={`block __grid teaserGrid centered ${
          columnCount[args.numberOfCards]
        }`}
      >
        <div
          className={`ui stackable stretched ${
            columnCount[args.numberOfCards]
          } column grid`}
        >
          {args.cards.slice(0, args.numberOfCards).map((card, index) => (
            <TeaserCard {...args} card={card} key={index} />
          ))}
        </div>
      </div>
    </Container>
  );
};

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
  fluid: true,
  numberOfCards: 3,
  cards: [...cardModels],
};
