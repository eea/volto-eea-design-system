import React from 'react';
import { Header } from '@plone/volto/components';
import { Segment } from 'semantic-ui-react';
import Wrapper from '@plone/volto/storybook';

export default {
  title: 'Demo/Header',
  cocmponent: Header,
  argTypes: {},
  decorators: [
    (Story) => (
      <Wrapper location={{ pathname: '/folder2/folder21/doc212' }}>
        <Segment className="portal-footer">
          <Story />
        </Segment>
      </Wrapper>
    ),
  ],
};

// export const Default = injectIntl(({ children, ...args }) => {
//     return (
//       <Wrapper location={{ pathname: '/folder2/folder21/doc212' }}>
//         <Segment className="portal-footer">
//           <Header />
//         </Segment>
//       </Wrapper>
//     );
//   });

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
