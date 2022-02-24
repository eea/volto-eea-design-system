import React from 'react';
import { Grid, Card, Label, Icon } from 'semantic-ui-react';
function Timeline({ children, ...rest }) {
  return (
    <div className="eea timeline">
      <Grid>
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
    <Icon name={args.icon} color={args.color} inverted circular />
  </Grid.Column>
);

export default Timeline;
