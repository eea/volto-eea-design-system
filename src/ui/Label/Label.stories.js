import React from 'react';
import { Label, Container } from 'semantic-ui-react';

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
  },
};

const Template = (args) => (
  <Container>
    <Label {...args}></Label>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  content: 'Label',
  pointing: false,
};

export const MediumImportance = (args) => (
  <Container>
    <Label className="medium" {...args}></Label>
  </Container>
);
MediumImportance.args = {
  content: 'Label',
  pointing: false,
};

export const HighImportance = (args) => (
  <Container>
    <Label className="high" {...args}></Label>
  </Container>
);
HighImportance.args = {
  content: 'Label',
  pointing: false,
};

export const Highlight = (args) => (
  <Container>
    <Label className="highlight" {...args}></Label>
  </Container>
);
Highlight.args = {
  content: 'Label',
  pointing: false,
};
