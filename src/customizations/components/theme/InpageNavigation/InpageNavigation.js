import React from 'react';
import { Container, Icon } from 'semantic-ui-react';

function InpageNavigation({ linkId }) {
  return (
    <Container>
      <div
        id="inpage-navigation"
        onClick={() => window.scrollTo(0, 0)}
        role="none"
      >
        <div id="navigation-text-tablet">
          <Icon name="chevron up" />
        </div>
        <div id="navigation-text-desktop">
          <Icon name="chevron up" /> Top
        </div>
      </div>
    </Container>
  );
}

export default InpageNavigation;
