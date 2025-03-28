import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Social = (props) => {
  if (props.children) {
    return <div className="social">{props.children}</div>;
  }

  return props.social && props.social.length > 0 ? (
    <Grid.Row>
      <span className="social">
        {props.social?.map((item, index) => (
          <a href={item.url} aria-label={`${item.name} link`} key={index}>
            <Icon className={item.icon}></Icon>
          </a>
        ))}
      </span>
    </Grid.Row>
  ) : null;
};

Social.propTypes = {
  social: PropTypes.array,
};

export default Social;
