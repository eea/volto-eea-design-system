import React from 'react';
import { Button, Icon, Container, Segment } from 'semantic-ui-react';

export default {
  title: 'Components/Call To Action',
  component: Button,
  argTypes: {
    variant: {
      name: 'Variation',
      defaultValue: 'primary',
      options: ['default', 'primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
      description: 'call to action variation',
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: 'string' },
      },
    },
    label: {
      description: 'link label',
      table: {
        defaultValue: {
          summary: '',
        },
        type: {
          summary: 'string',
        },
      },
    },
    href: {
      description: "link's destination url",
      table: {
        defaultValue: {
          summary: '',
        },
        type: { summary: 'string' },
      },
    },
    disabled: {
      description: 'link disabled',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
  },
};

//Default Call To Action
export const Default = (args) => {
  return (
    <Container>
      <Button
        as="a"
        className={args.variant === 'default' ? '' : args.variant}
        disabled={args.disabled}
        href={args.href}
        target="_blank"
      >
        {args.label}
      </Button>
    </Container>
  );
};
Default.args = {
  variant: 'primary',
  label: 'Call To Action',
  href: '/#',
  disabled: false,
};

//Inverted Call To Action
export const Inverted = (args) => {
  return (
    <Container>
      <Segment compact className={args.variant === 'default' ? 'inverted' : ''}>
        <Button
          inverted
          as="a"
          disabled={args.disabled}
          href={args.href}
          target="_blank"
          className={args.variant === 'default' ? '' : args.variant}
        >
          {args.label}
        </Button>
      </Segment>
    </Container>
  );
};
Inverted.args = {
  variant: 'primary',
  label: 'Inverted Call To Action',
  href: '/#',
  disabled: false,
};

//Labeled Call To Action
export const Labeled = (args) => {
  return (
    <Container>
      <Button
        className={
          (args.variant === 'default' ? '' : args.variant) +
          ' icon ' +
          args.icon_position +
          ' labeled'
        }
        as="a"
        disabled={args.disabled}
        href={args.href}
        target="_blank"
      >
        {args.label}
        <Icon name={args.icon} />
      </Button>
    </Container>
  );
};
Labeled.args = {
  variant: 'primary',
  label: 'Labeled Call To Action',
  icon: 'chevron right',
  icon_position: 'right',
  href: '/#',
  disabled: false,
};
Labeled.argTypes = {
  icon: {
    name: 'icon',
    defaultValue: 'chevron right',
    options: [
      'chevron right',
      'arrow right',
      'sign-in',
      'sign-out',
      'play',
      'stop',
      'pause',
      'download',
      'upload',
      'print',
      'copy',
      'edit',
      'ellipsis',
    ],
    control: { type: 'select' },
    description: 'call to action icon',
    table: {
      defaultValue: { summary: 'chevron right' },
      type: { summary: 'string' },
    },
  },
  icon_position: {
    options: ['left', 'right'],
    control: { type: 'radio' },
    defaultValue: 'right',
    description: 'icon left or right position',
    table: {
      defaultValue: { summary: 'right' },
      type: { summary: 'string' },
    },
  },
};

//Text Button - can also play with text class
export const Link = (args) => {
  return (
    <Container>
      <a href={args.href}>{args.label}</a>
    </Container>
  );
};
Link.args = {
  label: 'Link label',
  href: '/#',
};
Link.parameters = {
  controls: { exclude: ['variant', 'disabled'] },
  hideNoControlsWarning: true,
};
