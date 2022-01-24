import React from 'react';
import { Icon } from 'semantic-ui-react';

function Pullquote({ quote, source, quotePosition }) {
  return (
    <blockquote className={`pullquote eea-pullquote-${quotePosition}`}>
      <Icon name="quote left"></Icon>
      <div className="eea-pullquote-body">
        <h4 className="eea-pullquote-quote">{quote}</h4>
        <p className="eea-pullquote-author">{source}</p>
      </div>
      <Icon className="eea-quote-right" name="quote right"></Icon>
    </blockquote>
  );
}

export default Pullquote;
