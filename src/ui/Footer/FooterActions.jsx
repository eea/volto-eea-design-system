import React from 'react';

const FooterActions = (props) => {
  if (props.children) {
    return <div>{props.children}</div>;
  }

  return (
    <div className="menu">
      {props.actions &&
        props.actions.map((action, index) => (
          <a href={action.link} key={index}>
            {action.copy && <>&copy;</>}
            {action.title}
          </a>
        ))}
    </div>
  );
};

export default FooterActions;
