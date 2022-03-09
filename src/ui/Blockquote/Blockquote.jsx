import React from 'react';
import cx from 'classnames';

function Blockquote({ children, className, ...rest }) {
  return (
    <div className={cx('eea blockquote', className)} {...rest}>
      <blockquote className="quote">{children}</blockquote>
    </div>
  );
}

function BlockquoteElement(props) {
  return <Blockquote className="slate" {...props} />;
}

Blockquote.Content = ({ children, as: As, ...rest }) =>
  As ? <As {...rest}>{children}</As> : children;

Blockquote.Meta = ({ children }) => <div className="meta">{children}</div>;

export { BlockquoteElement };

export default Blockquote;
