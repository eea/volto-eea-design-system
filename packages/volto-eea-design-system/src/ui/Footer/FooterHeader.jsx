import React from 'react';

const FooterHeader = (props) => {
  return props.children ? (
    <h2 className="footer-header text-center">{props.children}</h2>
  ) : null;
};
export default FooterHeader;
