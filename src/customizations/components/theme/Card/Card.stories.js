import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

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
    meta: {
      description: 'card meta data',
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
  <Card fluid={args.fluid} className="eea-card">
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
      <Card.Meta>{args.meta}</Card.Meta>
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
  title: 'Card Header',
  meta: 'meta data',
  description: 'card description',
  hasImage: true,
  fluid: false,
  links: [{ linkName: 'Link 1', icon: 'linkify' }],
};
