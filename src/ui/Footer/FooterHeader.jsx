import React from 'react';

const FooterHeader = (props) => {
  return (
    <div className="theme-sites mobile hidden">
      <p className="header text-center">{props.children}</p>
    </div>
  );
};
export default FooterHeader;
