import React from 'react';
import LabeledIconGroup from './LabeledIconGroup';
// eslint-disable-next-line import/no-unresolved

export default {
  title: 'Components/Labeled Icons/Group',
  component: LabeledIconGroup,
  argTypes: {
    newTab: {
      description: 'NewTabLabeledIcon Component Contents',
      table: {
        type: { summary: 'Object' },
        defaultValue: { summary: ' "" ' },
      },
    },
    download: {
      description: 'DownloadLabeledIcon Component Contents',
      table: {
        type: { summary: 'Object' },
        defaultValue: { summary: ' "" ' },
      },
    },
    language: {
      description: 'LanguageLabeledIcon Component Contents',
      table: {
        type: { summary: 'Object' },
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
      <LabeledIconGroup.Language {...args.language}></LabeledIconGroup.Language>
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
      { linkName: 'PDF', href: '/#' },
      { linkName: 'SVG', href: '/#' },
      { linkName: 'PNG', href: '/#' },
    ],
  },
  language: {
    title: 'Repost Language',
    icon: <i class="ri-global-line"></i>,
    items: [
      { text: 'English', key: 'EN' },
      { text: 'Russian', key: 'Ru' },
      { text: 'Russian', key: 'Ru' },
      { text: 'Russian', key: 'Ru' },
      { text: 'Russian', key: 'Ru' },
      { text: 'Russian', key: 'Ru' },
    ],
  },
};
