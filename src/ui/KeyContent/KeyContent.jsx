import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

KeyContent.propTypes = {
  title: PropTypes.string,
};

function KeyContent({ children, ...rest }) {
  return (
    <div className="eea key-content" {...rest}>
      {children}
    </div>
  );
}

KeyContent.Title = ({ children }) => <h2 className="title">{children}</h2>;
KeyContent.List = ({ children, ...rest }) => (
  <List bulleted horizontal={false} items={rest.items}></List>
);

export default KeyContent;
