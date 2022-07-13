import React from 'react';
// eslint-disable-next-line import/no-unresolved
import AvatarGrid from './AvatarGrid';
import { Container } from 'semantic-ui-react';
import imgUrl from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/avatar.png';

export default {
  title: 'Components/Card/Rounded Card',
  component: AvatarGrid,
  argTypes: {
    variant: {
      options: ['default', 'primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
      description: 'card variation class',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'default' },
      },
    },
    inverted: {
      description: 'Inverted card',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    hasLink: {
      description: 'Clickable card',
      table: {
        defaultValue: { summary: 'true' },
        type: { summary: 'boolean' },
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
        <AvatarGrid.Group avatars={args.avatars} {...args}></AvatarGrid.Group>
      </AvatarGrid.Content>
    </AvatarGrid>
  </Container>
);

export const RoundedGrid = GridTemplate.bind({});
RoundedGrid.args = {
  variant: 'default',
  inverted: false,
  hasLink: true,
  href: '/#',
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
