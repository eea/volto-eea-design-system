import React from 'react';
import { Container, Input } from 'semantic-ui-react';

import { useClickOutside } from '@eeacms/volto-eea-design-system/helpers';

function HeaderSearchPopUp({ onClose, searchInputRef, triggerRefs = [] }) {
  const nodeRef = React.useRef();

  useClickOutside({ targetRefs: [nodeRef, ...triggerRefs], callback: onClose });

  return (
    <div id="search-box" ref={nodeRef}>
      <form>
        <Container>
          <div className="wrapper">
            <Input
              ref={searchInputRef}
              className="search"
              icon={{ className: 'ri-search-line', link: true }}
              placeholder="Search..."
              fluid
            />
            {/* <div className="action">
            <Button icon labelPosition="left" className="search">
              <Icon name="search" />
              Advanced Search
            </Button>
          </div> */}
          </div>
        </Container>
      </form>

      <div className="advanced-search">
        <Container>
          <p>
            Looking for more information? Try searching the full EEA website
            content
          </p>
          <a
            href="/"
            className="ui button white inverted"
            title="Advanced search"
          >
            Go to full site search
          </a>
        </Container>
      </div>
    </div>
  );
}

export default HeaderSearchPopUp;
