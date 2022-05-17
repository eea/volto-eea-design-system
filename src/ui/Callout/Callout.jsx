import React from 'react';

function Callout({ children, as, bold, ...rest }) {
  const As = as || 'div';
  return (
    <As className="eea callout" {...rest}>
      {bold ? <strong>{children}</strong> : children}
    </As>
  );
}

export default Callout;
