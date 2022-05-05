import React from 'react';
import { Container } from 'semantic-ui-react';
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
  },
};

const DefaultTemplate = (args) => (
  <Container>
    <FaqFilter>
      <FaqFilter.Menu
        filterText={args.filterText}
        clearText={args.clearText}
        resultCount={args.resultCount}
      />
      <FaqFilter.Active />
      <FaqFilter.Filters filters={args.filters} />
    </FaqFilter>
  </Container>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  filterText: 'Filters',
  clearText: 'clear',
  resultCount: '50 Results',
  filters: [
    { label: 'Checkbox 1', count: Math.floor(Math.random() * 100), id: 1 },
    { label: 'Checkbox 2', count: Math.floor(Math.random() * 100), id: 2 },
    { label: 'Checkbox 3', count: Math.floor(Math.random() * 100), id: 3 },
    { label: 'Checkbox 4', count: Math.floor(Math.random() * 100), id: 4 },
    { label: 'Checkbox 5', count: Math.floor(Math.random() * 100), id: 5 },
    { label: 'Checkbox 6', count: Math.floor(Math.random() * 100), id: 6 },
    { label: 'Checkbox 7', count: Math.floor(Math.random() * 100), id: 7 },
    { label: 'Checkbox 8', count: Math.floor(Math.random() * 100), id: 8 },
    { label: 'Checkbox 9', count: Math.floor(Math.random() * 100), id: 9 },
    { label: 'Checkbox 10', count: Math.floor(Math.random() * 100), id: 10 },
    { label: 'Checkbox 11', count: Math.floor(Math.random() * 100), id: 11 },
    { label: 'Checkbox 12', count: Math.floor(Math.random() * 100), id: 12 },
    { label: 'Checkbox 13', count: Math.floor(Math.random() * 100), id: 13 },
    { label: 'Checkbox 14', count: Math.floor(Math.random() * 100), id: 14 },
  ],
};
