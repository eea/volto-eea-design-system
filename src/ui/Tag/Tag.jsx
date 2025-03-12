import React from 'react';
import { Icon } from 'semantic-ui-react';
import { ConditionalLink } from '@plone/volto/components';
import { getFieldURL } from '@eeacms/volto-tags-block/helpers';

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

{
  /* <div className={`tag ${href ? 'link' : ''}`}>
<ConditionalLink
  condition={href}
  to={href ? getFieldURL(href) : null}
  openLinkInNewTab={openLinkInNewTab}
>
  {showTagIcon && <Icon className={`icon`} name="hashtag" />}
  <span className="name">{children}</span>
</ConditionalLink>
</div> */
}

{
  /* <a {...rest} className="tag link">
<Icon className={`icon`} name="hashtag" />
<span className="name">{children}</span>
</a> */
}
