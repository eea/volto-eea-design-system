import React from 'react';
import { Card, Container, Icon, Grid } from 'semantic-ui-react';

export default {
  title: 'Components/Card/Icon card',
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
  },
};

const Template = (args) => (
  <Container>
    <Card className={`icon text-center ${args.class}`}>
      <Icon className={`${args.size} ${args.icon}`} />
      <Card.Content>
        <Card.Header>{args.title}</Card.Header>
      </Card.Content>
    </Card>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Lorem Ipsum',
  icon: 'ri-leaf-line',
  size: 'huge',
  class: null,
};
Default.argTypes = {
  title: {
    description: 'card header',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: { summary: ' "" ' },
    },
  },
  size: {
    control: { type: 'select' },
    options: [
      'mini',
      'tiny',
      'small',
      'medium',
      'large',
      'big',
      'huge',
      'massive',
    ],
    description: 'Icon size',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'huge' },
    },
  },
};

const GridTemplate = (args) => (
  <Container>
    <Grid>
      {args.cards !== null &&
        args.cards.map((card, index) => (
          <Grid.Column mobile={6} tablet={4} computer={2} key={index}>
            <Card className="icon text-center">
              <Icon className={`${card.size} ${card.icon}`} />
              <Card.Content>
                <Card.Header>{card.title}</Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
    </Grid>
  </Container>
);

export const GridIconCard = GridTemplate.bind({});
GridIconCard.args = {
  cards: [
    {
      title: 'Climate',
      icon: 'ri-cloud-line',
      size: 'huge',
    },
    {
      title: 'Economy and resources',
      icon: 'ri-hand-coin-line',
      size: 'huge',
    },
    {
      title: 'Health',
      icon: 'ri-hospital-line',
      size: 'huge',
    },
    {
      title: 'Nature',
      icon: 'ri-leaf-line',
      size: 'huge',
    },
    {
      title: 'Sustainability',
      icon: 'ri-service-line',
      size: 'huge',
    },
    {
      title: 'State of Europe’s environment',
      icon: 'ri-globe-line',
      size: 'huge',
    },
  ],
};
GridIconCard.argTypes = {
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
