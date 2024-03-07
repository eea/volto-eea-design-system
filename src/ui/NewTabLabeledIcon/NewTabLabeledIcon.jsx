import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

function NewTabLabeledIcon({ children, ...rest }) {
  return (
    <div className="eea new tab labeled icon">
      <Button target="_blank" href={rest.link} as="a" className="text">
        {children}
      </Button>
    </div>
  );
}

NewTabLabeledIcon.Label = ({ children, ...rest }) => {
  return <div className="label">{children}</div>;
};

NewTabLabeledIcon.Icon = ({ children, ...rest }) => {
  return (
    <div className="icon wrapper">
      <Icon className={rest.icon} />
    </div>
  );
};

export default NewTabLabeledIcon;
