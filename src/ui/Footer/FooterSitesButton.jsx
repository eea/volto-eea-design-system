import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { isInternalURL, flattenToAppURL } from '@plone/volto/helpers';

const SitesButton = (props) => {
  if (props.children) {
    return <div>{props.children}</div>;
  }

  //fallback to props
  return (
    <div className="theme-sites">
      <Button
        className="theme-sites-button"
        onClick={() => {
          if (__CLIENT__ && window) {
            window.location.assign(
              isInternalURL(props.hrefButton)
                ? flattenToAppURL(props.hrefButton)
                : props.hrefButton,
            );
          }
        }}
      >
        {props.buttonName}
      </Button>
    </div>
  );
};

SitesButton.propTypes = {
  hrefButton: PropTypes.string,
};

export default SitesButton;
