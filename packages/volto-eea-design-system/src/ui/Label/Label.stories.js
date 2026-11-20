import React from 'react';
import { Label, Container, Image, Segment } from 'semantic-ui-react';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    pointing: {
      control: { type: 'inline-radio' },
      options: [false, true, 'below', 'left', 'right'],
      description: 'a label can point to content next to it',
      table: {
        type: {
          summary: 'boolean | string',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    content: {
      description: 'primary content',
      table: {
        type: {
          summary: 'custom',
        },
        defaultValue: {
          summary: '',
        },
      },
    },
    importance: {
      control: { type: 'inline-radio' },
      defaultValue: null,
      options: [null, 'low', 'medium', 'high', 'highlight'],
      description: 'label class name for style',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '',
        },
      },
    },
  },
};

const Template = (args) => (
  <Container>
    <Label {...args} className={args.importance ? args.importance : ''}></Label>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  content: 'Label',
  pointing: false,
  importance: null,
};

export const Ribbon = (args) => (
  <Container>
    <Segment raised>
      <Label
        as="a"
        href={args.link}
        ribbon
        className={args.importance ? args.importance : ''}
        {...args}
      ></Label>
      <br />
      <br />
      <Image
        src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
        alt="paragraph"
      ></Image>
    </Segment>
  </Container>
);

Ribbon.args = {
  content: 'Ribbon Label',
  importance: null,
};

Ribbon.parameters = {
  controls: { exclude: ['pointing'] },
  hideNoControlsWarning: true,
};

export const Corner = (args) => (
  <Container>
    <Image
      src="https://react.semantic-ui.com/images/wireframe/image.png"
      label={{
        corner: 'right',
        icon: 'save',
        className: `${args.importance ? args.importance : ''}`,
      }}
      size="medium"
      alt="image"
    ></Image>
  </Container>
);

Corner.args = {
  importance: null,
};

Corner.parameters = {
  controls: { exclude: ['pointing', 'content'] },
  hideNoControlsWarning: true,
};

export const Basic = (args) => (
  <Container>
    <Label
      {...args}
      className={args.importance ? args.importance : ''}
      basic
      as="a"
    ></Label>
  </Container>
);

Basic.args = {
  content: 'Basic Label',
  pointing: false,
  importance: null,
};
