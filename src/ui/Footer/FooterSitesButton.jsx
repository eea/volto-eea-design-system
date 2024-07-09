import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const Sites = (props) => {
  const history = useHistory();
  if (props.children) {
    return <div>{props.children}</div>;
  }

  //fallback to props
  return (
    <div
      className="theme-sites"
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <Button
        style={{
          background: 'transparent',
          fontSize: '1.2rem',
          padding: '1rem 2rem',
          color: 'white',
          border: '1px solid white',
        }}
        onClick={() => {
          history.push(props.hrefButton || '');
        }}
      >
        {props.buttonName}
      </Button>
    </div>
  );
};

Sites.propTypes = {
  sites: PropTypes.array,
};

export default Sites;
