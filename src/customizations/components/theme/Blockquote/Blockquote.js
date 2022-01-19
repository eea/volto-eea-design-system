import React from 'react';

function Blockquote({ citation, author }) {
  return (
    <div className="eeaBlockquote noQuotes">
      <blockquote className="blockquoteQuote">
        &#8220;{citation}&#8221;
        <div
          className="blockquoteAuthor"
          style={{ fontWeight: 'bold', marginTop: '20px' }}
        >
          {author}
        </div>
      </blockquote>
    </div>
  );
}

export default Blockquote;
