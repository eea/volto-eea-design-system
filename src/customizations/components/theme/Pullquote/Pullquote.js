import React from 'react';
import { Icon } from 'semantic-ui-react';

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
