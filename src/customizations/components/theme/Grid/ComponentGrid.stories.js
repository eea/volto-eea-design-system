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

export const Basic16 = (args) => <Grid>{getColumns(16, '16/16')}</Grid>;

export const GridExamples = (args) => (
  <Grid>
    <Grid.Row columns="two">{getColumns(2, '16/2')}</Grid.Row>
    <Grid.Row columns="three">{getColumns(3, '16/3')}</Grid.Row>
    <Grid.Row columns="four">
      <Grid.Column width="four">{getDiv('16/4')}</Grid.Column>
      <Grid.Column width="eight">{getDiv('16/8')}</Grid.Column>
      <Grid.Column width="four">{getDiv('16/4')}</Grid.Column>
    </Grid.Row>
    <Grid.Row columns="four">{getColumns(4, '16/4')}</Grid.Row>
    <Grid.Row columns="five">{getColumns(5, '16/5')}</Grid.Row>
  </Grid>
);

// export const Floated = (args) => (
//   <Grid>
//     <Grid.Row>
//       <Grid.Column width="eight" floated="right">{getDiv("16/8")}</Grid.Column>
//     </Grid.Row>
//     <Grid.Row columns="four">
//       <Grid.Column floated="left">{getDiv("16/4")}</Grid.Column>
//       <Grid.Column floated="right">{getDiv("16/4")}</Grid.Column>
//     </Grid.Row>
//   </Grid>
// )
