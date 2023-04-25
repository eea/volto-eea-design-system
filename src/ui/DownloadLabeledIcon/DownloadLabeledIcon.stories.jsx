import React from 'react';
import { Button } from 'semantic-ui-react';
import DownloadLabeledIcon from './DownloadLabeledIcon';
import LabeledIconGroup from '../LabeledIconGroup/LabeledIconGroup';

export default {
  title: 'Components/Labeled Icons/Download',
  component: DownloadLabeledIcon,
  argTypes: {
    label: {
      description: 'Download Label',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'string' },
      },
    },
    icon: {
      description: 'Download Icon',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'string' },
      },
    },
    downloadIcon: {
      description: 'Download option Icon',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'string' },
      },
    },
    links: {
      description: 'array of list content',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: ' "" ' },
      },
    },
  },
};

const DefaultTemplate = (args) => (
  <LabeledIconGroup>
    <DownloadLabeledIcon
      {...args}
      trigger={
        <Button className="text">
          <DownloadLabeledIcon.Icon {...args}>
            {args.icon}
          </DownloadLabeledIcon.Icon>
          <DownloadLabeledIcon.Label>{args.label}</DownloadLabeledIcon.Label>
        </Button>
      }
    >
      <DownloadLabeledIcon.Dropdown {...args}></DownloadLabeledIcon.Dropdown>
    </DownloadLabeledIcon>
  </LabeledIconGroup>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  label: 'Download',
  icon: 'ri-download-2-fill',
  downloadIcon: 'ri-download-2-fill',
  links: [
    { linkName: 'PDF', href: '/#' },
    { linkName: 'SVG', href: '/#' },
    { linkName: 'PNG', href: '/#' },
  ],
};
