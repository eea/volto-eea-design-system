import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

Pullquote.propTypes = {
  quote: PropTypes.string,
  source: PropTypes.string,
  quotePosition: PropTypes.oneOf(['left', 'right', 'none', 'inherit']),
};

function Pullquote({ children, ...rest }) {
  return (
    <blockquote className={`eea pullquote ${rest.quotePosition}`}>
      <Icon name="quote left"></Icon>
      <div className="content">{children}</div>
      <Icon className="quote right" name="quote right"></Icon>
    </blockquote>
  );
}

Pullquote.Quote = ({ children, as: As, ...rest }) =>
  As ? (
    <As className="quote" {...rest}>
      {children}
    </As>
  ) : (
    <h4 className="quote">{children}</h4>
  );

Pullquote.Author = ({ children, ...rest }) => (
  <p className="author" {...rest}>
    {children}
  </p>
);
export default Pullquote;
