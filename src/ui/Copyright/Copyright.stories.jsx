import React from 'react';
import Copyright from './Copyright';
import { Container, Icon, Segment } from 'semantic-ui-react';

export default {
  title: 'Components/Copyright',
  component: Copyright,
  argTypes: {
    copyrightPosition: {
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
        <Copyright.Prefix>{args.copyrightPrefix}</Copyright.Prefix>
        <Copyright.Icon>
          <Icon className={args.copyrightIcon} />
        </Copyright.Icon>
        <Copyright.Text>{args.copyright}</Copyright.Text>
      </Copyright>
    </Segment>
  </Container>
);

Default.args = {
  copyrightPosition: 'left',
  copyrightPrefix: 'Image',
  copyrightIcon: 'ri-copyright-line',
  copyright: 'John Smith, Well with Nature /EEA',
};
