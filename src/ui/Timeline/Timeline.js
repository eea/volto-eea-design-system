import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, Label, Icon } from 'semantic-ui-react';

function Timeline({
  direction,
  icon,
  title,
  time,
  description,
  tags,
  labelColor,
  lineHeight = 4,
  color = 'grey',
}) {
  const textAlign = direction === 'left' ? 'right' : 'left';

  const card = (
    <Card fluid raised color={color}>
      <Card.Content>
        <Label
          pointing={textAlign}
          color={labelColor}
          attached="top"
          style={{ marginLeft: '0' }}
        >
          {time}
        </Label>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{description}</Card.Description>
        <Label.Group color={color}>
          {tags.map((tag, i) => (
            <Label key={i.toString()}>{tag}</Label>
          ))}
        </Label.Group>
      </Card.Content>
    </Card>
  );

  const left = direction === 'left' ? card : '';
  const isMobile = window.innerWidth <= 768;
  const iconSize = isMobile ? 'small' : 'large';

  return (
    <div className="eea timeline">
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>{left}</Grid.Column>
          <Grid.Column width={2} className="line">
            <Icon name={icon} size={iconSize} color={color} inverted circular />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

Timeline.propTypes = {
  direction: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  time: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
};

export default Timeline;
