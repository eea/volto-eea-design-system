import React from 'react';

export function Col({
  desktop,
  tablet,
  mobile,
  desktopOffset = false,
  tabletOffset = false,
  mobileOffset = false,
  style,
  children,
}) {
  return (
    <div
      className={`col-lg${desktopOffset ? '-offset' : ''}-${desktop} col-md${
        tabletOffset ? '-offset' : ''
      }-${tablet} col-sm${mobileOffset ? '-offset' : ''}-${mobile}`}
      style={style}
    >
      {children}
    </div>
  );
}
