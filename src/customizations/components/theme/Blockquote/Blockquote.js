import React from 'react';

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
