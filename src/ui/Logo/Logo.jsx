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
const Logo = ({ src, id, url, alt, title }) => {
  return (
    <Link to={url} title={title}>
      <Image
        src={src}
        alt={alt}
        title={title}
        //height={64}
        className="eea-logo"
        id={id}
      />
    </Link>
  );
};

export default Logo;
