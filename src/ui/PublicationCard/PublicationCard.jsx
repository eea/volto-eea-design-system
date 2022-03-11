import React from 'react';

function PublicationCard({ children, ...rest }) {
  return (
    <div className="eea publication card">
      <a href={rest.href}>{children}</a>
    </div>
  );
}

PublicationCard.Header = ({ children, ...rest }) => (
  <div
    className="header"
    style={rest.image ? { backgroundImage: `url(${rest.image_url})` } : {}}
  >
    {children}
  </div>
);

PublicationCard.Info = ({ children, ...rest }) => (
  <div className="description">
    <div className="tag">#{rest.tag}</div>
    <div className="text">{rest.description}</div>
  </div>
);

export default PublicationCard;
