import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Contact = ({ children, contacts, header, address }) =>
  children?.length ? (
    children
  ) : (
    <>
      <p className="header">{header}</p>
      {contacts?.map((contact, index) => (
        <div className="contact" key={index}>
          <Icon name={contact.icon} size="big"></Icon>
          <a href={contact.link}>{contact.text}</a>
        </div>
      ))}
      {address && <p className="address">{address}</p>}
    </>
  );

Contact.propTypes = {
  contacts: PropTypes.array,
  header: PropTypes.string,
  address: PropTypes.string,
};

export default Contact;
