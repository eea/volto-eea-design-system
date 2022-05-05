import React from 'react';
import { Button, Icon, Container, Segment } from 'semantic-ui-react';

export default {
  title: 'Components/Call To Action',
  component: Button,
  argTypes: {
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
      <Button as="a" disabled={args.disabled} href={args.href} target="_blank">
        {args.label}
      </Button>
    </Container>
  );
};
Default.args = {
  label: 'Default Call To Action',
  href: '/#',
  disabled: false,
};

//Primary Call To Action
export const Primary = (args) => {
  return (
    <Container>
      <Button
        primary
        as="a"
        disabled={args.disabled}
        href={args.href}
        target="_blank"
      >
        {args.label}
      </Button>
    </Container>
  );
};
Primary.args = {
  label: 'Primary Call To Action',
  href: '/#',
  disabled: false,
};

//Secondary Call To Action
export const Secondary = (args) => {
  return (
    <Container>
      <Button
        secondary
        as="a"
        disabled={args.disabled}
        href={args.href}
        target="_blank"
      >
        {args.label}
      </Button>
    </Container>
  );
};
Secondary.args = {
  label: 'Secondary Call To Action',
  href: '/#',
  disabled: false,
};

//Inverted Call To Action
export const Inverted = (args) => {
  return (
    <Container>
      <Segment compact>
        <Button
          primary
          inverted
          as="a"
          disabled={args.disabled}
          href={args.href1}
          target="_blank"
        >
          {args.button1}
        </Button>
      </Segment>
      <Segment compact>
        <Button
          secondary
          inverted
          as="a"
          disabled={args.disabled}
          href={args.href2}
          target="_blank"
        >
          {args.button2}
        </Button>
      </Segment>
      <Segment inverted compact>
        <Button
          inverted
          as="a"
          disabled={args.disabled}
          href={args.href3}
          target="_blank"
        >
          {args.button3}
        </Button>
      </Segment>
    </Container>
  );
};
Inverted.args = {
  button1: 'Primary Call To Action',
  button2: 'Secondary Call To Action',
  button3: 'Default Call To Action',
  href1: '/#',
  href2: '/#',
  href3: '/#',
  disabled: false,
};
Inverted.parameters = {
  controls: { exclude: ['label', 'href'] },
  hideNoControlsWarning: true,
};

//Labeled Call To Action
export const Labeled = (args) => {
  return (
    <Container>
      <Button
        className={args.variant + ' icon ' + args.icon_position + ' labeled'}
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
  label: 'Labeled Call To Action',
  icon: 'chevron right',
  href: '/#',
  disabled: false,
};
Labeled.argTypes = {
  variant: {
    options: ['primary', 'secondary', 'default'],
    description: 'call to action class',
    control: { type: 'radio' },
    defaultValue: 'secondary',
    table: {
      defaultValue: { summary: 'secondary' },
      type: { summary: 'string' },
    },
  },
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
    defaultValue: 'left',
    description: 'icon left or right position',
    table: {
      defaultValue: { summary: 'left' },
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
  hideNoControlsWarning: true,
};
