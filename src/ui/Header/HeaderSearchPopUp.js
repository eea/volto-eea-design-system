import React from 'react';
import { Container, Input, Button, Icon } from 'semantic-ui-react';

function HeaderSearchPopUp() {
  return (
    <div id="eea-search-box">
      <Container>
        <div className="eea-search-body">
          <Input
            id="eea-search-input"
            icon="search"
            placeholder="Search..."
            fluid
          />
          <div className="eea-advanced-search-button">
            <Button icon labelPosition="left">
              <Icon name="search" />
              Advanced Search
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeaderSearchPopUp;
