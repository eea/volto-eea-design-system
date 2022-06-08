import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Contact = ({ children, contacts, header, address }) =>
  children?.length ? (
    children
  ) : (
    <div className="contact-block">
      <p className="header">{header}</p>
      {contacts?.map((contact, index) => (
        <div className="contact" key={index}>
          <Link to={contact.link}>
            <Icon className={contact.icon} size="big"></Icon>
            {contact.text}
          </Link>
        </div>
      ))}
      {address && <p className="address">{address}</p>}
    </div>
  );

Contact.propTypes = {
  contacts: PropTypes.array,
  header: PropTypes.string,
  address: PropTypes.string,
};

export default Contact;
