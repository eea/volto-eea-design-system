import React from 'react';
import Copyright from './Copyright';
import { Container, Icon, Segment } from 'semantic-ui-react';

export default {
  title: 'Components/Copyright',
  component: Copyright,
  argTypes: {
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
    <Segment className={'inverted'}>
      <Copyright copyrightPosition={args.copyrightPosition}>
        <Copyright.Prefix>{args.prefix}</Copyright.Prefix>
        <Copyright.Icon>
          <Icon className={args.icon} />
        </Copyright.Icon>
        <Copyright.Text>{args.text}</Copyright.Text>
      </Copyright>
    </Segment>
  </Container>
);

Default.args = {
  copyrightPosition: 'left',
  prefix: 'Image',
  icon: 'ri-copyright-line',
  text: 'John Smith, Well with Nature /EEA',
};
