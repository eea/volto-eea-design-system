import React from 'react';
import { Card, Image, Grid, Container } from 'semantic-ui-react';

export default {
  title: 'Components/Card/Rounded Card',
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

const AvatarTemplate = (args) => (
  <Container>
    <Card className={`eea avatar ${args.avatarVariant}`} fluid={args.fluid}>
      <Image src={args.src} wrapped ui={false} alt="card image" />
      <Card.Content>
        <Card.Header>{args.title}</Card.Header>
        <Card.Description>{args.description}</Card.Description>
      </Card.Content>
    </Card>
  </Container>
);

export const Avatar = AvatarTemplate.bind({});
Avatar.args = {
  avatarVariant: 'big',
  src:
    'static/media/src/addons/volto-eea-design-system/theme/themes/eea/assets/images/avatar.png',
  title: 'Lorem Ipsum',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  hasImage: true,
  fluid: false,
};
