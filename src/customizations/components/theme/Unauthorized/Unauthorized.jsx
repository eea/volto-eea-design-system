/**
 * @module components/theme/Unauthorized/Unauthorized
 */

import React, { useEffect } from 'react';
import { useLocation, Link, useHistory } from 'react-router-dom';
import { getBaseUrl } from '@plone/volto/helpers';
import { Container, Button } from 'semantic-ui-react';

import { FormattedMessage } from 'react-intl';

import { withServerErrorCode } from '@plone/volto/helpers/Utils/Utils';

/**
 * unauthorized function.
 * @function Unauthorized
 * @returns {string} Markup of the unauthorized page.
 */

const Unauthorized = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const base_pathname = getBaseUrl(pathname);
  const login = `${base_pathname}/login`;
  const history = useHistory();
  const [countdown, setCountdown] = React.useState(5);

  useEffect(() => {
    const login_with_return = login + `?return_url=${pathname}`;
    const timer = setTimeout(() => {
      return history.push(login_with_return);
    }, 5000);
    return () => clearTimeout(timer);
  }, [history, login, pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <Container className="view-wrapper">
      <h1>
        <FormattedMessage id="Unauthorized" defaultMessage="Unauthorized" />
      </h1>
      <h3>
        <FormattedMessage
          id="Forbidden, you will be redirected to the login screen in "
          defaultMessage="Forbidden, you will be redirected to the login screen in "
        />
        <span id="redirect-countdown">{countdown}</span>.
      </h3>

      <p className="description">
        <FormattedMessage id="Click" defaultMessage="Click" />
        <Link
          className={'ui mini compact button my-half unauthorized-buttons'}
          to={login}
        >
          <FormattedMessage id="Log in" defaultMessage="Log in" />
        </Link>
        <FormattedMessage
          id="to get to login screen or click"
          defaultMessage="to get to login screen or click"
        />
        <Button
          size={'mini'}
          compact
          onClick={() => history.goBack()}
          className={'my-half unauthorized-buttons'}
        >
          <FormattedMessage id="Get back" defaultMessage="Get back" />
        </Button>
        <FormattedMessage
          id="to get to the previous location"
          defaultMessage="to get to the previous location"
        />
        .
      </p>
    </Container>
  );
};

export default withServerErrorCode(401)(Unauthorized);
