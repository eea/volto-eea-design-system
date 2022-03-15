import React from 'react';
import { Container, Input } from 'semantic-ui-react';

import { useClickOutside } from '@eeacms/volto-eea-design-system/helpers';

function HeaderSearchPopUp({ onClose, triggerRefs = [] }) {
  const nodeRef = React.useRef();

  useClickOutside({ targetRefs: [nodeRef, ...triggerRefs], callback: onClose });

  return (
    <div id="search-box" ref={nodeRef}>
      <Container>
        <div className="wrapper">
          <Input
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
    </div>
  );
}

export default HeaderSearchPopUp;
