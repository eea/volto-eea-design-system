import React from 'react';
import { Transition } from 'semantic-ui-react';
import {
  Container,
  Divider,
  Grid,
  List,
  Icon,
  Accordion,
} from 'semantic-ui-react';

import { Link } from 'react-router-dom';
import { useClickOutside } from '@eeacms/volto-eea-design-system/helpers';

const createColumns = (item, length, renderMenuItem) => {
  let subArrays = [];
  let size = length;
  for (let i = 0; i < item.items.length; i += size) {
    subArrays.push(item.items.slice(i, i + size));
  }

  const column = subArrays.map((subArray, index) => (
    <Grid.Column key={index}>
      <List>
        {subArray.map((arrayItem, idx) => (
          <>{renderMenuItem(arrayItem, { className: 'item' })}</>
          // <Link role="listitem" className="item" to={arrayItem.url} key={idx}>
          //   {arrayItem.title}
          // </Link>
        ))}
      </List>
    </Grid.Column>
  ));

  return column;
};

const ItemGrid = ({ item, columns, length, renderMenuItem }) => (
  <>
    {/*<Link className="sub-title" to={item.url}>*/}
    {/*  {item.title}*/}
    {/*</Link>*/}
    {renderMenuItem(item, { className: 'sub-title' })}
    <Grid columns={columns}>{createColumns(item, length, renderMenuItem)}</Grid>
  </>
);

const Item = ({ item, icon = false, iconName, renderMenuItem }) => (
  <>
    {renderMenuItem(item, { className: 'sub-title' })}
    {/*<Link className="sub-title" to={item.url}>*/}
    {/*   {item.title}*/}
    {/*  {' '}*/}
    {/*</Link>*/}
    <List className="menu-list">
      {item.items.map((listItem, index) => (
        <Link role="listitem" className="item" to={listItem.url} key={index}>
          {icon && <Icon className={iconName} />}
          {listItem.title}
        </Link>
      ))}
    </List>
  </>
);

const Topics = ({ menuItem, renderMenuItem }) => (
  <Grid>
    {menuItem.items.map((section, index) => (
      <React.Fragment key={index}>
        {section.title === 'At a glance' ? (
          <Grid.Column width={3} id="at-a-glance">
            <Item
              item={section}
              icon={true}
              iconName="ri-leaf-line"
              renderMenuItem={renderMenuItem}
            />
          </Grid.Column>
        ) : (
          <Grid.Column width={9} key={index}>
            <ItemGrid
              item={section}
              columns={4}
              length={10}
              renderMenuItem={renderMenuItem}
            />
          </Grid.Column>
        )}
      </React.Fragment>
    ))}
  </Grid>
);

const Countries = ({ menuItem, renderMenuItem }) => (
  <Grid>
    <Grid.Column width={8}>
      {menuItem.items.map((section, index) => (
        <React.Fragment key={index}>
          {section.title === 'EEA member countries' && (
            <ItemGrid
              item={section}
              columns={5}
              length={7}
              renderMenuItem={renderMenuItem}
            />
          )}
        </React.Fragment>
      ))}
    </Grid.Column>
    <Grid.Column width={4}>
      <Grid columns={1} className="nested-grid">
        {menuItem.items.map((section, index) => (
          <React.Fragment key={index}>
            {section.title !== 'EEA member countries' && (
              <Grid.Column>
                <ItemGrid
                  item={section}
                  columns={2}
                  length={3}
                  renderMenuItem={renderMenuItem}
                />
              </Grid.Column>
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Grid.Column>
  </Grid>
);

const StandardMegaMenuGrid = ({ menuItem, renderMenuItem }) => (
  <Grid columns={4}>
    {menuItem.items.map((section, index) => (
      <Grid.Column key={index}>
        <Item item={section} renderMenuItem={renderMenuItem} />
      </Grid.Column>
    ))}
  </Grid>
);

const FirstLevelContent = ({ element }) => {
  const topics = element.title === 'Topics' ? true : false;

  const firstLevelPanels = [];
  let content;
  if (!topics) {
    element.items.forEach((item, index) => {
      let x = {};
      x.key = item['@id'];
      x.title = (
        <Accordion.Title key={`title=${index}`}>
          {item.title}
          <Icon className="ri-arrow-down-s-line" size="small" />
        </Accordion.Title>
      );
      x.content = (
        <Accordion.Content key={index}>
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
        {atAGlance &&
          atAGlance.items.map((item, index) => (
            <Link role="listitem" className="item" to={item.url} key={index}>
              {item.title}
            </Link>
          ))}
        <Link
          role="listitem"
          className="item"
          to={element.url}
          key={element['@id']}
        >
          A-Z Topics
        </Link>
      </List>
    );
  } else {
    content = (
      <List>
        {element.items.map((item, index) => (
          <Link role="listitem" className="item" to={item.url} key={index}>
            {item.title}
          </Link>
        ))}
      </List>
    );
  }

  return <>{content}</>;
};

const NestedAccordion = ({ menuItems }) => {
  const rootPanels = [];
  menuItems.forEach((element, index) => {
    let x = {};
    x.key = index;
    x.title = (
      <Accordion.Title key={`title-${index}`}>
        {element.title}
        <Icon className="ri-arrow-down-s-line" size="small" />
      </Accordion.Title>
    );
    x.content = (
      <Accordion.Content key={index}>
        <FirstLevelContent element={element} />
      </Accordion.Content>
    );
    rootPanels.push(x);
  });

  return <Accordion panels={rootPanels} />;
};

function HeaderMenuPopUp({
  menuItems,
  renderMenuItem,
  onClose,
  triggerRefs,
  activeItem,
  visible,
}) {
  const nodeRef = React.useRef();
  useClickOutside({ targetRefs: [nodeRef, ...triggerRefs], callback: onClose });

  const menuItem = menuItems.find(
    (current) => current.url === activeItem || current['@id'] === activeItem,
  );

  return (
    <Transition visible={visible} animation="slide down" duration={300}>
      <div id="mega-menu" ref={nodeRef}>
        <Container>
          {menuItem && (
            <div className="menu-content tablet hidden mobile hidden">
              <h3 className="title">{renderMenuItem(menuItem)}</h3>
              <Divider fitted />
              {menuItem.title === 'Topics' ? (
                <Topics menuItem={menuItem} renderMenuItem={renderMenuItem} />
              ) : menuItem.title === 'Countries' ? (
                <Countries
                  menuItem={menuItem}
                  renderMenuItem={renderMenuItem}
                />
              ) : (
                <StandardMegaMenuGrid
                  menuItem={menuItem}
                  renderMenuItem={renderMenuItem}
                />
              )}
            </div>
          )}
          <div className="tablet only mobile only">
            <NestedAccordion
              menuItems={menuItems}
              renderMenuItem={renderMenuItem}
            />
          </div>
        </Container>
      </div>
    </Transition>
  );
}

export default HeaderMenuPopUp;
