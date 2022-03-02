import React from 'react';
import PropTypes from 'prop-types';
import Divider from '../Divider/Divider';
import Avatar from '../Avatar/Avatar';
import Pullquote from '../Pullquote/Pullquote';

Testimonial.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
};

function Testimonial({ children, ...rest }) {
  return (
    <div className="eea testimonial" {...rest}>
      <Divider />
      <div className="wrapper">{children}</div>
      <Divider />
    </div>
  );
}

Testimonial.Avatar = ({ children, ...rest }) => {
  return (
    <div className="avatar-wrapper">
      <Avatar {...rest} image_url={rest.image_url} avatarSize="small">
        <Avatar.Content>
          <Avatar.Title>{rest.title}</Avatar.Title>
          <Avatar.Metadata>{rest.metadata}</Avatar.Metadata>
        </Avatar.Content>
      </Avatar>
    </div>
  );
};

Testimonial.Content = ({ children }) => {
  return <div className="content">{children}</div>;
};

Testimonial.Title = ({ children }) => <p className="title">{children}</p>;
Testimonial.Pullquote = ({ children, ...rest }) => (
  <Pullquote quotePosition="none">
    <Pullquote.Quote>{children}</Pullquote.Quote>
  </Pullquote>
);

export default Testimonial;
