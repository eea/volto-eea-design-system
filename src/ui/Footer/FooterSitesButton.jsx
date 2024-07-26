import React from 'react';
import { Button } from 'semantic-ui-react';

import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const SitesButton = (props) => {
  const history = useHistory();
  if (props.children) {
    return <div>{props.children}</div>;
  }

  //fallback to props
  return (
    <div className="theme-sites">
      <Button
        className="theme-sites-button"
        onClick={() => {
          history.push(props.hrefButton || '');
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
