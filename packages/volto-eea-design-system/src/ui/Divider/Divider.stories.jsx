import React from 'react';
import { Divider, Container } from 'semantic-ui-react';

export default {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {
    theme: {
      options: ['default', 'primary', 'secondary', 'tertiary'],
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
    fitted: {
      description: 'Remove space above or below the divider',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    content: {
      description: 'Horizontal divider content',
      table: {
        type: {
          summary: 'string | object',
        },
        defaultValue: {
          summary: '',
        },
      },
    },
  },
};

function Template({ hidden, theme, section, short, fitted }) {
  return (
    <Container>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede link mollis.
      </p>
      <Divider
        hidden={hidden}
        section={section}
        className={`${theme === 'default' ? '' : theme} ${
          short ? 'short' : ''
        }`}
        fitted={fitted}
      />
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede link mollis.
      </p>
    </Container>
  );
}

export const Default = Template.bind({});
Default.args = {
  theme: 'default',
  hidden: false,
  section: false,
  short: false,
  fitted: false,
};
Default.parameters = {
  controls: { exclude: ['content'] },
  hideNoControlsWarning: true,
};

function DividerWithContentTemplate({ content, theme, section, fitted }) {
  return (
    <Container>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede link mollis.
      </p>
      <Divider
        horizontal
        section={section}
        className={`${theme === 'default' ? '' : theme}`}
        fitted={fitted}
      >
        <div>{content}</div>
      </Divider>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede link mollis.
      </p>
    </Container>
  );
}

export const DividerWithContent = DividerWithContentTemplate.bind({});
DividerWithContent.args = {
  content: 'Divider Content',
  theme: 'default',
  section: false,
  fitted: false,
};
DividerWithContent.parameters = {
  controls: { exclude: ['short', 'hidden'] },
  hideNoControlsWarning: true,
};
