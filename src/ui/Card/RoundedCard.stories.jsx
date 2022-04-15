import React from 'react';
import { Card, Image, Container } from 'semantic-ui-react';

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
    avatarVariant: {
      options: ['big', 'small'],
      control: { type: 'inline-radio' },
      defaultValue: 'big',
      description: 'rounded card size class',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: ' "" ' },
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
    <Card className={`eea avatar ${args.avatarVariant}`} fluid={args.fluid}>
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
  avatarVariant: 'big',
  src:
    'static/media/src/addons/volto-eea-design-system/theme/themes/eea/assets/images/avatar.png',
  title: 'Lorem Ipsum',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  hasImage: true,
  fluid: false,
};
