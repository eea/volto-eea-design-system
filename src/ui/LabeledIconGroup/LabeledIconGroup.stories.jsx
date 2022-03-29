import React from 'react';
import LabeledIconGroup from './LabeledIconGroup';
// eslint-disable-next-line import/no-unresolved

export default {
  title: 'Components/Labeled Icons/Group',
  component: LabeledIconGroup,
  argTypes: {
    newTabLabel: {
      description: 'New Tab Label',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'string' },
      },
    },
    newTabLink: {
      description: 'New Tab Link',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'string' },
      },
    },
    newTabIcon: {
      description: 'New Tab Icon',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'string' },
      },
    },
    downloadLabel: {
      description: 'Download Label',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'string' },
      },
    },
    downloadIcon: {
      description: 'Download Icon',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'string' },
      },
    },
    downloadLinks: {
      description: 'array of list content',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: ' "" ' },
      },
    },
  },
};

const DefaultTemplate = (args) => (
  <div>
    <LabeledIconGroup {...args}>
      <LabeledIconGroup.Download {...args.download}></LabeledIconGroup.Download>
      <LabeledIconGroup.NewTab {...args.newTab}>
        {args.newTab.label}
      </LabeledIconGroup.NewTab>
    </LabeledIconGroup>
  </div>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  newTab: {
    label: 'Open in new Tab',
    link: '/#',
    icon: 'ri-share-box-fill',
  },
  download: {
    label: 'Download',
    icon: 'ri-download-2-fill',
    downloadIcon: 'ri-download-2-fill',
    links: [
      { linkName: 'PDF', href: '#' },
      { linkName: 'SVG', href: '#' },
      { linkName: 'PNG', href: '#' },
    ],
  },
};
