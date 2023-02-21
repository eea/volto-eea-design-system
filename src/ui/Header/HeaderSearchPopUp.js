import React from 'react';
import { Container, Input } from 'semantic-ui-react';

import { useClickOutside } from '@eeacms/volto-eea-design-system/helpers';

function HeaderSearchPopUp({ onClose, searchInputRef, triggerRefs = [] }) {
  const nodeRef = React.useRef();

  useClickOutside({ targetRefs: [nodeRef, ...triggerRefs], callback: onClose });

  return (
    <div id="search-box" ref={nodeRef}>
      <div className="wrapper">
        <Container>
          <form>
            <Input
              ref={searchInputRef}
              className="search"
              icon={{ className: 'ri-search-line', link: true }}
              placeholder="Search..."
              fluid
            />
          </form>
        </Container>

        <div className="advanced-search">
          <Container>
            <div>For more search options</div>
            <a
              href="/"
              className="ui button white inverted"
              title="Advanced search"
            >
              Go to advanced search
            </a>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default HeaderSearchPopUp;
