import React from 'react';

function PublicationCard({ children, ...rest }) {
  return <div className="eea publication card">{children}</div>;
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
  <div className="descripiton">
    <div className="tag">#{rest.tag}</div>
    <p className="text">{rest.descripiton}</p>
  </div>
);

export default PublicationCard;
