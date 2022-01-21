import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Col } from './Col';

export default {
  title: 'Layout/Grid/Layout Grid',
  component: Grid,
  argTypes: {},
};

export const Columns12 = (args) => (
  <div>
    <Grid.Row>
      <div
        className="col-lg-3 col-md-2 col-sm-1"
        style={{
          backgroundColor: 'lightblue',
          padding: '5px',
        }}
      >
        <p>col-lg-3 col-md-2 col-sm-1</p>
      </div>
    </Grid.Row>
    <Grid.Row>
      <div
        className="col-lg-6 col-md-4 col-sm-2"
        style={{
          backgroundColor: 'lightblue',
          padding: '5px',
        }}
      >
        <p>col-lg-6 col-md-4 col-sm-2</p>
      </div>
    </Grid.Row>
    <Grid.Row>
      <div
        className="col-lg-12 col-md-8 col-sm-4"
        style={{
          backgroundColor: 'lightblue',
          padding: '5px',
        }}
      >
        <p>col-lg-12 col-md-8 col-sm-4</p>
      </div>
    </Grid.Row>
    <Grid.Row>
      <div
        className="col-lg-2 col-md-3 col-sm-1"
        style={{
          backgroundColor: 'lightblue',
          padding: '5px',
        }}
      >
        <p>col-lg-2 col-md-3 col-sm-1</p>
      </div>
      <div
        className="col-lg-2 col-lg-offset-8 col-md-3 col-sm-1"
        style={{
          backgroundColor: 'lightblue',
          padding: '5px',
        }}
      >
        <p>col-lg-offset-8</p>
      </div>
    </Grid.Row>
    <Grid.Row>
      <div
        className="col-lg-4 col-md-2 col-sm-2"
        style={{
          backgroundColor: 'lightblue',
          padding: '5px',
        }}
      >
        <p>col-lg-4 col-md-2 col-sm-2</p>
      </div>
      <div
        className="col-lg-4 col-md-3 col-sm-1"
        style={{
          backgroundColor: 'lightblue',
          padding: '5px',
        }}
      >
        <p>col-lg-4 col-md-3 col-sm-1</p>
      </div>
      <div
        className="col-lg-4 col-md-3 col-sm-1"
        style={{
          backgroundColor: 'lightblue',
          padding: '5px',
        }}
      >
        <p>col-lg-4 col-md-3 col-sm-1</p>
      </div>
    </Grid.Row>
  </div>
);

export const Columns12WithCol = (args) => (
  <div>
    <Grid.Row>
      <Col
        desktop="3"
        tablet="3"
        mobile="3"
        style={{
          backgroundColor: 'lightblue',
          padding: '5px',
        }}
      >
        <p>col-lg-3 col-md-2 col-sm-1</p>
      </Col>
    </Grid.Row>
    <Grid.Row>
      <Col
        desktop="6"
        tablet="4"
        mobile="2"
        style={{
          backgroundColor: 'lightblue',
          padding: '5px',
        }}
      >
        <p>col-lg-6 col-md-4 col-sm-2</p>
      </Col>
    </Grid.Row>
    <Grid.Row>
      <Col
        desktop="12"
        tablet="8"
        mobile="4"
        style={{
          backgroundColor: 'lightblue',
          padding: '5px',
        }}
      >
        <p>col-lg-12 col-md-8 col-sm-4</p>
      </Col>
    </Grid.Row>
    <Grid.Row>
      <Col
        desktop="2"
        tablet="3"
        mobile="1"
        style={{
          backgroundColor: 'lightblue',
          padding: '5px',
        }}
      >
        <p>col-lg-2 col-md-3 col-sm-1</p>
      </Col>
      <Col
        className="col-lg-2 col-lg-offset-10 col-md-3 col-sm-1"
        style={{
          backgroundColor: 'lightblue',
          padding: '5px',
        }}
      >
        <p>col-lg-offset-10</p>
      </Col>
    </Grid.Row>
    <Grid.Row>
      <Col
        desktop="4"
        tablet="2"
        mobile="2"
        style={{
          backgroundColor: 'lightblue',
          padding: '5px',
        }}
      >
        <p>col-lg-4 col-md-2 col-sm-2</p>
      </Col>
      <Col
        desktop="4"
        tablet="3"
        mobile="1"
        style={{
          backgroundColor: 'lightblue',
          padding: '5px',
        }}
      >
        <p>col-lg-4 col-md-3 col-sm-1</p>
      </Col>
      <Col
        desktop="4"
        tablet="3"
        mobile="1"
        style={{
          backgroundColor: 'lightblue',
          padding: '5px',
        }}
      >
        <p>col-lg-4 col-md-3 col-sm-1</p>
      </Col>
    </Grid.Row>
  </div>
);
