import React from 'react';
import Hero from './Hero';
import { Button } from 'semantic-ui-react';
import imgUrl from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/forest.png';

const primaryButton = { primary: true, secondary: false, inverted: false };
const primaryInvertedButton = {
  primary: true,
  secondary: false,
  inverted: true,
};
const secondaryButton = { primary: false, secondary: true, inverted: false };
const secondaryInvertedButton = {
  primary: false,
  secondary: true,
  inverted: true,
};
const invertedButton = { primary: false, secondary: false, inverted: true };

const buttons = {
  primaryButton,
  primaryInvertedButton,
  secondaryButton,
  secondaryInvertedButton,
  invertedButton,
};

export default {
  title: 'Components/Hero',
  component: Hero,
  argTypes: {
    buttonVariant: {
      options: Object.keys(buttons),
      mapping: buttons,
      description: 'button variant options',
      control: {
        type: 'select',
        labels: {
          primaryButton: 'primary',
          primaryInvertedButton: 'primary inverted',
          secondaryButton: 'secondary',
          secondaryInvertedButton: 'secondary inverted',
          invertedButton: 'inverted',
        },
      },
      defaultValue: 'primary',
      table: {
        defaultValue: { summary: 'primary inverted' },
        type: { summary: 'string' },
      },
    },
  },
};

const Metadata = (args) => (
  <Button
    primary={args.buttonVariant.primary}
    secondary={args.buttonVariant.secondary}
    inverted={args.buttonVariant.inverted}
    as="a"
    href="/#"
    target="_blank"
  >
    {args.buttonLabel}
  </Button>
);

const Template = (args) => (
  <Hero {...args} image_url={args.image ? imgUrl : null}>
    <Hero.Text {...args}>{args.text}</Hero.Text>
    <Hero.Meta>
      <Metadata {...args} />
    </Hero.Meta>
  </Hero>
);
export const Default = Template.bind({});
Default.args = {
  fullWidth: true,
  image: true,
  quoted: true,
  text:
    'Forests are a key part of the solution to combat climate change and biodiversity loss.',
  textVariant: 'tertiary',
  textAlign: 'left',
  buttonLabel: 'Button label',
  buttonVariant: primaryInvertedButton,
  alignContent: 'center',
  backgroundVariant: 'grey',
};
Default.parameters = {
  controls: {
    exclude: [
      'fullWidth',
      'quoted',
      'textVariant',
      'textAlign',
      'alignContent',
      'backgroundVariant',
    ],
  },
};

export const Playground = Template.bind({});
Playground.args = {
  fullWidth: true,
  image: true,
  quoted: false,
  text:
    'Forests are a key part of the solution to combat climate change and biodiversity loss.',
  textVariant: 'tertiary',
  textAlign: 'left',
  buttonLabel: 'Button label',
  buttonVariant: primaryInvertedButton,
  alignContent: 'center',
  backgroundVariant: 'tertiary',
};
Playground.argTypes = {
  fullWidth: {
    description: 'Hero full width',
    table: {
      defaultValue: { summary: '"true"' },
      type: { summary: 'boolean' },
    },
  },
  image: {
    description: 'Set or unset hero image',
    table: {
      defaultValue: { summary: '"true"' },
      type: { summary: 'boolean' },
    },
  },
  quoted: {
    description: 'Add quotes to hero text',
    table: {
      category: 'Content Text',
      defaultValue: { summary: '"true"' },
      type: { summary: 'boolean' },
    },
  },
  text: {
    description: 'Hero text',
    table: {
      category: 'Content Text',
      defaultValue: { summary: '""' },
      type: { summary: 'string' },
    },
  },
  textVariant: {
    options: ['primary', 'secondary', 'tertiary', 'white'],
    description: 'Updates the text color',
    control: { type: 'select' },
    defaultValue: 'tertiary',
    table: {
      category: 'Content Text',
      defaultValue: { summary: 'tertiary' },
      type: { summary: 'string' },
    },
  },
  textAlign: {
    options: ['left', 'center', 'right'],
    description: 'Align content text',
    control: { type: 'select' },
    defaultValue: 'left',
    table: {
      category: 'Content Text',
      defaultValue: { summary: 'left' },
      type: { summary: 'string' },
    },
  },
  buttonLabel: {
    description: 'Meta button label',
    table: {
      defaultValue: { summary: '""' },
      type: { summary: 'string' },
    },
  },
  alignContent: {
    options: ['start', 'center', 'end'],
    description: 'Align content',
    control: { type: 'select' },
    defaultValue: 'center',
    table: {
      defaultValue: { summary: 'center' },
      type: { summary: 'string' },
    },
  },
  backgroundVariant: {
    options: ['primary', 'secondary', 'tertiary'],
    description: 'Updates the background color',
    control: { type: 'select' },
    defaultValue: 'tertiary',
    table: {
      defaultValue: { summary: 'tertiary' },
      type: { summary: 'string' },
    },
  },
};
