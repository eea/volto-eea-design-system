import React from 'react';
// eslint-disable-next-line import/no-unresolved
import imgUrl from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/avatar.png';
import Testimonial from './Testimonial';
import { Container } from 'semantic-ui-react';

export default {
  title: 'Components/Quote/Testimonial',
  component: Testimonial,
  argTypes: {
    title: {
      description: 'testimonial title',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'string' },
      },
    },
    avatartitle: {
      description: 'avatar title',
      type: { summary: 'string' },
    },
    avatarinfo: {
      description: 'avatar metadata',
      type: { summary: 'string' },
    },
    avatarimage: {
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
  <Container>
    <Testimonial {...args}>
      <Testimonial.Avatar
        src={args.avatarimage}
        title={args.avatartitle}
        description={args.avatarinfo}
      ></Testimonial.Avatar>
      <Testimonial.Content>
        <Testimonial.Title>{args.title}</Testimonial.Title>
        <Testimonial.Quote>{args.quote}</Testimonial.Quote>
      </Testimonial.Content>
    </Testimonial>
  </Container>
);

export const Inline = InlineTemplate.bind({});
Inline.args = {
  avatartitle: 'Jane Doe',
  avatarinfo: 'EEA Analyst',
  avatarimage: imgUrl,
  title: 'Amet - Lorem ipsum dolor sit amet',
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};
