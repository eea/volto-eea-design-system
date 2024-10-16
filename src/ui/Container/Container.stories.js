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
    containerWidth: {
      control: {
        type: 'inline-radio',
        labels: {
          narrow_width: 'Narrow',
          container_width: 'Default',
          wide_width: 'Wide',
        },
      },
      options: ['narrow_width', 'container_width', 'wide_width'],
      description: 'Container width',
      table: {
        type: {
          summary: 'text',
        },
        defaultValue: {
          summary: 'container_width',
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

const Template = (args) => {
  const { containerWidth, ...options } = args;
  return (
    <>
      <div id={'main'}>
        <Container
          id={'page-document'}
          {...options}
          className={containerWidth || 'container_width'}
        ></Container>
      </div>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  content: content,
};
