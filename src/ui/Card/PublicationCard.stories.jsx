import React from 'react';
import { Card, Image, Container } from 'semantic-ui-react';

const imageUrl =
  'https://www.eea.europa.eu/publications/eea-eionet-strategy-2021-2030/image_mini';

export default {
  title: 'Components/Card/Publication',
  component: Card,
  argTypes: {
    tag: {
      description: 'publication card tags',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    description: {
      description: 'publication card description',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },
};

const Template = (args) => (
  <Container>
    <Card className="publication tertiary">
      <Image
        as="a"
        href={args.href}
        src={args.image}
        wrapped
        ui={false}
        alt="card image"
      />
      <Card.Content>
        <Card.Meta>
          <a href={args.href}>{args.tag}</a>
        </Card.Meta>
        <Card.Description>
          <a href={args.href}>{args.description}</a>
        </Card.Description>
      </Card.Content>
    </Card>
  </Container>
);

export const PublicationCard = Template.bind({});
PublicationCard.args = {
  tag: '#Publication',
  description:
    'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
  image: imageUrl,
  href: '/#',
};
