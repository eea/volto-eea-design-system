import React from 'react';

export function Col({ desktop, tablet, mobile, style, children }) {
  return (
    <div
      className={`col-lg-${desktop} col-md-${tablet} col-sm-${mobile}`}
      style={style}
    >
      {children}
    </div>
  );
}
