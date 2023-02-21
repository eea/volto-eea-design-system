import React from 'react';

const FooterHeader = (props) => {
  return (
    <div className="theme-sites">
      <h3 className="header text-center">{props.children}</h3>
    </div>
  );
};
export default FooterHeader;
