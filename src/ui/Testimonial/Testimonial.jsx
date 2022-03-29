import React from 'react';
import PropTypes from 'prop-types';
import Divider from '../Divider/Divider';
import Avatar from '../Avatar/Avatar';
import Pullquote from '../Pullquote/Pullquote';
import { Grid } from 'semantic-ui-react';

Testimonial.propTypes = {
  title: PropTypes.string,  
};

function Testimonial({ children, ...rest }) {
  return (
    <div className="eea testimonial" {...rest}>
      <Divider />
      <Grid>{children}</Grid>
      <Divider />
    </div>
  );
}

Testimonial.Avatar = ({ children, ...rest }) => {
  return (
    <Grid.Column mobile={12} tablet={2} computer={2}>
      <div className="avatar-wrapper">
        <Avatar {...rest} image_url={rest.image_url} avatarsize="small">
          <Avatar.Content>
            <Avatar.Title>{rest.title}</Avatar.Title>
            <Avatar.Metadata>{rest.metadata}</Avatar.Metadata>
          </Avatar.Content>
        </Avatar>
      </div>
    </Grid.Column>
  );
};

Testimonial.Content = ({ children }) => {
  return (
    <Grid.Column mobile={12} tablet={10} computer={10}>
      <div className="content">{children}</div>
    </Grid.Column>
  );
};

Testimonial.Title = ({ children }) => <p className="title">{children}</p>;
Testimonial.Pullquote = ({ children, ...rest }) => (
  <Pullquote quotePosition="none">
    <Pullquote.Quote>{children}</Pullquote.Quote>
  </Pullquote>
);

export default Testimonial;
