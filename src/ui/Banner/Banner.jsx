import React from 'react';
import { Container, Icon, Button, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

Banner.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  image: PropTypes.bool,
};

function Banner({ title, info, image, actions }) {
  return (
    <div className="eea-page-banner">
      <div
        className={image ? 'image' : null}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="gradient">
        <Container>
          <div className="content">
            <Grid>
              <Grid.Column mobile={10} tablet={9} computer={9}>
                <p className="title">{title}</p>
                <p className="metadata">{info}</p>
              </Grid.Column>
              <Grid.Column mobile={2} tablet={3} computer={3}>
                {actions}
              </Grid.Column>
            </Grid>
          </div>
        </Container>
      </div>
    </div>
  );
}

Banner.Action = function ({ id, title, icon, onClick, className }) {
  return (
    <div className="actions">
      <Button className={className} as="div" basic onClick={onClick}>
        <Icon name={icon}></Icon>
        <span className="mobile hidden">{title}</span>
      </Button>
    </div>
  );
};

export default Banner;
