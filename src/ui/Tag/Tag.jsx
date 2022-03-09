import React from 'react';
import { Icon } from 'semantic-ui-react';

function Tag({ children, ...rest }) {
  return (
    <a {...rest} className={`tag ${rest.className || ''}`}>
      <Icon className={`icon`} name="hashtag" />
      <span className="name">{children}</span>
    </a>
  );
}

export default Tag;
