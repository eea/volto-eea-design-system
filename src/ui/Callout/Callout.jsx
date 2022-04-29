import React from 'react';

function Callout({ children, className, ...rest }) {
  return (
    <div className="eea callout" {...rest}>
      <blockquote className="quote">{children}</blockquote>
    </div>
  );
}

Callout.Content = ({ children, as: As, ...rest }) =>
  As ? <As {...rest}>{children}</As> : children;

export default Callout;
