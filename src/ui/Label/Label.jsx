import React from 'react';
import { Label } from 'semantic-ui-react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const EEALabel = ({
  content,
  pointing = false,
  className,
  medium,
  high,
  highlight,
  icon,
  children,
}) => {
  return children ? (
    <Label>{children}</Label>
  ) : (
    <Label
      content={content}
      pointing={pointing}
      className={cx(className, {
        medium: medium,
        high: high,
        highlight: highlight,
      })}
      icon={icon}
    />
  );
};

EEALabel.propTypes = {
  content: PropTypes.string.isRequired,
  pointing: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['below', 'left', 'right']),
  ]),
  className: PropTypes.string,
  medium: PropTypes.bool,
  high: PropTypes.bool,
  highlight: PropTypes.bool,
  icon: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.node,
    PropTypes.string,
  ]),
};

export default EEALabel;
