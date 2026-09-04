import React from 'react';
import cx from 'classnames';
import { Grid, Card, Label, Icon } from 'semantic-ui-react';
function Timeline({ children, reversed }) {
  return (
    <div className="eea timeline">
      <Grid className={cx({ 'any reversed': reversed })}>
        <Grid.Row>{children}</Grid.Row>
      </Grid>
    </div>
  );
}

Timeline.Content = (args) => (
  <Grid.Column width={10}>
    <Card fluid raised color={args.color}>
      <Card.Content>
        <Label
          pointing={args.pointing}
          attached="top"
          style={{ marginLeft: '0' }}
          color={args.color}
        >
          {args.time}
        </Label>
        <Card.Header>{args.title}</Card.Header>
        <Card.Description>{args.description}</Card.Description>
        {/* <Label.Group>
          {tags.map((tag, i) => (
            <Label key={i.toString()}>{tag}</Label>
          ))}
        </Label.Group> */}
      </Card.Content>
    </Card>
  </Grid.Column>
);

Timeline.Icon = (args) => (
  <Grid.Column width={2} className="line">
    <Icon className={args.icon} color={args.color} inverted circular />
  </Grid.Column>
);

export default Timeline;
