import React from 'react';

const FooterHeader = (props) => {
  return (
    <div className="theme-sites">
      <p className="header">{props.children}</p>
    </div>
  );
};
export default FooterHeader;
