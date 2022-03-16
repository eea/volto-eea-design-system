import React from 'react';
// eslint-disable-next-line import/no-unresolved
import FaqFilter from './FaqFilter';

export default {
    title: 'Components/FaQ Filter',
    component: FaqFilter,
    argTypes: {
        filterText: {
            description: 'filter menu text',
            table: {
                defaultValue: { summary: '""' },
                type: { summary: 'string' },
            },
        },
        clearText: {
            description: 'clear function text',
            table: {
                defaultValue: { summary: '""' },
                type: { summary: 'string' },
            },
        },
        resultCount: {
            description: 'results count text',
            table: {
                defaultValue: { summary: '""' },
                type: { summary: 'string' },
            },
        },
        filters: {
            description: 'filter options',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ' "" ' },
            },
        },
    }
};

const DefaultTemplate = (args) => (
    <FaqFilter>
        <FaqFilter.Menu filterText={args.filterText} clearText={args.clearText} resultCount={args.resultCount} />
        <FaqFilter.Active />
        <FaqFilter.Filters filters={args.filters} />
    </FaqFilter>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
    filterText: 'Filters',
    clearText: 'clear',
    resultCount: 50,
    filters: [
        { 'label': 'Checkbox 1', 'id': 1 },
        { 'label': 'Checkbox 2', 'id': 2 },
        { 'label': 'Checkbox 3', 'id': 3 },
        { 'label': 'Checkbox 4', 'id': 4 },
        { 'label': 'Checkbox 5', 'id': 5 },
        { 'label': 'Checkbox 6', 'id': 6 },
        { 'label': 'Checkbox 7', 'id': 7 },
        { 'label': 'Checkbox 8', 'id': 8 },
        { 'label': 'Checkbox 9', 'id': 9 },
        { 'label': 'Checkbox 10', 'id': 10 },
        { 'label': 'Checkbox 11', 'id': 11 },
        { 'label': 'Checkbox 12', 'id': 12 },
        { 'label': 'Checkbox 13', 'id': 13 },
        { 'label': 'Checkbox 14', 'id': 14 },
    ],
};
