import React from 'react';

function Blockquote({ citation, author }) {
  return (
    <div className="eea-blockquote">
      <blockquote className="eea-blockquote-quote">
        {citation}
        <div className="eea-blockquote-author">{author}</div>
      </blockquote>
    </div>
  );
}

export default Blockquote;
