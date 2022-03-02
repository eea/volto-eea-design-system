import React from 'react';

function Tags({ children, ...rest }) {
  return (
    <div {...rest} className={'eea tags ' + rest.className}>
      <div>{children}</div>
    </div>
  );
}

Tags.Title = ({ children, ...rest }) => (
  <span className="title" {...rest}>
    {children}:
  </span>
);

Tags.Tag = ({ children, ...rest }) => (
  <a {...rest} className={'tag ' + rest.className}>
    <span className="name">{children}</span>
  </a>
);

export default Tags;
