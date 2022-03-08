import React from 'react';
import PublicationCard from './PublicationCard';

const imageUrl =
  'https://www.eea.europa.eu/publications/eea-eionet-strategy-2021-2030/image_mini';

export default {
  title: 'Components/PublicationCard',
  component: PublicationCard,
  argTypes: {
    tag: {
      description: 'publication tags',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    descripiton: {
      description: 'publication description',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },
};

const Template = (args) => (
  <PublicationCard {...args}>
    <PublicationCard.Header
      image_url={args.image ? imageUrl : null}
      image={args.image}
    />
    <PublicationCard.Info descripiton={args.descripiton} tag={args.tag} />
  </PublicationCard>
);

export const Default = Template.bind({});
Default.args = {
  tag: 'Publication',
  descripiton:
    'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
};

export const PublicationCardWithImage = Template.bind({});
PublicationCardWithImage.args = {
  tag: 'Publication',
  descripiton:
    'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
  image: true,
};
PublicationCardWithImage.argTypes = {
  image: {
    description: 'set or unset publication backgroung image',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
};
