import React from 'react';
import DownloadLabeledIcon from './DownloadLabeledIcon';
// eslint-disable-next-line import/no-unresolved

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
            }
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
    <DownloadLabeledIcon {...args}>        
        <DownloadLabeledIcon.Icon {...args}e>{args.icon}</DownloadLabeledIcon.Icon>
        <DownloadLabeledIcon.Label>{args.label}</DownloadLabeledIcon.Label>
        <DownloadLabeledIcon.Dropdown {...args}></DownloadLabeledIcon.Dropdown>
    </DownloadLabeledIcon>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
    label: 'Download',
    icon: "ri-download-2-fill",
    downloadIcon: 'ri-download-2-fill',
    links: [
        { linkName: 'PDF', href: '#' },
        { linkName: 'SVG', href: '#' },
        { linkName: 'PNG', href: '#' },
    ],
};