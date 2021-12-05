import { injectIntl } from 'react-intl';
import React from 'react';
import { Footer } from '@plone/volto/components';
import Wrapper from '@plone/volto/storybook';

export const Default = injectIntl(({ children, ...args }) => {
  return (
    <Wrapper location={{ pathname: '/folder2/folder21/doc212' }}>
      <Footer />
    </Wrapper>
  );
});

export default {
  title: 'Demo/Footer',
  component: Footer,
  argTypes: {},
};
