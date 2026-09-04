import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';

const Description = (props) => {
  if (props.children) {
    return <div className="footer-description">{props.children}</div>;
  }

  return props.description ? (
    <Grid.Row>
      <div className="footer-description">
        <p>{props.description}</p>
      </div>
    </Grid.Row>
  ) : null;
};

Description.propTypes = {
  description: PropTypes.string,
};

export default Description;
