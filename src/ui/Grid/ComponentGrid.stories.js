import _ from 'lodash';
import React from 'react';
import { Grid } from 'semantic-ui-react';

export default {
  title: 'Layout/Grid/Component Grid',
  component: Grid,
  argTypes: {},
};

const getColumns = (number, text) => {
  const columns = _.times(number, (i) => (
    <Grid.Column key={i}>
      <div className="col-example">{text}</div>
    </Grid.Column>
  ));

  return columns;
};

const getDiv = (text) => {
  return <div className="col-example">{text}</div>;
};

export const Basic12 = (args) => <Grid>{getColumns(12, '')}</Grid>;

export const GridExamples = (args) => (
  <Grid>
    <Grid.Row columns="two">{getColumns(2, '12/2')}</Grid.Row>
    <Grid.Row columns="three">{getColumns(3, '12/3')}</Grid.Row>
    <Grid.Row columns="four">
      <Grid.Column width="three">{getDiv('12/4')}</Grid.Column>
      <Grid.Column width="six">{getDiv('12/2')}</Grid.Column>
      <Grid.Column width="three">{getDiv('12/4')}</Grid.Column>
    </Grid.Row>
    <Grid.Row columns="four">{getColumns(4, '12/4')}</Grid.Row>
    <Grid.Row columns="five">{getColumns(5, '12/5')}</Grid.Row>
  </Grid>
);
