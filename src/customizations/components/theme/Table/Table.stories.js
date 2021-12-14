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
    color: {
      control: { type: 'select' },
      options: ['red', 'orange', 'yellow'],
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
  color,
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
      color={color}
      stackable={stackable}
    >
      <Table.Header>
        <Table.Row textAlign={textAlign}>
          {headers.map((item) => (
            <Table.HeaderCell textAlign={textAlign}>{item}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {rows.map((item) => (
          <Table.Row textAlign={textAlign} verticalAlign={verticalAlign}>
            {item.content.map((cell) => (
              <Table.Cell textAlign={textAlign} verticalAlign={verticalAlign}>
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
    args.color,
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
  size: '',
  textAlign: 'center',
  verticalAlign: 'middle',
  color: '',
  stackable: false,
};
