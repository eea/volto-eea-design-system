import React, { useState } from 'react';
import { Menu, Segment, Grid, Header } from 'semantic-ui-react';

function InpageNavigation() {
  const items = [
    { key: 'item 1', active: true, name: 'ITEM 1' },
    { key: 'item 2', name: 'ITEM 2' },
    { key: 'item 3', name: 'ITEM 3' },
    { key: 'item 4', name: 'ITEM 4' },
  ];

  const [activeItem, setActiveItem] = useState(
    items.find((item) => item.active === true).key,
  );
  const [activeContent, setActiveContent] = useState(
    items.find((item) => item.active === true).key,
  );

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    setActiveContent(name);
  };

  return (
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column width={1}>
          <Menu text vertical>
            {items.map((item, index) => (
              <Menu.Item
                key={index}
                name={item.key}
                active={activeItem === item.key}
                onClick={handleItemClick}
              >
                {item.name}
              </Menu.Item>
            ))}
          </Menu>
        </Grid.Column>
        <Grid.Column width={11}>
          <Segment vertical>
            <Header>{activeContent}</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              eget ipsum finibus, tincidunt leo at, pellentesque libero. Aenean
              ullamcorper massa consectetur commodo facilisis. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Fusce lorem
              nibh, mollis eget quam ac, maximus luctus nunc. Nunc in ex lacus.
              Integer sit amet vehicula est. Integer tempor mollis efficitur.
              Nulla bibendum bibendum sagittis. Nullam tincidunt dapibus velit
              sed gravida. Sed laoreet diam turpis, ac vehicula dolor
              scelerisque vestibulum. Pellentesque eget odio dui. Vestibulum
              imperdiet tellus vitae nibh ultricies, at aliquam eros aliquam.
              Phasellus tristique eros ac mauris elementum porta. Pellentesque
              pellentesque neque eget leo tempor, in placerat sem ullamcorper.
              Nulla non auctor erat, id cursus erat. Curabitur pulvinar
              tincidunt metus, nec pellentesque enim imperdiet vel. Phasellus
              turpis elit, vulputate in ultricies vel, iaculis ut libero.
              Aliquam pretium suscipit massa, ut venenatis metus tincidunt et.
              Vivamus condimentum laoreet dapibus. Nam tincidunt, lectus ac
              vehicula gravida, lectus nisi accumsan purus, quis tempus dolor
              lorem vitae libero. Mauris posuere nunc purus, a vestibulum dolor
              condimentum vitae. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia curae; Aliquam posuere nulla
              vitae felis vestibulum laoreet. Pellentesque finibus urna mauris.
              Aenean a sem varius, placerat turpis a, volutpat nunc. Sed porta
              enim rhoncus imperdiet efficitur. Nam sed augue sed ex commodo
              placerat ut ut sem. Aenean faucibus nisl ut ligula sagittis, sit
              amet malesuada leo laoreet. Nam sodales id augue vitae varius.
              Nulla lectus enim, molestie ac tellus ut, aliquet condimentum
              justo. Fusce a magna convallis, blandit lorem eu, accumsan tellus.
              Vivamus vitae nisl eu ante consequat tincidunt. Quisque vehicula
              posuere interdum. Nullam faucibus augue non mi porttitor cursus.
              Integer facilisis massa nisl, eget condimentum metus egestas id.
              Suspendisse vitae urna tortor. Nullam lobortis diam mauris, sit
              amet blandit risus posuere a. Aenean at risus quam. Suspendisse in
              ipsum eros.
            </p>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default InpageNavigation;
