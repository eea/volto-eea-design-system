import React from 'react';
import Map from './Map';

export default {
  title: 'Components/Visualizations/Map',
  component: Map,
  // argTypes: {
  //   image: {
  //     description: 'Set or unset hero image',
  //     table: {
  //       defaultValue: { summary: '"true"' },
  //       type: { summary: 'boolean' },
  //     },
  //   },
  //   text: {
  //     description: 'Hero text',
  //     table: {
  //       category: 'Content Text',
  //       defaultValue: { summary: '""' },
  //       type: { summary: 'string' },
  //     },
  //   },
  //   buttonLabel: {
  //     description: 'Meta button label',
  //     table: {
  //       category: 'Meta Action',
  //       defaultValue: { summary: '""' },
  //       type: { summary: 'string' },
  //     },
  //   },
  //   buttonVariant: {
  //     options: ['', 'primary', 'secondary'],
  //     description: 'button variant options',
  //     control: {
  //       type: 'select',
  //       labels: {
  //         '': 'default',
  //       },
  //     },
  //     defaultValue: 'primary',
  //     table: {
  //       category: 'Meta Action',
  //       defaultValue: { summary: 'primary' },
  //       type: { summary: 'string' },
  //     },
  //   },
  //   inverted: {
  //     description: 'inverted button option',
  //     table: {
  //       category: 'Meta Action',
  //       defaultValue: { summary: '' },
  //       type: { summary: 'boolean' },
  //     },
  //   },
  //   has_copyright: {
  //     name: 'Copyright',
  //     table: {
  //       category: 'Copyright',
  //       defaultValue: { summary: '' },
  //       type: { summary: 'boolean' },
  //     },
  //   },
  //   copyrightPosition: {
  //     name: 'Position',
  //     control: {
  //       type: 'inline-radio',
  //       options: ['left', 'right'],
  //     },
  //     type: { name: 'string' },
  //     table: {
  //       category: 'Copyright',
  //       defaultValue: { summary: '"left"' },
  //     },
  //   },
  //   copyrightIcon: {
  //     table: {
  //       category: 'Copyright',
  //       defaultValue: { summary: '""' },
  //       type: { summary: 'string' },
  //     },
  //   },
  //   copyrightText: {
  //     table: {
  //       category: 'Copyright',
  //       defaultValue: { summary: '""' },
  //       type: { summary: 'string' },
  //     },
  //   },
  // },
};

const Template = (args) => <Map />;
export const Default = Template.bind({});
Default.args = {
  fullWidth: true,
  fullHeight: true,
  image: true,
  quoted: true,
  text:
    'Forests are a key part of the solution to combat climate change and biodiversity loss.',
  textVariant: 'tertiary',
  textAlign: 'left',
  metaAlign: 'left',
  buttonLabel: 'Button label',
  buttonVariant: 'primary',
  inverted: true,
  alignContent: 'center',
  backgroundVariant: 'grey',

  has_copyright: true,
  copyrightPosition: 'left',
  copyrightIcon: 'ri-copyright-line',
  copyrightText: 'Image copyright: Velit fusce sed sem ut.',
};
Default.parameters = {
  controls: {
    exclude: [
      'fullWidth',
      'fullHeight',
      'quoted',
      'textVariant',
      'textAlign',
      'metaAlign',
      'alignContent',
      'backgroundVariant',
    ],
  },
};

export const Playground = Template.bind({});
Playground.args = {
  fullWidth: true,
  fullHeight: true,
  image: true,
  quoted: false,
  text:
    'Forests are a key part of the solution to combat climate change and biodiversity loss.',
  textVariant: 'tertiary',
  textAlign: 'left',
  metaAlign: 'left',
  buttonLabel: 'Button label',
  buttonVariant: 'primary',
  inverted: true,
  alignContent: 'center',
  backgroundVariant: 'tertiary',

  has_copyright: true,
  copyrightPosition: 'left',
  copyrightIcon: 'ri-copyright-line',
  copyrightText: 'Image copyright: Velit fusce sed sem ut.',
};
Playground.argTypes = {
  fullWidth: {
    description: 'Hero full width',
    table: {
      defaultValue: { summary: '"true"' },
      type: { summary: 'boolean' },
    },
  },
  fullHeight: {
    description: 'Hero full height',
    table: {
      defaultValue: { summary: '"true"' },
      type: { summary: 'boolean' },
    },
  },
  quoted: {
    description: 'Add quotes to hero text',
    table: {
      category: 'Content Text',
      defaultValue: { summary: '"true"' },
      type: { summary: 'boolean' },
    },
  },
  textVariant: {
    options: ['primary', 'secondary', 'tertiary', 'white'],
    description: 'Updates the text color',
    control: { type: 'select' },
    defaultValue: 'tertiary',
    table: {
      category: 'Content Text',
      defaultValue: { summary: 'tertiary' },
      type: { summary: 'string' },
    },
  },
  textAlign: {
    options: ['left', 'center', 'right'],
    description: 'Align content text',
    control: { type: 'select' },
    defaultValue: 'left',
    table: {
      category: 'Content Text',
      defaultValue: { summary: 'left' },
      type: { summary: 'string' },
    },
  },
  metaAlign: {
    options: ['left', 'center', 'right'],
    description: 'Align content text',
    control: { type: 'select' },
    defaultValue: 'left',
    table: {
      category: 'Meta Action',
      defaultValue: { summary: 'left' },
      type: { summary: 'string' },
    },
  },
  alignContent: {
    options: ['start', 'center', 'end'],
    description: 'Align content',
    control: { type: 'select' },
    defaultValue: 'center',
    table: {
      defaultValue: { summary: 'center' },
      type: { summary: 'string' },
    },
  },
  backgroundVariant: {
    options: ['primary', 'secondary', 'tertiary', 'grey'],
    description: 'Updates the background color',
    control: { type: 'select' },
    defaultValue: 'tertiary',
    table: {
      defaultValue: { summary: 'tertiary' },
      type: { summary: 'string' },
    },
  },
  copyrightPosition: {
    name: 'Position',
    control: {
      type: 'inline-radio',
      options: ['left', 'right'],
    },
    type: { name: 'string' },
    table: {
      category: 'Copyright',
      defaultValue: { summary: '"left"' },
    },
  },
  copyrightIcon: {
    table: {
      category: 'Copyright',
      defaultValue: { summary: '""' },
      type: { summary: 'string' },
    },
  },
  copyrightText: {
    table: {
      category: 'Copyright',
      defaultValue: { summary: '""' },
      type: { summary: 'string' },
    },
  },
};
