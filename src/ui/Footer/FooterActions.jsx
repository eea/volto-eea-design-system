import React from 'react';
import { Link } from 'react-router-dom';

const FooterActions = (props) => {
  if (props.children) {
    return <div>{props.children}</div>;
  }

  return (
    <div className="menu">
      {props.actions &&
        props.actions.map((action, index) => (
          <Link to={action.link} key={index}>
            {action.copy && <>&copy;</>}
            {action.title}
          </Link>
        ))}
    </div>
  );
};

export default FooterActions;
