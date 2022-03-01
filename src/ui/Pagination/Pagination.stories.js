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
  argTypes: {
    defaultActivePage: {
      description: 'Initial activePage value',
      table: {
        type: {
          summary: 'number|string',
        },
        defaultValue: {
          summary: ' "" ',
        },
      },
    },
    totalPages: {
      description: 'total number of pages',
      table: {
        type: {
          summary: 'number|string',
        },
        required: true,
        defaultValue: {
          summary: ' "" ',
        },
      },
    },
    disabled: {
      description: 'pagination can be disabled',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    boundaryRange: {
      description: 'number of always visible pages at the beginning and end',
      table: {
        type: {
          summary: 'number|string',
        },
        defaultValue: {
          summary: 1,
        },
      },
    },
    siblingRange: {
      description:
        'number of always visible pages before and after the current one',
      table: {
        type: {
          summary: 'number|string',
        },
        defaultValue: {
          summary: 1,
        },
      },
    },
  },
};

const Template = (args) => <Pagination pointing secondary {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultActivePage: 5,
  totalPages: 10,
  disabled: false,
  boundaryRange: 1,
  siblingRange: 1,
};
