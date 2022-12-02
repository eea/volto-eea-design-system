import React from 'react';
import PropTypes from 'prop-types';

Copyright.propTypes = {
  copyrightPosition: PropTypes.oneOf(['left', 'right']),
  colorVariant: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'tertiary',
  ]),
};

function Copyright({ children, ...rest }) {
  return (
    <div className={`eea copyright ${rest.copyrightPosition}`}>
      <div
        className={`${
          rest.colorVariant === 'default'
            ? 'wrapper'
            : 'wrapper color-fg-' + rest.colorVariant
        }`}
      >
        {children}
      </div>
    </div>
  );
}

Copyright.Icon = ({ children, ...rest }) => (
  <span {...rest} className={'icon-wrapper'}>
    {children}
  </span>
);

Copyright.Text = ({ children, ...rest }) => (
  <span {...rest} className={'icon-content'}>
    {children}
  </span>
);
export default Copyright;
