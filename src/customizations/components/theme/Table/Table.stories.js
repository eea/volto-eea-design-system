import { injectIntl } from 'react-intl';
import React from 'react';
import { Table } from 'semantic-ui-react';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: ['small', 'large'],
    },
    textAlign: {
      control: { type: 'inline-radio' },
      options: ['left', 'center', 'right'],
    },
    verticalAlign: {
      control: { type: 'inline-radio' },
      options: ['bottom', 'middle', 'top'],
    },
  },
};

function TableContent(
  headers,
  rows,
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
) {
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
        <Table.Row textAlign='center'>
          {headers.map((item, index) => (
            <Table.HeaderCell key={index} textAlign='center'>
              {item}
            </Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {rows.map((item,rowIndex) => (
          <Table.Row textAlign={textAlign} verticalAlign={verticalAlign} key={rowIndex}>
            {item.content.map((cell, cellIndex) => (
              <Table.Cell
                key={cellIndex}
                textAlign={textAlign}
                verticalAlign={verticalAlign}
              >
                {cell}
              </Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export const Default = (args) => {
  return TableContent(
    args.headers,
    args.rows,
    args.singleLine,
    args.celled,
    args.fixed,
    args.striped,
    args.collapsing,
    args.compact,
    args.size,
    args.textAlign,
    args.verticalAlign,
    args.stackable,
  );
};

Default.args = {
  headers: ['Header 1', 'Header 2', 'Header 3'],
  rows: [
    { content: ['Cell', 'Cell', 'Cell'] },
    { content: ['Cell', 'Cell', 'Cell'] },
    { content: ['Cell', 'Cell', 'Cell'] },
    { content: ['Cell', 'Cell', 'Cell'] },
    { content: ['Cell', 'Cell', 'Cell'] },
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
