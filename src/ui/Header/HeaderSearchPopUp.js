import React from 'react';
import { Container, Input, Button, Icon } from 'semantic-ui-react';

function HeaderSearchPopUp() {
  return (
    <div id="search-box">
      <Container>
        <div className="wrapper">
          <Input
            className="search"
            icon="search"
            placeholder="Search..."
            fluid
          />
          <div className="action">
            <Button icon labelPosition="left" className="search">
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
