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
          {contact.text}
        </div>
      ))}
      {address && <p className="address">{address}</p>}
    </>
  );
Contact.propTypes = {
  contacts: PropTypes.shape({
    header: PropTypes.string,
    contacts: PropTypes.array,
  }),
};

export default Contact;
