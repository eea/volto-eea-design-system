import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

Quote.propTypes = {
  quote: PropTypes.string,
  source: PropTypes.string,
  quotePosition: PropTypes.oneOf(['left', 'right', 'none', 'inherit']),
};

function Quote({ children, ...rest }) {
  return (
    <blockquote className={`eea quote ${rest.quotePosition}`}>
      <div className="content">{children}</div>
    </blockquote>
  );
}

Quote.Quote = ({ children, as: As, ...rest }) => (
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

Quote.Source = ({ children, ...rest }) => (
  <p className="source" {...rest}>
    {children}
  </p>
);

Quote.Extra = ({ children, ...rest }) => (
  <p className="info" {...rest}>
    {children}
  </p>
);
export default Quote;
