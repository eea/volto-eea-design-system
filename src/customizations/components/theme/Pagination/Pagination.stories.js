import React from 'react';
import { Pagination } from 'semantic-ui-react';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {},
};

const Template = (args) => <Pagination className="eeaPagination" {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   defaultActivePage: 5,
//   totalPages: 10,
// };

export const Default = Template.bind({});
Default.args = {
  defaultActivePage: 5,
  totalPages: 10,
  disabled: false,
  boundaryRange: 0,
  siblingRange: 1,
};
