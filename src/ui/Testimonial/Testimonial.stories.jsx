import React from 'react';
// eslint-disable-next-line import/no-unresolved
import imgUrl from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/avatar.png';
import Testimonial from './Testimonial';

export default {
  title: 'Components/Testimonial',
  component: Testimonial,
  argTypes: {
    title: {
      description: 'testimonial title',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'string' },
      },
    },
    image: {
      description: 'testimonial image',
      table: {
        defaultValue: { summary: '""' },
      },
    },
    quote: {
      description: 'quote text',
      type: { summary: 'string' },
    },
  },
};

const InlineTemplate = (args) => (
  <Testimonial {...args}>
    <Testimonial.Avatar
      image_url={imgUrl}
      title={args.avatarTitle}
      metadata={args.avatarInfo}
    ></Testimonial.Avatar>
    <Testimonial.Content>
      <Testimonial.Title>{args.title}</Testimonial.Title>
      <Testimonial.Pullquote>{args.quote}</Testimonial.Pullquote>
    </Testimonial.Content>
  </Testimonial>
);

export const Inline = InlineTemplate.bind({});
Inline.args = {
  avatarTitle: 'Joe Doe',
  avatarInfo: 'EEA Analyst',
  title: 'Amet - Lorem ipsum dolor sit amet',
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};
