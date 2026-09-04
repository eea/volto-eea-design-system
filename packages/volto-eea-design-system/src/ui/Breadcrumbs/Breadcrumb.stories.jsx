import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';
import { BreadcrumbsComponent } from './Breadcrumbs';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    root: {
      description: 'home button url link',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '',
        },
      },
    },
    sections: {
      description: 'breadcrumb tabs',
      table: {
        type: {
          summary: 'Object',
        },
        defaultValue: {
          summary: ' "" ',
        },
      },
    },
  },
};

const Template = (args) => (
  <BreadcrumbsComponent root={args.root} sections={args.sections} />
);

export const Default = Template.bind({});
Default.args = {
  root: 'https://www.eea.europa.eu/',
  sections: [
    { key: 'Section 1', title: 'Section 1', href: '/#' },
    { key: 'Section 2', title: 'Section 2', href: '/#' },
    { key: 'Section 3', title: 'Section 3', href: '/#' },
  ],
};
