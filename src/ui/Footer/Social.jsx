import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Social = (props) => {
  if (props.children) {
    return <div>{props.children}</div>;
  }

  return (
    <div className="social">
      {props.social.map((item, index) => (
        <a href={item.link} aria-label={`${item.name} link`} key={index}>
          <Icon className={item.icon}></Icon>
        </a>
      ))}
    </div>
  );
};

Social.propTypes = {
  social: PropTypes.array,
};

export default Social;
