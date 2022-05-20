import React from 'react';
import { Divider, Container } from 'semantic-ui-react';

export default {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {
    color: {
      options: ['default', 'green', 'primary', 'secondary'],
      control: { type: 'select' },
      description: 'Variations of the divider',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'default',
        },
      },
    },
    section: {
      description:
        'A divider can provide greater margins to divide sections of content.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    hidden: {
      description:
        'A hidden divider divides content without creating a dividing line',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    short: {
      description: 'Shot divider',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    clean: {
      description: 'Remove margins from divider',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

function Template({ hidden, color, section, short, clean }) {
  return (
    <Container>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede link mollis pretium.
      </p>
      <Divider
        hidden={hidden}
        section={section}
        className={`${color === 'default' ? '' : color} ${
          short ? 'short' : ''
        } ${clean ? 'clean' : ''}`}
      />
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede link mollis pretium.
      </p>
    </Container>
  );
}

export const Default = Template.bind({});
Default.args = {
  color: 'default',
  hidden: false,
  section: false,
  short: false,
  clean: false,
};
