import React from 'react';
import { Table } from 'semantic-ui-react';
import _ from 'lodash';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    headers: { description: 'table headers' },
    tableData: { description: 'table data' },
    singleLine: {
      description: 'contents should remain on a single line, and not wrap',
    },
    celled: { description: 'table divided into individual cells' },
    fixed: {
      description:
        'A table can use fixed a special faster form of table rendering that does not resize table cells based on content',
    },
    striped: {
      description:
        'alternate rows of content with a darker color to increase contrast',
    },
    collapsing: {
      description:
        'A table can be collapsing, taking up only as much space as its rows',
    },
    compact: {
      description: 'table more compact to make more rows visible at a time',
    },
    stackable: {
      description:
        'a table can specify how it stacks table content responsively',
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['small', 'large'],
      description: 'table size',
    },
    textAlign: {
      control: { type: 'inline-radio' },
      options: ['left', 'center', 'right'],
      description: 'adjust text alignment',
    },
    verticalAlign: {
      control: { type: 'inline-radio' },
      options: ['bottom', 'middle', 'top'],
      description: 'adjust vertical alignment',
    },
  },
};

//***  Simple table ***//
function TableContent({
  headers,
  tableData,
  singleLine,
  celled,
  fixed,
  striped,
  collapsing,
  compact,
  size,
  textAlign,
  verticalAlign,
  stackable,
}) {
  return (
    <Table
      celled={celled}
      singleLine={singleLine}
      fixed={fixed}
      striped={striped}
      collapsing={collapsing}
      compact={compact}
      size={size}
      stackable={stackable}
    >
      <Table.Header>
        <Table.Row textAlign="center">
          {headers.map((item) => (
            <Table.HeaderCell key={item.key} textAlign="center">
              {item.name}
            </Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {tableData.map(({ col1, col2, col3 }, rowIndex) => (
          <Table.Row
            textAlign={textAlign}
            verticalAlign={verticalAlign}
            key={rowIndex}
          >
            <Table.Cell textAlign={textAlign} verticalAlign={verticalAlign}>
              {col1}
            </Table.Cell>
            <Table.Cell textAlign={textAlign} verticalAlign={verticalAlign}>
              {col2}
            </Table.Cell>
            <Table.Cell textAlign={textAlign} verticalAlign={verticalAlign}>
              {col3}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export const Default = (args) => <TableContent {...args}></TableContent>;
Default.args = {
  headers: [
    { name: 'Header 1', key: 'col1' },
    { name: 'Header 2', key: 'col2' },
    { name: 'Header 3', key: 'col3' },
  ],
  tableData: [
    { col1: 'Cell 1', col2: 'Cell 2', col3: 'Cell 3' },
    { col1: 'Cell 4', col2: 'Cell 5', col3: 'Cell 6' },
    { col1: 'Cell 7', col2: 'Cell 8', col3: 'Cell 9' },
    { col1: 'Cell 10', col2: 'Cell 11', col3: 'Cell 12' },
  ],
  singleLine: true,
  celled: false,
  fixed: true,
  striped: false,
  collapsing: false,
  compact: false,
  size: 'small',
  textAlign: 'center',
  verticalAlign: 'middle',
  stackable: false,
};

//***  Sortable table ***//

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_SORT':
      if (state.column === action.column) {
        return {
          ...state,
          data: state.data.slice().reverse(),
          direction:
            state.direction === 'ascending' ? 'descending' : 'ascending',
        };
      }

      return {
        column: action.column,
        data: _.sortBy(state.data, [action.column]),
        direction: 'ascending',
      };
    default:
      throw new Error();
  }
}

function SortableTableContent({
  headers,
  tableData,
  singleLine,
  celled,
  fixed,
  striped,
  collapsing,
  compact,
  size,
  textAlign,
  verticalAlign,
  stackable,
}) {
  const [state, dispatch] = React.useReducer(reducer, {
    column: null,
    data: tableData,
    direction: null,
  });

  const { column, data, direction } = state;

  return (
    <Table
      celled={celled}
      singleLine={singleLine}
      fixed={fixed}
      striped={striped}
      collapsing={collapsing}
      compact={compact}
      size={size}
      stackable={stackable}
      sortable
    >
      <Table.Header>
        <Table.Row textAlign="center">
          {headers.map((item) => (
            <Table.HeaderCell
              key={item.key}
              textAlign="center"
              sorted={column === item.key ? direction : null}
              onClick={() =>
                dispatch({ type: 'CHANGE_SORT', column: item.key })
              }
            >
              {item.name}
            </Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.map(({ col1, col2, col3 }, rowIndex) => (
          <Table.Row
            textAlign={textAlign}
            verticalAlign={verticalAlign}
            key={rowIndex}
          >
            <Table.Cell textAlign={textAlign} verticalAlign={verticalAlign}>
              {col1}
            </Table.Cell>
            <Table.Cell textAlign={textAlign} verticalAlign={verticalAlign}>
              {col2}
            </Table.Cell>
            <Table.Cell textAlign={textAlign} verticalAlign={verticalAlign}>
              {col3}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export const Sortable = (args) => (
  <SortableTableContent {...args}></SortableTableContent>
);
Sortable.args = {
  headers: [
    { name: 'Header 1', key: 'col1' },
    { name: 'Header 2', key: 'col2' },
    { name: 'Header 3', key: 'col3' },
  ],
  tableData: [
    { col1: 'Cell A', col2: 'Cell B', col3: 'Cell C' },
    { col1: 'Cell D', col2: 'Cell F', col3: 'Cell G' },
    { col1: 'Cell H', col2: 'Cell I', col3: 'Cell J' },
    { col1: 'Cell K', col2: 'Cell L', col3: 'Cell M' },
  ],
  singleLine: true,
  celled: false,
  fixed: true,
  striped: false,
  collapsing: false,
  compact: false,
  size: 'small',
  textAlign: 'center',
  verticalAlign: 'middle',
  stackable: false,
};
