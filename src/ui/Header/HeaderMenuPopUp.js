import React, { useState, useEffect } from 'react';
import { Transition } from 'semantic-ui-react';
import { Container, Grid, List, Icon, Accordion } from 'semantic-ui-react';

import { cloneDeep } from 'lodash';

import { useClickOutside } from '@eeacms/volto-eea-design-system/helpers';

import config from '@plone/volto/registry';

function listToMatrix(list, elementsPerSubArray) {
  let matrix = [],
    i,
    k;

  for (i = 0, k = -1; i < list.length; i++) {
    if (i % elementsPerSubArray === 0) {
      k++;
      matrix[k] = [];
    }
    matrix[k].push(list[i]);
  }

  return matrix;
}

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

const ItemGrid = ({
  sectionTitle,
  item,
  columns,
  renderMenuItem,
  hideChildrenFromNavigation,
}) => {
  const item_id = item.title.toLowerCase().replaceAll(' ', '-') + '-sub-title';
  return (
    <>
      {renderMenuItem(item, { className: 'sub-title', id: item_id })}
      {item.items.length && !hideChildrenFromNavigation ? (
        <List aria-labelledby={item_id} style={{ columns: `${columns}` }}>
          {createColumns(item, renderMenuItem, item_id)}
        </List>
      ) : null}
    </>
  );
};

const Item = ({
  item,
  icon = false,
  iconName,
  renderMenuItem,
  hideChildrenFromNavigation,
}) => {
  const item_id = item.title.toLowerCase().replaceAll(' ', '-') + '-sub-title';
  return (
    <>
      {renderMenuItem(item, {
        className: 'sub-title',
        id: item_id,
      })}
      {!hideChildrenFromNavigation && (
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
      )}
    </>
  );
};

const RenderItem = ({ layout, section, renderMenuItem, index, key }) => {
  return !layout.childrenColumns || layout.childrenColumns[index] === 1 ? (
    <Item
      item={section}
      renderMenuItem={renderMenuItem}
      key={key}
      hideChildrenFromNavigation={layout.hideChildrenFromNavigation}
    />
  ) : (
    <ItemGrid
      sectionTitle={section.title}
      item={section}
      columns={layout.childrenColumns[index]}
      key={key}
      renderMenuItem={renderMenuItem}
      hideChildrenFromNavigation={layout.hideChildrenFromNavigation}
    />
  );
};

const StandardMegaMenuGrid = ({ menuItem, renderMenuItem, layout }) => {
  return layout ? (
    layout.equalySpreadColumns ? (
      <Grid columns={layout.equalySpreadColumns}>
        {menuItem.items.map((section, index) => (
          <Grid.Column key={index}>
            <RenderItem
              layout={layout}
              section={section}
              renderMenuItem={renderMenuItem}
              index={index}
              key={index}
            />
          </Grid.Column>
        ))}
      </Grid>
    ) : (
      <Grid>
        {layout.itemsEquallySpread &&
          menuItem.items.map((section, index) => (
            <React.Fragment key={index}>
              <Grid.Column width={layout.columnsWidth[index]}>
                <RenderItem
                  layout={layout}
                  section={section}
                  renderMenuItem={renderMenuItem}
                  index={index}
                  key={index}
                />
              </Grid.Column>
            </React.Fragment>
          ))}
        {!layout.itemsEquallySpread &&
          layout.columnsWidth.map((columnWidth, index) => {
            const columns = layout.columnsWidth.length;
            const isLastColumn = columns - 1 === index;
            const lastColumnItems =
              isLastColumn &&
              menuItem.items.length >= layout.columnsWidth.length
                ? menuItem.items.slice(index)
                : [];

            const itemsMatrix = listToMatrix(menuItem.items, columns);
            return (
              <Grid.Column key={index} width={columnWidth}>
                {layout.itemsEquallySpread &&
                  itemsMatrix.map(
                    (item, itemIndex) =>
                      item[index] && (
                        <RenderItem
                          layout={layout}
                          section={item[index]}
                          renderMenuItem={renderMenuItem}
                          index={index}
                          key={itemIndex}
                        />
                      ),
                  )}
                {!layout.itemsEquallySpread &&
                  !!menuItem.items[index] &&
                  !isLastColumn && (
                    <RenderItem
                      layout={layout}
                      section={menuItem.items[index]}
                      renderMenuItem={renderMenuItem}
                      index={index}
                      key={index}
                    />
                  )}
                {!layout.itemsEquallySpread && isLastColumn && (
                  <Grid columns={1} className="nested-grid">
                    {lastColumnItems.map((lastColumnItem, lastColumnIndex) => (
                      <Grid.Column>
                        <RenderItem
                          layout={layout}
                          section={lastColumnItem}
                          renderMenuItem={renderMenuItem}
                          index={index}
                          key={lastColumnIndex}
                        />
                      </Grid.Column>
                    ))}
                  </Grid>
                )}
              </Grid.Column>
            );
          })}
      </Grid>
    )
  ) : (
    <Grid columns={4}>
      {menuItem.items.map((section, index) => (
        <Grid.Column key={index}>
          <Item
            item={section}
            renderMenuItem={renderMenuItem}
            hideChildrenFromNavigation={true}
          />
        </Grid.Column>
      ))}
    </Grid>
  );
};

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

  const layouts = config.settings?.megaMenuLayouts;
  const layout =
    !!layouts &&
    Object.keys(layouts).includes(menuItem?.url) &&
    layouts[menuItem.url];

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
              <StandardMegaMenuGrid
                menuItem={menuItem}
                renderMenuItem={renderMenuItem}
                layout={layout}
              />
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
