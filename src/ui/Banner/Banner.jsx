import React from 'react';
import { Container, Icon, Button, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

Banner.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  image: PropTypes.bool,
};

function Banner({ image, children }) {
  return (
    <div className="eea-page-banner">
      <div
        className={image ? 'image' : null}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="gradient">
        <Container>{children}</Container>
      </div>
    </div>
  );
}

Banner.Action = function ({ id, title, icon, onClick, className }) {
  return (
    <div className="actions">
      <Button className={className} basic onClick={onClick}>
        <Icon name={icon}></Icon>
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
        <Grid.Column mobile={2} tablet={3} computer={3}>
          {actions}
        </Grid.Column>
      </Grid>
    </div>
  );
};

Banner.Title = ({ children }) => <p className="title">{children}</p>;
Banner.Metadata = ({ children }) => <p className="metadata">{children}</p>;
export default Banner;
