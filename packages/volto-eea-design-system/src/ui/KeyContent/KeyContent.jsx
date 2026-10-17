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
  <List as="ul" bulleted horizontal={false}>
    {rest.items.map((item, index) => (
      <List.Item as="li" className="item" key={index}>
        {item}
      </List.Item>
    ))}
  </List>
);

export default KeyContent;
