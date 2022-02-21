import React from 'react';
import Banner from './Banner';
// eslint-disable-next-line import/no-unresolved
import imgUrl from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/banner.png';

export default {
  title: 'Components/Page Header',
  component: Banner,
  argTypes: {
    title: {
      description: 'banner title',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'string' },
      },
    },
    info: {
      description: 'banner secondary info',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'string' },
      },
    },
    image: {
      description: 'set or unset banner image',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'boolean' },
      },
    },
  },
};

const Template = (args) => (
  <Banner {...args} image_url={args.image ? imgUrl : null}>
    <Banner.Content
      actions={
        <>
          <Banner.Action
            icon="bookmark outline"
            title="Bookmark"
            className="bookmark"
          />
          <Banner.Action
            icon="download"
            title="Download"
            className="download"
          />
        </>
      }
    >
      <Banner.Title>{args.title}</Banner.Title>
      <Banner.Metadata>{args.info}</Banner.Metadata>
    </Banner.Content>
  </Banner>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  info: 'Briefing | Published Date | Modified Date | 5 min read',
  image: true,
};
