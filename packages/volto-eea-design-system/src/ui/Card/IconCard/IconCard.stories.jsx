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
    variant: {
      options: ['default', 'primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
      description: 'card variation class',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'null' },
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
    inverted: {
      description: 'Inverted card',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    hasLink: {
      description: 'Clickable card',
      table: {
        defaultValue: { summary: 'true' },
        type: { summary: 'boolean' },
      },
    },
  },
};

const Template = (args) => (
  <Container>
    <Card
      className={`icon text-center ${
        args.variant === 'default' ? '' : args.variant
      } ${args.inverted ? 'inverted' : ''} ${
        args.titleMaxLines === 'none'
          ? 'title-max-0-lines'
          : 'title-max-' + args.titleMaxLines + '-lines'
      }`}
    >
      {args.hasLink ? (
        <a href={args.href} aria-label={args.title}>
          <Icon className={`${args.size} ${args.icon}`} />
        </a>
      ) : (
        <Icon className={`${args.size} ${args.icon}`} />
      )}
      <Card.Content>
        {args.hasLink ? (
          <Card.Header>
            <a href={args.href} aria-label={args.title}>
              {args.title}
            </a>
          </Card.Header>
        ) : (
          <Card.Header>{args.title}</Card.Header>
        )}
      </Card.Content>
    </Card>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  titleMaxLines: '2',
  inverted: false,
  title: 'Lorem Ipsum',
  icon: 'ri-leaf-line',
  size: 'huge',
  hasLink: true,
  href: '/#',
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
            <Card
              className={`icon text-center ${
                args.variant === 'default' ? '' : args.variant
              } ${args.inverted ? 'inverted' : ''} ${
                args.titleMaxLines === 'none'
                  ? 'title-max-0-lines'
                  : 'title-max-' + args.titleMaxLines + '-lines'
              }`}
            >
              {args.hasLink ? (
                <a href={args.href} aria-label={card.title}>
                  <Icon className={`${card.size} ${card.icon}`} />
                </a>
              ) : (
                <Icon className={`${card.size} ${card.icon}`} />
              )}
              <Card.Content>
                {args.hasLink ? (
                  <Card.Header>
                    <a href={args.href} aria-label={card.title}>
                      {card.title}
                    </a>
                  </Card.Header>
                ) : (
                  <Card.Header>{card.title}</Card.Header>
                )}
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
    </Grid>
  </Container>
);

export const GridIconCard = GridTemplate.bind({});
GridIconCard.args = {
  variant: 'default',
  titleMaxLines: '2',
  inverted: false,
  hasLink: true,
  href: '/#',
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
      category: 'Content',
      type: {
        summary: 'Object',
      },
      defaultValue: { summary: ' "" ' },
    },
  },
};
