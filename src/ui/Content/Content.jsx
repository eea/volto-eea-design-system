import React from 'react';

function Content({ children, ...rest }) {
  return (
    <div {...rest} className={`eea content ${rest.className || ''}`}>
      {children}
    </div>
  );
}

Content.Info = ({ children, ...rest }) => (
  <div {...rest} className={`row info ${rest.className || ''}`}>
    {children}
  </div>
);

Content.Content = ({ children, ...rest }) => (
  <div {...rest} className={`row content ${rest.className || ''}`}>
    {children}
  </div>
);

Content.Actions = ({ children, ...rest }) => (
  <div {...rest} className={`row actions ${rest.className || ''}`}>
    {children}
  </div>
);

Content.Date = ({ children, ...rest }) => (
  <div {...rest} className={`date ${rest.className || ''}`}>
    {children}
  </div>
);


export default Content;
