import React from 'react';
import Header from './Header';
//import { Segment } from 'semantic-ui-react';
import Wrapper from '@plone/volto/storybook';

export default {
  title: 'Layout/Header',
  cocmponent: Header,
  argTypes: {},
  decorators: [
    (Story) => (
      <Wrapper location={{ pathname: '/folder2/folder21/doc212' }}>
        <>
          <Story />
        </>
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
