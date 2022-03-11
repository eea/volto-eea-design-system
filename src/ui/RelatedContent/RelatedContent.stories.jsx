import React from 'react';
import RelatedContent from './RelatedContent';
import { Container } from 'semantic-ui-react';

export default {
  title: 'Components/Related Content',
  component: RelatedContent,
  argTypes: {
    publicationCards: {
      description: 'publication cards data',
      table: {
        type: {
          summary: 'Object',
        },
        defaultValue: {
          summary: '',
        },
      },
    },
  },
};

const Template = (args) => (
  <Container>
    <RelatedContent>
      <RelatedContent.Grid
        publicationCards={args.publicationCards}
      ></RelatedContent.Grid>
      <RelatedContent.Button showButton={args.showButton}>
        {args.buttonText}
      </RelatedContent.Button>
    </RelatedContent>
  </Container>
);

export const DefaultEven = Template.bind({});
DefaultEven.args = {
  publicationCards: [
    {
      tag: 'Publication',
      description:
        'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
      href: '/#',
    },
    {
      tag: 'Publication',
      description: 'Leo fermentum sollicitudin suspendisse iaculis feugiat.',
      href: '/#',
    },
    {
      tag: 'Publication',
      description:
        'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. ',
      href: '/#',
    },
    {
      tag: 'Publication',
      description:
        'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. ',
      href: '/#',
    },
  ],
  buttonText: 'See All',
  showButton: true,
};

export const DefaultOdd = Template.bind({});
DefaultOdd.args = {
  publicationCards: [
    {
      tag: 'Publication',
      description:
        'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
      href: '/#',
    },
    {
      tag: 'Publication',
      description: 'Leo fermentum sollicitudin suspendisse iaculis feugiat.',
      href: '/#',
    },
    {
      tag: 'Publication',
      description:
        'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. ',
      href: '/#',
    },
  ],
  buttonText: 'See All',
  showButton: true,
};
