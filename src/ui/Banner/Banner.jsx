import React from 'react';
import { Container, Icon, Button, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

Banner.propTypes = {
  title: PropTypes.string,
  image: PropTypes.bool,
};

function Banner({ image_url, image, children }) {
  return (
    <div className="eea banner">
      <div
        className={image ? 'image' : ''}
        style={image ? { backgroundImage: `url(${image_url})` } : {}}
      >
        <div className="gradient">
          <Container>{children}</Container>
        </div>
      </div>
    </div>
  );
}

Banner.Action = function ({ id, title, icon, onClick, className, color }) {
  return (
    <div className="action">
      <Button className={className} basic inverted onClick={onClick}>
        <Icon className={icon} color={color}></Icon>
        <span className="mobile hidden">{title}</span>
      </Button>
    </div>
  );
};

Banner.Content = ({ children, actions }) => {
  return (
    <div className="content">
      <Grid>
        <Grid.Column mobile={10} tablet={9} computer={9}>
          {children}
        </Grid.Column>
        <Grid.Column mobile={2} tablet={3} computer={3} className="actions">
          {actions}
        </Grid.Column>
      </Grid>
    </div>
  );
};

Banner.Title = ({ children }) => <p className="title">{children}</p>;
Banner.Metadata = ({ children }) => <p className="metadata">{children}</p>;

Banner.MetadataField = ({ hidden, type = 'text', label, value, title }) => {
  if (hidden || !value) return '';
  return <span className="field">{value}</span>;
};

export default Banner;
