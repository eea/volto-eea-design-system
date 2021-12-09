/**
 * Logo component.
 * @module components/theme/Logo/Logo
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { defineMessages, useIntl } from 'react-intl';
import { Image } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import config from '@plone/volto/registry';

import LogoImage from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/eea-logo.png';

const messages = defineMessages({
  site: {
    id: 'Site',
    defaultMessage: 'Site',
  },
  eeasite: {
    id: 'European Environment Agency',
    defaultMessage: 'European Environment Agency',
  },
});

/**
 * Logo component class.
 * @function Logo
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component.
 */
const Logo = () => {
  const lang = useSelector((state) => state.intl.locale);
  const intl = useIntl();
  const url = config.settings.isMultilingual ? `/${lang}` : '/';

  return (
    <Link to={url} title={intl.formatMessage(messages.site)}>
      <Image
        src={LogoImage}
        alt={intl.formatMessage(messages.eeasite)}
        title={intl.formatMessage(messages.eeasite)}
        height={64}
        className="eea-logo"
      />
    </Link>
  );
};

export default Logo;
