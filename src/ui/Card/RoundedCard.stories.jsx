import React from 'react';
import { Card, Image, Container } from 'semantic-ui-react';
import imgUrl from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/avatar.png';

export default {
  title: 'Components/Card/Rounded Card',
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
    src: {
      description: 'rounded card image url',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: ' "" ' },
      },
    },
  },
};

const AvatarTemplate = (args) => (
  <Container>
    <Card className="rounded" fluid={args.fluid}>
      {args.hasImage && (
        <Image src={args.src} wrapped ui={false} alt="card image" />
      )}
      <Card.Content>
        <Card.Header>{args.title}</Card.Header>
        <Card.Description>{args.description}</Card.Description>
      </Card.Content>
    </Card>
  </Container>
);

export const Default = AvatarTemplate.bind({});
Default.args = {
  src: imgUrl,
  title: 'Lorem Ipsum',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  hasImage: true,
  fluid: false,
};
