import React from 'react';

function Blockquote({ citation, author }) {
  return (
    <div className="eea blockquote">
      <blockquote className="quote">
        {citation}
        <div className="author">{author}</div>
      </blockquote>
    </div>
  );
}

export default Blockquote;
