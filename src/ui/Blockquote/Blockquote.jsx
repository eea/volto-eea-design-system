import React from 'react';

function Blockquote({ children, className, ...rest }) {
  return (
    <div className="eea blockquote" {...rest}>
      <blockquote className="quote">{children}</blockquote>
    </div>
  );
}

Blockquote.Content = ({ children, as: As, ...rest }) =>
  As ? <As {...rest}>{children}</As> : children;

Blockquote.Meta = ({ children }) => <div className="meta">{children}</div>;

export default Blockquote;
