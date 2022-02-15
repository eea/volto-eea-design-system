import React from 'react';
import Pullquote from './Pullquote';
import { Container, Image } from 'semantic-ui-react';

const IMG = 'https://react.semantic-ui.com/images/avatar/large/matthew.png';

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

export const Default = (args) => (
  <Container>
    <p>{args.content}</p>
    <Pullquote quotePosition={args.quotePosition}>
      <Pullquote.Quote>{args.quote}</Pullquote.Quote>
      <Pullquote.Author>{args.source}</Pullquote.Author>
    </Pullquote>
    <p>{args.content}</p>
    <p>{args.content}</p>
    <p>{args.content}</p>
    <p>{args.content}</p>
    <p>{args.content}</p>
  </Container>
);

Default.args = {
  quote:
    'Europe has made considerable progress over recent decades in cleaning the air that we breathe, but air pollution remains a serious problem and continues to damage our health and the environment.',
  source: 'President Juncker',
  content:
    'Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Venenatis tellus in metus vulputate eu. Sagittis id consectetur purus ut. Ultricies mi eget mauris pharetra et ultrices. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Mattis pellentesque id nibh tortor id aliquet. Amet nisl purus in mollis nunc. Quisque non tellus orci ac auctor augue mauris. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget.',
  quotePosition: 'left',
};

export const Reversed = (args) => (
  <Container>
    <p>{args.content}</p>
    <Pullquote quotePosition={args.quotePosition}>
      <Pullquote.Author>{args.source}</Pullquote.Author>
      <Pullquote.Quote>{args.quote}</Pullquote.Quote>
    </Pullquote>
    <p>{args.content}</p>
    <p>{args.content}</p>
    <p>{args.content}</p>
    <p>{args.content}</p>
    <p>{args.content}</p>
  </Container>
);

Reversed.args = {
  quote:
    'Europe has made considerable progress over recent decades in cleaning the air that we breathe, but air pollution remains a serious problem and continues to damage our health and the environment.',
  source: 'President Juncker',
  content:
    'Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Venenatis tellus in metus vulputate eu. Sagittis id consectetur purus ut. Ultricies mi eget mauris pharetra et ultrices. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Mattis pellentesque id nibh tortor id aliquet. Amet nisl purus in mollis nunc. Quisque non tellus orci ac auctor augue mauris. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget.',
  quotePosition: 'left',
};
