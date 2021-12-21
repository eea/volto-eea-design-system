import React from 'react';
import { Image } from 'semantic-ui-react';

export default {
  title: 'Components/Media Container',
  component: Image,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: [
        'mini',
        'tiny',
        'small',
        'medium',
        'large',
        'big',
        'huge',
        'massive',
      ],
    },
    spaced: {
      control: { type: 'inline-radio' },
      options: ['left', 'right'],
    },
    floated: {
      control: { type: 'inline-radio' },
      options: ['left', 'right'],
    },
  },
};

export const Default = (args) => <Image {...args} />;

Default.args = {
  src: 'https://www.eea.europa.eu/logo.jpg',
};

export const Playground = (args) => <Image {...args} />;

Playground.args = {
  src: 'https://www.eea.europa.eu/logo.jpg',
  size: 'small',
  hidden: false,
  disabled: false,
  avatar: false,
  bordered: false,
  fluid: false,
  rounded: false,
  circular: false,
  centered: false,
  spaced: false,
  floated: 'left',
};

export const Link = (args) => <Image {...args} />;

Link.args = {
  src: 'https://www.eea.europa.eu/logo.jpg',
  size: 'small',
  as: 'a',
  href: 'https://www.eea.europa.eu/logo.jpg',
  hidden: false,
  disabled: false,
  avatar: false,
  bordered: false,
  fluid: false,
  rounded: false,
  circular: false,
  centered: false,
  spaced: false,
  floated: 'left',
};

Link.storyName = 'Link Image';
