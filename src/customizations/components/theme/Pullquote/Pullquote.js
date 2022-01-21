import React from 'react';
import { Icon } from 'semantic-ui-react';

function Pullquote({ quote, source, content, quotePosition }) {
  return (
    <div>
      <blockquote className={`float-${quotePosition}`}>
        <p>
          <Icon name="quote left"></Icon>
          {quote}
        </p>
        <p className="pullquote-author">
          {source}
          <Icon name="quote right"></Icon>
        </p>
      </blockquote>

      <div>{content}</div>
    </div>
  );
}

export default Pullquote;
