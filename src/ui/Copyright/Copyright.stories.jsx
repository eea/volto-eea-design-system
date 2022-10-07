import React from 'react';
import Copyright from './Copyright';
import { Container, Icon, Segment } from 'semantic-ui-react';

export default {
  title: 'Components/Copyright',
  component: Copyright,
  argTypes: {
    colorVariant: {
      name: 'Variation',
      defaultValue: 'default',
      options: ['default', 'primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'default' },
        type: { summary: 'string' },
      },
    },
    copyrightPosition: {
      name: 'Position',
      control: {
        type: 'inline-radio',
        options: ['left', 'right'],
      },
      type: { name: 'string' },
      table: {
        defaultValue: { summary: '"left"' },
      },
    },
  },
};

export const Default = (args) => (
  <Container>
    <Segment inverted>
      <Copyright
        copyrightPosition={args.copyrightPosition}
        colorVariant={args.colorVariant}
      >
        <Copyright.Icon>
          <Icon className={args.icon} />
        </Copyright.Icon>
        <Copyright.Text>{args.text}</Copyright.Text>
      </Copyright>
    </Segment>
  </Container>
);

Default.args = {
  colorVariant: 'default',
  copyrightPosition: 'left',
  icon: 'ri-copyright-line',
  text: 'Image copyright: Velit fusce sed sem ut.',
};
