import React from 'react';
import { Header, Divider, Container } from 'semantic-ui-react';
import ContentBox from '../ContentBox/ContentBox';

export default {
  title: 'Components/Underlined title',
  component: Divider,
  argTypes: {
    tag: {
      name: 'Tag',
      defaultValue: 'h2',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
      description: 'Heading HTML tag',
      table: {
        defaultValue: { summary: 'h2' },
        type: { summary: 'string' },
      },
    },
    title: {
      description: 'Title text',
      table: {
        defaultValue: {
          summary: '',
        },
        type: {
          summary: 'string',
        },
      },
    },
    bordered: {
      description: 'Bottom border for title',
      table: {
        defaultValue: { summary: 'true' },
        type: { summary: 'boolean' },
      },
    },
    white: {
      name: 'White title',
      description: 'Bottom border for title',
      table: {
        category: 'Backgound variants',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    variant: {
      name: 'Background variation',
      defaultValue: 'tertiary',
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
      description: 'Color variation',
      table: {
        category: 'Backgound variants',
        defaultValue: { summary: 'tertiary' },
        type: { summary: 'string' },
      },
      if: { arg: 'white' },
    },
  },
};

export const Default = (args) => {
  return (
    <ContentBox variant={`${args.white ? args.variant : 'default'}`}>
      <Container className="content-box-inner">
        <Header
          as={args.tag}
          className={`${args.white ? 'white' : args.variation} ${
            args.bordered ? 'bordered' : ''
          }`}
        >
          {args.title}
        </Header>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link
          mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
          semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
          porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
          dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
          ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
          ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        </p>
      </Container>
    </ContentBox>
  );
};
Default.args = {
  tag: 'h2',
  title: 'At a glance',
  bordered: true,
  variation: 'tertiary',
  white: false,
};
