import React from 'react';
import Wrapper from '@plone/volto/storybook';
import LogoEEA from './Logo';

export default {
  title: 'Components/Logo',
  component: LogoEEA,
  argTypes: {},
};

export const Logo = (args) => {
  return (
    <Wrapper location={{ pathname: '/folder2/folder21/doc212' }}>
      <LogoEEA {...args} />
    </Wrapper>
  );
};
Logo.args = {};
