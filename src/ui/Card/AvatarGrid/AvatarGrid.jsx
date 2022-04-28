import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, Image } from 'semantic-ui-react';

AvatarGrid.propTypes = {
  title: PropTypes.string,
};

function AvatarGrid({ children, ...rest }) {
  return (
    <div className="eea avatar-grid" {...rest}>
      <div className="wrapper">{children}</div>
    </div>
  );
}

AvatarGrid.Content = ({ children }) => {
  return <div className="content">{children}</div>;
};

AvatarGrid.Title = ({ children, ...rest }) => (
  <h3 className={`grid-title  ${rest.showTitle ? '' : 'hidden'}`}>
    {children}
  </h3>
);
AvatarGrid.Group = ({ children, ...rest }) => {
  let avatars = rest.avatars;

  return (
    <div className="avatar group">
      <Grid>
        {avatars.map((avatar, index) => (
          <Grid.Column key={index} mobile={12} tablet={4} computer={4}>
            <div className="avatar-wrapper">
              <Card className={`eea rounded big`} fluid={avatar.fluid}>
                <Image src={avatar.src} wrapped ui={false} alt="card image" />
                <Card.Content>
                  <Card.Header>{avatar.title}</Card.Header>
                  <Card.Description>{avatar.description}</Card.Description>
                </Card.Content>
              </Card>
            </div>
          </Grid.Column>
        ))}
      </Grid>
    </div>
  );
};
export default AvatarGrid;
