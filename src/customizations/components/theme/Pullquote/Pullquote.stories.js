import React from 'react';
import Pullquote from './Pullquote';
import { Container } from 'semantic-ui-react';

export default {
  title: 'Components/Pullquote',
  component: Pullquote,
  argTypes: {
    quote: {
      description: 'Pullquote content',
      type: { name: 'string' },
      table: {
        defaultValue: { summary: '""' },
      },
    },
    source: {
      description: 'source of quote',
      type: { name: 'string' },
      table: {
        defaultValue: { summary: '""' },
      },
    },
    content: {
      description: 'content that quote floats around',
      type: { name: 'string' },
      table: {
        defaultValue: { summary: '""' },
      },
    },
    quotePosition: {
      control: {
        type: 'inline-radio',
        options: ['left', 'right', 'none', 'inherit'],
      },
      description: 'direction that quote floats to',
      type: { name: 'string' },
      table: {
        defaultValue: { summary: '""' },
      },
    },
  },
};

const Template = (args) => (
  <Container>
    <Pullquote {...args}></Pullquote>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  quote:
    'Europe has made considerable progress over recent decades in cleaning the air that we breathe, but air pollution remains a serious problem and continues to damage our health and the environment.',
  source: 'President Juncker',
  content:
    'Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Venenatis tellus in metus vulputate eu. Sagittis id consectetur purus ut. Ultricies mi eget mauris pharetra et ultrices. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Mattis pellentesque id nibh tortor id aliquet. Amet nisl purus in mollis nunc. Quisque non tellus orci ac auctor augue mauris. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget.',
  quotePosition: 'left',
};
