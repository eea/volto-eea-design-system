import React from 'react';
// eslint-disable-next-line import/no-unresolved
import AvatarGrid from './AvatarGrid';
import { Container } from 'semantic-ui-react';

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

export const Default = GridTemplate.bind({});
Default.args = {
  title: 'Amet - Lorem ipsum dolor sit amet',
  showTitle: true,
  avatars: [
    {
      src:
        'static/media/src/addons/volto-eea-design-system/theme/themes/eea/assets/images/avatar.png',
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      src:
        'static/media/src/addons/volto-eea-design-system/theme/themes/eea/assets/images/avatar.png',
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      src:
        'static/media/src/addons/volto-eea-design-system/theme/themes/eea/assets/images/avatar.png',
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ],
};
