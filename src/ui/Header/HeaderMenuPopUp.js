import React, { useState, useEffect } from 'react';
import { Transition } from 'semantic-ui-react';
import { Container, Grid, List, Icon, Accordion } from 'semantic-ui-react';

import { cloneDeep } from 'lodash';

import { useClickOutside } from '@eeacms/volto-eea-design-system/helpers';

const createColumns = (item, renderMenuItem, item_id) => {
  const itemList = item.items.map((item, index) => (
    <React.Fragment key={index}>
      {renderMenuItem(item, {
        className: 'item',
        key: index,
        id: item_id,
      })}
    </React.Fragment>
  ));
  return itemList;
};

const ItemGrid = ({ sectionTitle, item, columns, renderMenuItem }) => {
  const item_id = item.title.toLowerCase().replaceAll(' ', '-') + '-sub-title';
  return (
    <>
      {renderMenuItem(item, { className: 'sub-title', id: item_id })}
      {item.items.length ? (
        <List aria-labelledby={item_id} style={{ columns: `${columns}` }}>
          {createColumns(item, renderMenuItem, item_id)}
        </List>
      ) : null}
    </>
  );
};

const Item = ({ item, icon = false, iconName, renderMenuItem }) => {
  const item_id = item.title.toLowerCase().replaceAll(' ', '-') + '-sub-title';
  return (
    <>
      {renderMenuItem(item, {
        className: 'sub-title',
        id: item_id,
      })}
      <List className="menu-list" aria-labelledby={item_id}>
        {item.items.map((listItem, index) => (
          <React.Fragment key={index}>
            {renderMenuItem(
              listItem,
              {
                className: 'item',
                key: index,
              },
              { children: icon && <Icon className={iconName} /> },
            )}
          </React.Fragment>
        ))}
      </List>
    </>
  );
};

const Topics = ({ menuItem, renderMenuItem }) => (
  <Grid>
    {menuItem.items.map((section, index) => (
      <React.Fragment key={index}>
        {section.title === 'At a glance' ? (
          <Grid.Column width={3} id="at-a-glance">
            <Item item={section} key={index} renderMenuItem={renderMenuItem} />
          </Grid.Column>
        ) : (
          <Grid.Column width={9} key={index} id="topics-right-column">
            <ItemGrid
              sectionTitle={section.title}
              item={section}
              columns={4}
              key={index}
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
          {index === 0 && (
            <ItemGrid
              sectionTitle={section.title}
              item={section}
              columns={5}
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
            {index !== 0 && (
              <Grid.Column>
                <ItemGrid
                  sectionTitle={section.title}
                  item={section}
                  columns={2}
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

const FirstLevelContent = ({ element, renderMenuItem, pathName }) => {
  const topics = element.title === 'Topics' ? true : false;
  let defaultIndex = -1;

  return (
    <>
      {!topics ? (
        <React.Fragment>
          {element.items.map((item, index) => {
            let firstLevelPanels = [];
            if (!item.items.length) {
              return (
                <React.Fragment key={index}>
                  {renderMenuItem(item, { className: 'item sub-title' })}
                </React.Fragment>
              );
            }
            let x = {};
            x.key = item['@id'] || item['url'];
            if (pathName.indexOf(item.url) !== -1) {
              defaultIndex = index;
            }
            x.title = (
              <Accordion.Title key={`title=${index}`} as="button">
                {item.title}
                <Icon className="ri-arrow-down-s-line" size="small" />
              </Accordion.Title>
            );
            let overflow_item = cloneDeep(item);
            overflow_item.title = 'See all';
            x.content = (
              <Accordion.Content>
                {renderMenuItem(overflow_item, {
                  className: 'item title-item',
                })}
                <SecondLevelContent
                  element={item}
                  renderMenuItem={renderMenuItem}
                />
              </Accordion.Content>
            );
            firstLevelPanels.push(x);
            return (
              <Accordion.Accordion
                panels={firstLevelPanels}
                key={index}
                defaultActiveIndex={defaultIndex === index ? 0 : -1}
              />
            );
          })}
        </React.Fragment>
      ) : (
        <SecondLevelContent
          element={element}
          topics={true}
          renderMenuItem={renderMenuItem}
        />
      )}
    </>
  );
};

const SecondLevelContent = ({ element, topics = false, renderMenuItem }) => {
  let content;
  if (topics) {
    const atAGlance = element.items.find(
      (element) => element.title === 'At a glance',
    );
    const inDepth = element.items.find(
      (element) => element.url.indexOf('in-depth') !== -1,
    );
    content = (
      <List>
        {atAGlance &&
          atAGlance.items.map((item, index) => (
            <React.Fragment key={index}>
              {renderMenuItem(item, {
                key: index,
                role: 'listitem',
                className: 'item',
              })}
            </React.Fragment>
          ))}
        {inDepth && (
          <React.Fragment key={inDepth.url}>
            {renderMenuItem(inDepth, {
              key: inDepth.url,
              role: 'listitem',
              className: 'item',
            })}
          </React.Fragment>
        )}
      </List>
    );
  } else {
    content = (
      <List>
        {element.items.map((item, index) => (
          <React.Fragment key={index}>
            {renderMenuItem(item, {
              key: index,
              role: 'listitem',
              className: 'item',
            })}
          </React.Fragment>
        ))}
      </List>
    );
  }

  return <>{content}</>;
};

const NestedAccordion = ({ menuItems, renderMenuItem, pathName }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    let index = 0;
    menuItems.forEach((menuItem) => {
      if (pathName.includes(menuItem.url)) setActiveIndex(index);
      ++index;
    });
  }, [menuItems, pathName]);

  const rootPanels = [];
  menuItems.forEach((element, index) => {
    let x = {};
    x.key = index;
    x.title = (
      <Accordion.Title
        key={`title-${index}`}
        index={index}
        as="button"
        onClick={() => {
          if (activeIndex === index) {
            setActiveIndex(-1);
          } else setActiveIndex(index);
        }}
      >
        {element.title}
        <Icon className="ri-arrow-down-s-line" size="small" />
      </Accordion.Title>
    );
    let overview = cloneDeep(element);
    x.content = (
      <Accordion.Content key={index}>
        <div className="mega-menu-title">
          {/* Inverted right labeled button as a category title - Mobile */}
          {renderMenuItem(
            overview,
            { className: 'ui button inverted icon right labeled' },
            {
              iconPosition: 'right',
              children: (
                <>
                  {/* Add word overview to titles */}
                  <span> overview</span>
                  <Icon className={'arrow right icon'} alt={'Title icon'} />
                </>
              ),
            },
          )}
        </div>
        <FirstLevelContent
          element={element}
          renderMenuItem={renderMenuItem}
          pathName={pathName}
        />
      </Accordion.Content>
    );
    rootPanels.push(x);
  });

  return <Accordion activeIndex={activeIndex} panels={rootPanels} />;
};

function HeaderMenuPopUp({
  menuItems,
  renderMenuItem,
  pathName,
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
              {/* Inverted right labeled button as a category title,
                  for topics the button goes inside the grid */}
              {menuItem.title && (
                <div className="mega-menu-title">
                  {renderMenuItem(
                    menuItem,
                    { className: 'ui button inverted icon right labeled' },
                    {
                      iconPosition: 'right',
                      children: (
                        <>
                          {/* Add word overview to titles */}
                          <span> overview</span>
                          <Icon
                            className={'arrow right icon'}
                            alt={'Title icon'}
                          />
                        </>
                      ),
                    },
                  )}
                </div>
              )}
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
              pathName={pathName}
            />
          </div>
        </Container>
      </div>
    </Transition>
  );
}

export default HeaderMenuPopUp;
