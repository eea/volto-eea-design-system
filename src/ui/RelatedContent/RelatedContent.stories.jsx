import React from 'react';
import RelatedContent from './RelatedContent';

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
  <div>
    <RelatedContent {...args}></RelatedContent>
  </div>
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
      description:
        'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
      href: '/#',
    },
    {
      tag: 'Publication',
      description:
        'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
      href: '/#',
    },
    {
      tag: 'Publication',
      description:
        'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
      href: '/#',
    },
  ],
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
      description:
        'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
      href: '/#',
    },
    {
      tag: 'Publication',
      description:
        'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
      href: '/#',
    },
  ],
};
