import React from 'react';
import { Card, Image, Icon, Grid } from 'semantic-ui-react';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
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
  },
};

const Template = (args) => (
  <Card fluid={args.fluid}>
    {args.hasImage && (
      <Image
        src="https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large"
        wrapped
        ui={false}
        alt="card image"
      />
    )}
    <Card.Content>
      <Card.Header>{args.title}</Card.Header>      
      <Card.Description>{args.description}</Card.Description>
    </Card.Content>
    {args.links !== null &&
      args.links.map((item, index) => (
        <Card.Content extra key={index}>
          <a href="/#">
            {' '}
            <Icon name={item.icon} />
            {item.linkName}
          </a>
        </Card.Content>
      ))}
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  //src: 'https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large',
  title: 'Lorem Ipsum', 
  description: 'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
  hasImage: true,
  fluid: false,
  links: [{ linkName: 'Link 1' }],
};


const GridTemplate = (args) => (
  <Grid>
    {args.cards.map((card) => (
      <Grid.Column mobile={12} tablet={6} computer={2}>
        <Card fluid={card.fluid}>
          {card.hasImage && (
            <Image
              src="https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large"
              wrapped
              ui={false}
              alt="card image"
            />
          )}
          <Card.Content>
            <Card.Header>{card.title}</Card.Header>            
            <Card.Description>{card.description}</Card.Description>
          </Card.Content>
          {card.links !== null &&
            card.links.map((item, index) => (
              <Card.Content extra key={index}>
                <a href="/#">
                  {' '}
                  <Icon name={item.icon} />
                  {item.linkName}
                </a>
              </Card.Content>
            ))}
        </Card>
      </Grid.Column>
    ))}

  </Grid>
);

export const CardGrid = GridTemplate.bind({});
CardGrid.args = {
  cards: [
    {
      title: 'Lorem Ipsum',
      description: 'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
      hasImage: true,
      fluid: true,
      links: [{ linkName: 'Link 1' }],
    },
    {
      title: 'Suspendisse iaculis feugiat',
      description: 'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
      hasImage: true,
      fluid: true,
      links: [{ linkName: 'Link 1' }],
    }, {
      title: 'Eget tellus blandit aenean mattis.',
      description: 'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
      hasImage: false,
      fluid: true,
      links: [{ linkName: 'Link 1' }],
    }
  ]


};

