import React from 'react';

function TagList({ children, ...rest }) {
  return (
    <div {...rest} className={`tags ${rest.className || ''}`}>
      {children}
    </div>
  );
}

TagList.Title = ({ children, ...rest }) => (
  <span className="tags-title" {...rest}>
    {children}
  </span>
);

TagList.Content = ({ children, ...rest }) => (
  <div className="tags-content" {...rest}>
    {children}
  </div>
);

export default TagList;
