import React from 'react';
import { Label } from 'semantic-ui-react';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    pointing: {
      control: { type: 'inline-radio' },
      options: [false, true, 'below', 'left', 'right'],
      description: 'a label can point to content next to it',
      table: {
        type: {
          summary: 'boolean | string',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    content: {
      description: 'primary content',
      table: {
        type: {
          summary: 'custom',
        },
        defaultValue: {
          summary: '',
        },
      },
    },
  },
};

const Template = (args) => <Label {...args}></Label>;

export const LowImportance = Template.bind({});
LowImportance.args = {
  content: 'Label',
  pointing: false,
};

export const MediumImportance = (args) => (
  <Label className="medium-label" {...args}></Label>
);
MediumImportance.args = {
  content: 'Label',
  pointing: false,
};

export const HighImportance = (args) => (
  <Label className="high-label" {...args}></Label>
);
HighImportance.args = {
  content: 'Label',
  pointing: false,
};

export const Highlight = (args) => (
  <Label className="highlight-label" {...args}></Label>
);
Highlight.args = {
  content: 'Label',
  pointing: false,
};
// export const Default = Template.bind({});
// Default.args = {
//   children: ['Label'],
// };

// export const Playground = Template.bind({});
// Playground.args = {
//   children: ['Label'],
//   color: 'blue',
//   pointing: true,
//   tag: false,
//   ribbon: false,
//   floating: false,
//   attached: 'top left',
// };

// Playground.argTypes = {
//   color: {
//     description: 'color of the label',
//     table: {
//       type: {
//         summary: 'string',
//       },
//       defaultValue: {
//         summary: '',
//       },
//     },
//   },
//   tag: {
//     description: 'a label can appear as a tag',
//     table: {
//       type: {
//         summary: 'boolean',
//       },
//       defaultValue: {
//         summary: false,
//       },
//     },
//   },
//   ribbon: {
//     description:
//       'a label can appear as a ribbon attaching itself to an element',
//     table: {
//       type: {
//         summary: 'boolean | string',
//       },
//       defaultValue: {
//         summary: '',
//       },
//     },
//   },
//   floating: {
//     description: 'float above another element in the upper right corner',
//     table: {
//       type: {
//         summary: 'boolean',
//       },
//       defaultValue: {
//         summary: false,
//       },
//     },
//   },
// };

// export const Link = Template.bind({});
// Link.args = {
//   children: ['Label'],
//   as: 'a',
//   href: 'https://react.semantic-ui.com/elements/label/#types-basic',
//   color: 'blue',
// };

// Link.argTypes = {
//   as: {
//     description: 'an element type to render as (string or function)',
//     table: {
//       type: {
//         summary: 'elementType',
//       },
//       defaultValue: {
//         summary: '',
//       },
//     },
//   },
//   href: {
//     description: 'link url',
//     table: {
//       type: {
//         summary: 'string',
//       },
//       defaultValue: {
//         summary: '',
//       },
//     },
//   },
//   color: {
//     description: 'color of the label',
//     table: {
//       type: {
//         summary: 'string',
//       },
//       defaultValue: {
//         summary: '',
//       },
//     },
//   },
// };
