import { injectIntl } from 'react-intl';
import React from 'react';
import { Footer } from '@plone/volto/components';
import { Segment } from 'semantic-ui-react';
import Wrapper from '@plone/volto/storybook';

export const Default = injectIntl(({ children, ...args }) => {
  return (
    <Wrapper location={{ pathname: '/folder2/folder21/doc212' }}>
      <Segment className="portal-footer">
        <Footer />
      </Segment>
    </Wrapper>
  );
});

export default {
  title: 'Layout/Footer',
  component: Footer,
  argTypes: {},
};
