import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { isInternalURL } from '@plone/volto/helpers/Url/Url';

const Contact = ({ children, contacts }) => {
  return children?.length ? (
    children
  ) : (
    <div
      className={cx(
        'contact-wrapper',
        contacts?.length > 5 ? 'many-contacts' : '',
      )}
    >
      {contacts?.map((contact, index) => (
        <div className="contact" key={index}>
          {isInternalURL(contact.url) ? (
            <Link to={contact.url} className="bold">
              {contact.text}
            </Link>
          ) : (
            <a
              href={contact.url}
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
                  {isInternalURL(child.url) ? (
                    <Link to={child.url} key={index}>
                      {child.text}
                    </Link>
                  ) : (
                    <a
                      href={child.url}
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
};

Contact.propTypes = {
  contacts: PropTypes.array,
  header: PropTypes.string,
};

export default Contact;
