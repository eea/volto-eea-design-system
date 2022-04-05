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
    metadata: {
      description: 'quote metadata',
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
      <Pullquote.Metadata>{args.metadata}</Pullquote.Metadata>
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
    'Nulla viverra magna curabitur leo nisl scelerisque. Velit fusce sed sem ut. Molestie fermentum congue nunc cras posuere orci. Duis eu ultrices nisi, est a pellentesque eget tellus mauris. Amet, tortor quis pellentesque suspendisse convallis lacinia. Aliquam.',
  source: 'Arthur Abbott',
  metadata: 'EEA Analyst',
  content:
    'Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Venenatis tellus in metus vulputate eu. Sagittis id consectetur purus ut. Ultricies mi eget mauris pharetra et ultrices. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Mattis pellentesque id nibh tortor id aliquet. Amet nisl purus in mollis nunc. Quisque non tellus orci ac auctor augue mauris. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget.',
  quotePosition: 'left',
};

export const Reversed = (args) => (
  <Container>
    <p>{args.content}</p>
    <Pullquote quotePosition={args.quotePosition}>
      <Pullquote.Author>{args.source}</Pullquote.Author>
      <Pullquote.Metadata>{args.metadata}</Pullquote.Metadata>
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
    'Nulla viverra magna curabitur leo nisl scelerisque. Velit fusce sed sem ut. Molestie fermentum congue nunc cras posuere orci. Duis eu ultrices nisi, est a pellentesque eget tellus mauris. Amet, tortor quis pellentesque suspendisse convallis lacinia. Aliquam.',
  source: 'Arthur Abbott',
  metadata: 'EEA Analyst',
  content:
    'Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Venenatis tellus in metus vulputate eu. Sagittis id consectetur purus ut. Ultricies mi eget mauris pharetra et ultrices. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Mattis pellentesque id nibh tortor id aliquet. Amet nisl purus in mollis nunc. Quisque non tellus orci ac auctor augue mauris. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget.',
  quotePosition: 'left',
};
