import React from 'react';
import { Message } from 'semantic-ui-react';

export default {
  title: 'Components/Message',
  component: Message,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['mini', 'tiny', 'small', '', 'large', 'big', 'huge', 'massive'],
      description: 'message size',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: ' "" ',
        },
      },
    },
    header: {
      description: 'message heading',
      table: {
        type: {
          summary: 'custom',
        },
        defaultValue: {
          summary: ' "" ',
        },
      },
    },
    content: {
      description: 'message content',
      table: {
        type: {
          summary: 'custom',
        },
        defaultValue: {
          summary: ' "" ',
        },
      },
    },
  },
};

const Template = (args) => <Message {...args}></Message>;

export const Default = Template.bind({});
Default.args = {
  header: 'Basic Message',
  content: 'This is a basic message',
  size: 'small',
};

export const Success = Template.bind({});
Success.args = {
  content: 'This is a Success message',
  icon: 'exclamation circle',
  success: true,
  size: 'small',
};

Success.argTypes = {
  success: {
    description: 'message may be formatted to display a positive message',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
  },
};
Success.parameters = {
  controls: {
    exclude: ['icon', 'success'],
    hideNoControlsWarning: true,
  },
};

export const Warning = Template.bind({});
Warning.args = {
  header: 'Warning message',
  content: 'This is a Warning message',
  icon: 'exclamation circle',
  warning: true,
  size: 'small',
};

Warning.argTypes = {
  warning: {
    description: 'message may be formatted to display warning messages',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
  },
};
Warning.parameters = {
  controls: {
    exclude: ['icon', 'warning'],
    hideNoControlsWarning: true,
  },
};

export const Error = Template.bind({});
Error.args = {
  header: 'Error Message',
  content: 'This is an Error message',
  icon: 'exclamation circle',
  error: true,
  size: 'small',
};
Error.argTypes = {
  error: {
    description: 'message may be formatted to display an error message',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
  },
};
Error.parameters = {
  controls: {
    exclude: ['icon', 'error'],
    hideNoControlsWarning: true,
  },
};

export const Info = Template.bind({});
Info.args = {
  header: 'Info Message',
  content: 'This is an Info message',
  icon: 'exclamation circle',
  info: true,
  size: 'small',
};
Info.argTypes = {
  info: {
    description: 'message may be formatted to display information',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
  },
};
Info.parameters = {
  controls: {
    exclude: ['icon', 'info'],
    hideNoControlsWarning: true,
  },
};
