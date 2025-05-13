/**
 * Logo component.
 * @module components/theme/Logo/Logo
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';

/**
 * Logo component class.
 * @function Logo
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component.
 */
const Logo = ({
  src,
  invertedSrc,
  id,
  url,
  alt,
  title,
  inverted,
  width,
  height,
}) => {
  return (
    <Link to={url} title={title} className="logo">
      <Image
        src={inverted ? invertedSrc : src}
        alt={alt}
        title={title}
        className="eea-logo"
        id={id}
        {...(width ? { width: width } : {})}
        {...(height ? { height: height } : {})}
      />
    </Link>
  );
};

export default Logo;
