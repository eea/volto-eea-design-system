import React from 'react';
import { Header, Container } from 'semantic-ui-react';

export default {
  title: 'Components/Heading',
  component: Header,
  argTypes: {
    variation: {
      name: 'Heading variation',
      defaultValue: 'tertiary',
      options: ['primary', 'secondary', 'tertiary', 'black'],
      control: { type: 'select' },
      description: 'Text color variation',
      table: {
        defaultValue: { summary: 'tertiary' },
        type: { summary: 'string' },
      },
    },
  },
};

const Template = (args) => (
  <Container className={'color-fg-' + args.variation}>
    <h1>Heading 1</h1>
    <h1>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis arcu
      egestas ultrices mollis.
    </h1>
    <hr></hr>
    <h2>Heading 2</h2>
    <h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis arcu
      egestas ultrices mollis.
    </h2>
    <hr></hr>
    <h3>Heading 3</h3>
    <h3>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis arcu
      egestas ultrices mollis.
    </h3>
    <hr></hr>
    <h4>Heading 4</h4>
    <h4>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis arcu
      egestas ultrices mollis.
    </h4>
    <hr></hr>
    <h5>Heading 5</h5>
    <h5>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis arcu
      egestas ultrices mollis.
    </h5>
    <hr></hr>
    <h6>Heading 6</h6>
    <h6>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis arcu
      egestas ultrices mollis.
    </h6>
  </Container>
);

export const Default = Template.bind({});
