import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

Pullquote.propTypes = {
  quote: PropTypes.string,
  source: PropTypes.string,
  quotePosition: PropTypes.oneOf(['left', 'right', 'none', 'inherit']),
};

function Pullquote({ quote, source, quotePosition }) {
  return (
    <blockquote className={`eea pullquote ${quotePosition}`}>
      <Icon name="quote left"></Icon>
      <div className="content">
        <h4 className="quote">{quote}</h4>
        <p className="author">{source}</p>
      </div>
      <Icon className="quote right" name="quote right"></Icon>
    </blockquote>
  );
}

export default Pullquote;
