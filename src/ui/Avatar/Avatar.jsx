import React from 'react';
import PropTypes from 'prop-types';

Avatar.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
};

function Avatar({ image_url, children, ...rest }) {
  return (
    <div className={`eea avatar  ${rest.avatarsize}`} {...rest}>
      <div className="wrapper">
        <div className="image-wrapper">
          <div
            className="image"
            style={{ backgroundImage: `url(${image_url})` }}
          ></div>
        </div>
        <div className="content-wrapper">{children}</div>
      </div>
    </div>
  );
}

Avatar.Content = ({ children }) => {
  return <div className="content">{children}</div>;
};

Avatar.Title = ({ children }) => <p className="title">{children}</p>;
Avatar.Metadata = ({ children }) => <p className="metadata">{children}</p>;

export default Avatar;
