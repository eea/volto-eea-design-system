import React from 'react';
import Hero from './Hero';
import { Button } from 'semantic-ui-react';
import imgUrl from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/forest.png';

export default {
  title: 'Components/Hero',
  component: Hero,
  argTypes: {
    image: {
      description: 'Set or unset hero image',
      table: {
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
    buttonLabel: {
      description: 'Meta button label',
      table: {
        category: 'Meta Action',
        defaultValue: { summary: '""' },
        type: { summary: 'string' },
      },
    },
    buttonVariant: {
      options: ['', 'primary', 'secondary'],
      description: 'button variant options',
      control: {
        type: 'select',
        labels: {
          '': 'default',
        },
      },
      defaultValue: 'primary',
      table: {
        category: 'Meta Action',
        defaultValue: { summary: 'primary' },
        type: { summary: 'string' },
      },
    },
    inverted: {
      description: 'inverted button option',
      table: {
        category: 'Meta Action',
        defaultValue: { summary: '' },
        type: { summary: 'boolean' },
      },
    },
  },
};

const Metadata = (args) => (
  <Button
    className={args.buttonVariant}
    inverted={args.inverted}
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
    <Hero.Meta {...args}>
      <Metadata {...args} />
    </Hero.Meta>
  </Hero>
);
export const Default = Template.bind({});
Default.args = {
  fullWidth: true,
  fullHeight: true,
  image: true,
  quoted: true,
  text:
    'Forests are a key part of the solution to combat climate change and biodiversity loss.',
  textVariant: 'tertiary',
  textAlign: 'left',
  metaAlign: 'left',
  buttonLabel: 'Button label',
  buttonVariant: 'primary',
  inverted: true,
  alignContent: 'center',
  backgroundVariant: 'grey',
};
Default.parameters = {
  controls: {
    exclude: [
      'fullWidth',
      'fullHeight',
      'quoted',
      'textVariant',
      'textAlign',
      'metaAlign',
      'alignContent',
      'backgroundVariant',
    ],
  },
};

export const Playground = Template.bind({});
Playground.args = {
  fullWidth: true,
  fullHeight: true,
  image: true,
  quoted: false,
  text:
    'Forests are a key part of the solution to combat climate change and biodiversity loss.',
  textVariant: 'tertiary',
  textAlign: 'left',
  metaAlign: 'left',
  buttonLabel: 'Button label',
  buttonVariant: 'primary',
  inverted: true,
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
  fullHeight: {
    description: 'Hero full height',
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
  metaAlign: {
    options: ['left', 'center', 'right'],
    description: 'Align content text',
    control: { type: 'select' },
    defaultValue: 'left',
    table: {
      category: 'Meta Action',
      defaultValue: { summary: 'left' },
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
    options: ['primary', 'secondary', 'tertiary', 'grey'],
    description: 'Updates the background color',
    control: { type: 'select' },
    defaultValue: 'tertiary',
    table: {
      defaultValue: { summary: 'tertiary' },
      type: { summary: 'string' },
    },
  },
};
