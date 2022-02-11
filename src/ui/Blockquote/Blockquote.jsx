import React from 'react';

function Blockquote({ children, ...rest }) {
  return (
    <div className="eea blockquote" {...rest}>
      <blockquote className="quote">{children}</blockquote>
    </div>
  );
}

Blockquote.Content = ({ children, as, ...rest }) =>
  as ? <as {...rest}>{children}</as> : children;

Blockquote.Meta = ({ children }) => <div className="meta">{children}</div>;

export default Blockquote;
