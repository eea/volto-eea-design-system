import React from 'react';
import LabeledIconGroup from './LabeledIconGroup';
// eslint-disable-next-line import/no-unresolved

export default {
  title: 'Components/Labeled Icons/Group',
  component: LabeledIconGroup,
  argTypes: {
    tab: {
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
      <LabeledIconGroup.NewTab {...args.tab}>
        {args.tab.label}
      </LabeledIconGroup.NewTab>
      <LabeledIconGroup.Language {...args.language}></LabeledIconGroup.Language>
    </LabeledIconGroup>
  </div>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  tab: {
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
    label: 'Language',
    icon: <i className="ri-global-line"></i>,
    items: [
      { name: 'English', code: 'en' },
      { name: 'eesti', code: 'et' },
      { name: 'Suomi', code: 'fi' },
      { name: 'Français', code: 'fr' },
      { name: 'Deutsch', code: 'de' },
      { name: 'magyar', code: 'hu' },
    ],
  },
};
