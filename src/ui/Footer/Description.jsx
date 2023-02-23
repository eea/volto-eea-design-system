import React from 'react';
import PropTypes from 'prop-types';

const Description = (props) => {
  if (props.children) {
    return <div>{props.children}</div>;
  }

  return props.description ? (
    <div className="footer-description">
      <p>{props.description}</p>
    </div>
  ) : null;
};

Description.propTypes = {
  description: PropTypes.string,
};

export default Description;
