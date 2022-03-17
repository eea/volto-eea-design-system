import React from 'react';
// eslint-disable-next-line import/no-unresolved
import imgUrl from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/avatar.png';
import AvatarGrid from './AvatarGrid';

export default {
  title: 'Components/Avatar Grid',
  component: AvatarGrid,
  argTypes: {
    showTitle: {
      description: 'show / hide title',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    title: {
      description: 'avatar grid title',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'string' },
      },
    },
    avatars: {
      description: 'avatar data',
      table: {
        type: { summary: 'Object' },
        defaultValue: { summary: ' "" ' },
      },
    },
  },
};

const GridTemplate = (args) => (
  <AvatarGrid>
    <AvatarGrid.Content>
      <AvatarGrid.Title showTitle={args.showTitle}>
        {args.title}
      </AvatarGrid.Title>
      <AvatarGrid.Group avatars={args.avatars}></AvatarGrid.Group>
    </AvatarGrid.Content>
  </AvatarGrid>
);

export const Default = GridTemplate.bind({});
Default.args = {
  title: 'Amet - Lorem ipsum dolor sit amet',
  showTitle: true,
  avatars: [
    {
      image_url: imgUrl,
      title: 'Lorem ipsum',
      metadata: 'Urna auctor pharetra aenean sed gravida quam',
    },
    {
      image_url: imgUrl,
      title: 'Lorem ipsum',
      metadata: 'Duis vel eu placerat proin diam id enim suspendisse erat',
    },
    {
      image_url: imgUrl,
      title: 'Lorem ipsum',
      metadata: 'Egetisi gravida pellentesque volutpat diamon',
    },
  ],
};
