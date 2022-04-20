import React from 'react';
// eslint-disable-next-line import/no-unresolved
import AvatarGrid from './AvatarGrid';
import { Container } from 'semantic-ui-react';
import imgUrl from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/avatar.png';

export default {
  title: 'Components/Card/Rounded Card',
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
  <Container>
    <AvatarGrid>
      <AvatarGrid.Content>
        <AvatarGrid.Title showTitle={args.showTitle}>
          {args.title}
        </AvatarGrid.Title>
        <AvatarGrid.Group avatars={args.avatars}></AvatarGrid.Group>
      </AvatarGrid.Content>
    </AvatarGrid>
  </Container>
);

export const RoundedGrid = GridTemplate.bind({});
RoundedGrid.args = {
  title: 'Amet - Lorem ipsum dolor sit amet',
  showTitle: true,
  avatars: [
    {
      src: imgUrl,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      src: imgUrl,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      src: imgUrl,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ],
};
