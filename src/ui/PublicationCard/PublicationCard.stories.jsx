import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const imageUrl =
  'https://www.eea.europa.eu/publications/eea-eionet-strategy-2021-2030/image_mini';

export default {
  title: 'Components/Publication Card',
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
  <Card {...args} className="publication">
    <Image src={args.image} wrapped ui={false} alt="card image" />
    <Card.Content>
      <Card.Meta>{args.tag}</Card.Meta>
      <Card.Description>{args.description}</Card.Description>
    </Card.Content>
  </Card>
);

export const PublicationCard = Template.bind({});
PublicationCard.args = {
  tag: '#Publication',
  description:
    'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
  image: imageUrl,
};

export const PublicationCardWithLongDescription = Template.bind({});
PublicationCardWithLongDescription.args = {
  tag: 'Publication',
  description:
    'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. ',
  image: imageUrl,
};
