import React from 'react';
import { Card, Image, Grid, Container } from 'semantic-ui-react';

export default {
  title: 'Components/Card/Primary',
  component: Card,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
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
    avatarVariant: {
      options: ['big', 'small'],
      control: { type: 'inline-radio' },
      defaultValue: 'big',
    },
  },
};

const Template = (args) => (
  <Container>
    <Card fluid={args.fluid} className="primary">
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
  imgUrl:
    'https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large',
  title: 'Lorem Ipsum',
  description:
    'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
  hasImage: true,
  fluid: false,
  links: [{ linkName: 'Link 1' }],
};

const GridTemplate = (args) => (
  <Container>
    <Grid>
      {args.cards.map((card) => (
        <Grid.Column mobile={12} tablet={6} computer={2}>
          <Card fluid={card.fluid} className="primary">
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
