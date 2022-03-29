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
      <div className="content">{children}</div>
    </blockquote>
  );
}

Pullquote.Quote = ({ children, as: As, ...rest }) => (
  <div className="quotes wrapper">
    <Icon className="ri-double-quotes-l"></Icon>
    {As ? (
      <As className="quote" {...rest}>
        {children}
      </As>
    ) : (
      <p className="quote">{children}</p>
    )}
    <Icon className="ri-double-quotes-r"></Icon>
  </div>
);

Pullquote.Author = ({ children, ...rest }) => (
  <p className="author" {...rest}>
    {children}
  </p>
);

Pullquote.Metadata = ({ children, ...rest }) => (
  <p className="meta" {...rest}>
    {children}
  </p>
);
export default Pullquote;
