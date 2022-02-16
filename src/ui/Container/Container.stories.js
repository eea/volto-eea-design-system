import React from 'react';
import { Container } from 'semantic-ui-react';

export default {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    textAlign: {
      control: { type: 'inline-radio' },
      options: ['left', 'right', 'center', 'justified'],
      description: 'align container text',
      table: {
        type: {
          summary: 'text',
        },
        defaultValue: {
          summary: 'left',
        },
      },
    },
    content: {
      description: 'container content',
      table: {
        type: {
          summary: 'object',
        },
        defaultValue: {
          summary: ' "" ',
        },
      },
    },
  },
};

const content = (
  <p>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
    ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
    magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
    ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
    quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
    arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
    dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus.
    Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo
    ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
    ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
    ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies
    nisi vel augue. Curabitur ullamcorper ultricies nisi.
  </p>
);

const Template = (args) => (
  <Container className="eea-container" {...args}></Container>
);

export const Default = Template.bind({});
Default.args = {
  content: content,
};
