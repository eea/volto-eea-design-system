import _ from 'lodash';
import React from 'react';
import { Grid } from 'semantic-ui-react';

export default {
  title: 'Components/Grid',
  component: Grid,
  argTypes: {
    celled: {
      control: { type: 'select' },
      options: [true, false, 'internally'],
    },
    padded: {
      control: { type: 'select' },
      options: [true, false, 'horizontally', 'vertically'],
    },
    relaxed: {
      control: { type: 'select' },
      options: [true, false, 'very'],
    },
  },
};

const getColumns = (number) => {
  const columns = _.times(number, (i) => (
    <Grid.Column key={i}>
      <div
        style={{
          width: '20px',
          height: '20px',
          backgroundColor: 'red',
          margin: '0 auto',
        }}
      ></div>
    </Grid.Column>
  ));

  return columns;
};

function GridEEA({
  rows,
  celled,
  centered,
  container,
  divided,
  padded,
  relaxed,
}) {
  return (
    <Grid
      celled={celled}
      centered={centered}
      container={container}
      divided={divided}
      padded={padded}
      relaxed={relaxed}
    >
      {rows.map((row, index) => (
        <Grid.Row key={index} centered={row.centered} divided={row.divided}>
          {getColumns(row.columns)}
        </Grid.Row>
      ))}
    </Grid>
  );
}

const Template = (args) => <GridEEA {...args}></GridEEA>;

export const Default = (args) => (
  <Grid {...args}>{getColumns(args.columns)}</Grid>
);
Default.args = {
  columns: 12,
  celled: false,
  padded: false,
  relaxed: false,
};

export const Playground = Template.bind({});
Playground.args = {
  rows: [
    { columns: 12, centered: false, divided: false },
    { columns: 12, centered: false, divided: false },
    { columns: 12, centered: false, divided: false },
    { columns: 12, centered: false, divided: false },
  ],
  celled: false,
  centered: false,
  container: false,
  divided: false,
  padded: false,
  relaxed: false,
};
