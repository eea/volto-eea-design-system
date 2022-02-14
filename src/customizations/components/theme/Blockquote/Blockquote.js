import React from 'react';
import PropTypes from 'prop-types';

Blockquote.propTypes = {
  citation: PropTypes.string,
  author: PropTypes.string,
};

function Blockquote({ citation, author }) {
  return (
    <div className="eea blockquote">
      <blockquote className="quote">
        {citation}
        <div className="meta">{author}</div>
      </blockquote>
    </div>
  );
}

export default Blockquote;
