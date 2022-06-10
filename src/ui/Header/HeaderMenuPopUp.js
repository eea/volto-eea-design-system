import React from 'react';
import {
  Container,
  Divider,
  Grid,
  List,
  Icon,
  Accordion,
} from 'semantic-ui-react';
import { useClickOutside } from '@eeacms/volto-eea-design-system/helpers';

const createColumns = (item, length) => {
  let subArrays = [];
  let size = length;
  for (let i = 0; i < item.items.length; i += size) {
    subArrays.push(item.items.slice(i, i + size));
  }

  const column = subArrays.map((subArray, index) => (
    <Grid.Column key={index}>
      <List>
        {subArray.map((arrayItem) => (
          <List.Item key={arrayItem['@id']} as="a" href={arrayItem.href}>
            {arrayItem.title}
          </List.Item>
        ))}
      </List>
    </Grid.Column>
  ));

  return column;
};

const ItemGrid = ({ item, columns, length }) => (
  <>
    <a className="sub-title" href={item.href}>
      {item.title}
    </a>
    <Grid columns={columns}>{createColumns(item, length)}</Grid>
  </>
);

const Item = ({ item, icon = false, iconName }) => (
  <>
    <a className="sub-title" href={item.href}>
      {item.title}
    </a>
    <List className="menu-list">
      {item.items.map((listItem) => (
        <List.Item key={listItem['@id']} as="a" href={listItem.href}>
          {icon && <Icon className={iconName} />}
          {listItem.title}
        </List.Item>
      ))}
    </List>
  </>
);

const Topics = ({ menuItem }) => (
  <Grid>
    {menuItem.items.map((section) => (
      <React.Fragment key={section['@id']}>
        {section.title === 'At a glance' ? (
          <Grid.Column width={3} id="at-a-glance" key={section['@id']}>
            <Item item={section} icon={true} iconName="ri-leaf-line" />
          </Grid.Column>
        ) : (
          <Grid.Column width={9} key={section['@id']}>
            <ItemGrid item={section} columns={4} length={10} />
          </Grid.Column>
        )}
      </React.Fragment>
    ))}
  </Grid>
);

const Countries = ({ menuItem }) => (
  <Grid>
    <Grid.Column width={8}>
      {menuItem.items.map((section) => (
        <React.Fragment key={section['@id']}>
          {section.title === 'EEA member countries' && (
            <ItemGrid item={section} columns={5} length={7} />
          )}
        </React.Fragment>
      ))}
    </Grid.Column>
    <Grid.Column width={4}>
      <Grid columns={1} className="nested-grid">
        {menuItem.items.map((section) => (
          <React.Fragment key={section['@id']}>
            {section.title !== 'EEA member countries' && (
              <Grid.Column>
                <ItemGrid item={section} columns={2} length={3} />
              </Grid.Column>
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Grid.Column>
  </Grid>
);

const StandardMegaMenuGrid = ({ menuItem }) => (
  <Grid columns={4}>
    {menuItem.items.map((section) => (
      <Grid.Column key={section['@id']}>
        <Item item={section} />
      </Grid.Column>
    ))}
  </Grid>
);

const FirstLevelContent = ({ element }) => {
  const topics = element.title === 'Topics' ? true : false;

  const firstLevelPanels = [];
  let content;
  if (!topics) {
    element.items.forEach((item) => {
      let x = {};
      x.key = item['@id'];
      x.title = (
        <Accordion.Title>
          {item.title}
          <Icon className="ri-arrow-down-s-line" size="small" />
        </Accordion.Title>
      );
      x.content = (
        <Accordion.Content>
          <SecondLevelContent element={item} />
        </Accordion.Content>
      );
      firstLevelPanels.push(x);
    });
    content = <Accordion.Accordion panels={firstLevelPanels} />;
  } else {
    content = <SecondLevelContent element={element} topics={true} />;
  }
  return <>{content}</>;
};

const SecondLevelContent = ({ element, topics = false }) => {
  let content;
  if (topics) {
    const atAGlance = element.items.find(
      (element) => element.title === 'At a glance',
    );
    content = (
      <List>
        {atAGlance.items.map((item) => (
          <List.Item key={item['@id']} as="a" href={item.href}>
            {item.title}
          </List.Item>
        ))}
        <List.Item as="a" href="/#" key={'a-z-topics'}>
          A-Z Topics
        </List.Item>
      </List>
    );
  } else {
    content = (
      <List>
        {element.items.map((item) => (
          <List.Item as="a" href={item.href} key={item['@id']}>
            {item.title}
          </List.Item>
        ))}
      </List>
    );
  }

  return <>{content}</>;
};

const NestedAccordion = ({ menuItems }) => {
  const rootPanels = [];
  menuItems.forEach((element) => {
    let x = {};
    x.key = element['@id'];
    x.title = (
      <Accordion.Title>
        {element.title}
        <Icon className="ri-arrow-down-s-line" size="small" />
      </Accordion.Title>
    );
    x.content = (
      <Accordion.Content>
        <FirstLevelContent element={element} />
      </Accordion.Content>
    );
    rootPanels.push(x);
  });

  return <Accordion panels={rootPanels} />;
};

function HeaderMenuPopUp({
  menuItems,
  onClose,
  triggerRefs,
  renderMenuItem,
  activeItem,
}) {
  const nodeRef = React.useRef();
  useClickOutside({ targetRefs: [nodeRef, ...triggerRefs], callback: onClose });

  const menuItem = menuItems.find((current) => current['@id'] === activeItem);

  return (
    <div id="mega-menu" ref={nodeRef}>
      <Container>
        {menuItem && (
          <div className="menu-content tablet hidden mobile hidden">
            <h3 className="title">
              <a href={menuItem.href}>{menuItem.title}</a>
            </h3>
            <Divider fitted />
            {menuItem.title === 'Topics' ? (
              <Topics menuItem={menuItem} />
            ) : menuItem.title === 'Countries' ? (
              <Countries menuItem={menuItem} />
            ) : (
              <StandardMegaMenuGrid menuItem={menuItem} />
            )}
          </div>
        )}

        <div className="tablet only mobile only">
          <NestedAccordion menuItems={menuItems} />
        </div>
      </Container>
    </div>
  );
}

export default HeaderMenuPopUp;
