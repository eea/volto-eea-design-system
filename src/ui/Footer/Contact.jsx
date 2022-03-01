import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Contact = (props) => {
  if (props.children) {
    return <div>{props.children}</div>;
  }
  return (
    <>
      <p className="header">{props.contacts.header}</p>
      {props.contacts.contacts.length > 0 &&
        props.contacts.contacts.map((contact, index) => (
          <div className="contact" key={index}>
            <Icon name={contact.icon} size="big"></Icon>
            <a href={contact.link}>{contact.text}</a>
          </div>
        ))}
      {props.contacts.address && (
        <p className="address">{props.contacts.address}</p>
      )}
    </>
  );
};

Contact.propTypes = {
  contacts: PropTypes.shape({
    header: PropTypes.string,
    contacts: PropTypes.array,
  }),
};

export default Contact;
