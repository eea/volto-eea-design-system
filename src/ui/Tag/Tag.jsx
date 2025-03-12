import React from 'react';
import { Icon } from 'semantic-ui-react';
import { ConditionalLink } from '@plone/volto/components';
import { getFieldURL } from '@plone/volto/helpers';

function Tag({ href, children }) {
  return (
    <div className={`tag ${href ? 'link' : ''}`}>
      <ConditionalLink
        condition={href}
        to={href ? getFieldURL(href) : null}
        openLinkInNewTab={false}
      >
        <Icon className={`icon`} name="hashtag" />
        <span className="name">{children}</span>
      </ConditionalLink>
    </div>
  );
}

export default Tag;
