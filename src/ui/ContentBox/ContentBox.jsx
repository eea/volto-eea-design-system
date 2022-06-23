import React from 'react';
import { Container } from 'semantic-ui-react';

function ContentBox({ children, ...rest }) {
  return (
    <div className={`eea content-box ${rest.variant}`}>
      {rest.container ? (
        <Container className={'content-box-inner'}>{children}</Container>
      ) : (
        children
      )}
    </div>
  );
}

export default ContentBox;
