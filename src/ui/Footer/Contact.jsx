import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { isInternalURL } from '@plone/volto/helpers/Url/Url';

const Contact = ({ children, contacts }) =>
  children?.length ? (
    children
  ) : (
    <div className="contact-block">
      {contacts?.map((contact, index) => (
        <div className="contact" key={index}>
          {isInternalURL(contact.link) ? (
            <Link to={contact.link} className="bold">
              {contact.text}
            </Link>
          ) : (
            <a
              href={contact.link}
              target={'_blank'}
              rel="noopener noreferrer"
              className={'bold'}
            >
              {contact.text}
            </a>
          )}
          {contact.children && (
            <div className="subcontact">
              {contact.children.map((child, index) => (
                <React.Fragment key={index}>
                  {isInternalURL(child.link) ? (
                    <Link to={child.link} key={index}>
                      {child.text}
                    </Link>
                  ) : (
                    <a
                      href={child.link}
                      target={'_blank'}
                      rel="noopener noreferrer"
                    >
                      {child.text}
                    </a>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

Contact.propTypes = {
  contacts: PropTypes.array,
  header: PropTypes.string,
};

export default Contact;
