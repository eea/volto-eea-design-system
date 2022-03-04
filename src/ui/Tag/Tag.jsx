import React from 'react';

function Tag({ children, ...rest }) {
  return (
    <div {...rest} className={`eea tags ${rest.className || ''}`}>
      <div>{children}</div>
    </div>
  );
}

Tag.Title = ({ children, ...rest }) => (
  <span className="tags-title" {...rest}>
    {children}
  </span>
);

Tag.Tag = ({ children, ...rest }) => (
  <a {...rest} className={`tag ${rest.className || ''}`}>
    <span className="name">{children}</span>
  </a>
);

export default Tag;
