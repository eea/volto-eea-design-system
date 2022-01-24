import _ from 'lodash';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Col } from './Col';

export default {
  title: 'Layout/Grid/Layout Grid',
  component: Grid,
  argTypes: {},
};

const getColumns = (number) => {
  const columns = _.times(number, (i) => (
    <Col desktop="1" tablet="1" mobile="1" key={i}>
      <div className="col-example">
        col-lg-1
        <br />
        col-md-1
        <br />
        col-sm-1
      </div>
    </Col>
  ));

  return columns;
};

export const Basic12 = (args) => <Grid.Row>{getColumns(12)}</Grid.Row>;
Basic12.storyName = '12 Columns';

export const GridExamples = (args) => (
  <div>
    <Grid.Row>
      <Col desktop="6" tablet="4" mobile="2">
        <div className="col-example">
          col-lg-6
          <br />
          col-md-4
          <br />
          col-sm-2
        </div>
      </Col>
      <Col desktop="6" tablet="4" mobile="2">
        <div className="col-example">
          col-lg-6
          <br />
          col-md-4
          <br />
          col-sm-2
        </div>
      </Col>
    </Grid.Row>
    <Grid.Row>
      <Col desktop="4" tablet="3" mobile="1">
        <div className="col-example">
          col-lg-4
          <br />
          col-md-3
          <br />
          col-sm-1
        </div>
      </Col>
      <Col desktop="4" tablet="2" mobile="2">
        <div className="col-example">
          col-lg-4
          <br />
          col-md-2
          <br />
          col-sm-2
        </div>
      </Col>
      <Col desktop="4" tablet="3" mobile="1">
        <div className="col-example">
          col-lg-4
          <br />
          col-md-3
          <br />
          col-sm-1
        </div>
      </Col>
    </Grid.Row>
    <Grid.Row>
      <Col desktop="3" tablet="3" mobile="1">
        <div className="col-example">
          col-lg-3
          <br />
          col-md-3
          <br />
          col-sm-1
        </div>
      </Col>
      <Col desktop="6" tablet="2" mobile="2">
        <div className="col-example">
          col-lg-6
          <br />
          col-md-2
          <br />
          col-sm-2
        </div>
      </Col>
      <Col desktop="3" tablet="3" mobile="1">
        <div className="col-example">
          col-lg-3
          <br />
          col-md-3
          <br />
          col-sm-1
        </div>
      </Col>
    </Grid.Row>
    <Grid.Row>
      <Col desktop="3" tablet="2" mobile="1">
        <div className="col-example">
          col-lg-3
          <br />
          col-md-2
          <br />
          col-sm-1
        </div>
      </Col>
      <Col desktop="3" tablet="2" mobile="1">
        <div className="col-example">
          col-lg-3
          <br />
          col-md-2
          <br />
          col-sm-1
        </div>
      </Col>
      <Col desktop="3" tablet="2" mobile="1">
        <div className="col-example">
          col-lg-3
          <br />
          col-md-2
          <br />
          col-sm-1
        </div>
      </Col>
      <Col desktop="3" tablet="2" mobile="1">
        <div className="col-example">
          col-lg-3
          <br />
          col-md-2
          <br />
          col-sm-1
        </div>
      </Col>
    </Grid.Row>
    <Grid.Row>
      <Col desktop="2" tablet="1" mobile="1">
        <div className="col-example">
          col-lg-2
          <br />
          col-md-1
          <br />
          col-sm-1
        </div>
      </Col>
      <Col desktop="8" tablet="6" mobile="2">
        <div className="col-example">
          col-lg-8
          <br />
          col-md-6
          <br />
          col-sm-2
        </div>
      </Col>
      <Col desktop="2" tablet="1" mobile="1">
        <div className="col-example">
          col-lg-2
          <br />
          col-md-1
          <br />
          col-sm-1
        </div>
      </Col>
    </Grid.Row>
  </div>
);
