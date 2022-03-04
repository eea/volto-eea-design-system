import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';
import { Grid } from 'semantic-ui-react';

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
  <p className={`grid-title  ${rest.showTitle ? '' : 'hidden'}`}>{children}</p>
);
AvatarGrid.Group = ({ children, ...rest }) => {
  let avatars = rest.avatars;
  if (rest.avatars.length > 3) {
    avatars = avatars.slice(0, 3);
  }
  return (
    <div className="avatar group">
      <Grid>
        {avatars.map((avatar) => (
          <Grid.Column mobile={12} tablet={4} computer={4}>
            <div className="avatar-wrapper">
              <Avatar {...rest} image_url={avatar.image_url} avatarSize="big">
                <Avatar.Content>
                  <Avatar.Title>{avatar.title}</Avatar.Title>
                  <Avatar.Metadata>{avatar.metadata}</Avatar.Metadata>
                </Avatar.Content>
              </Avatar>
            </div>
          </Grid.Column>
        ))}
      </Grid>
    </div>
  );
};
export default AvatarGrid;
