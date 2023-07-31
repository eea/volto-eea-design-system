import React, { useState, useEffect } from 'react';
import { Transition } from 'semantic-ui-react';
import { Container, Grid, List, Icon, Accordion } from 'semantic-ui-react';

import { cloneDeep } from 'lodash';

import { useClickOutside } from '@eeacms/volto-eea-design-system/helpers';

import cx from 'classnames';

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

const Item = ({
  item,
  renderMenuItem,
  isSubTitle = false,
  depth = false,
  withoutLayout,
}) => {
  const item_id = item.title.toLowerCase().replaceAll(' ', '-') + '-sub-title';
  return (
    <>
      {renderMenuItem(item, {
        className: withoutLayout
          ? 'sub-title'
          : cx({
              'sub-title': isSubTitle,
              item: !isSubTitle,
              depth: depth,
            }),
        id: item_id,
      })}
    </>
  );
};

const StandardMegaMenuGrid = ({
  menuItem,
  renderMenuItem,
  layout,
  depth = 0,
  withoutLayout,
  subChildren = false,
}) => {
  const columns = layout.columns || layout.columnsWidth?.length || 4;
  const item_id =
    menuItem.title.toLowerCase().replaceAll(' ', '-') + '-sub-title';

  const RenderItem = ({ item, layout }) => {
    return (
      <>
        {!!item.items.length ? (
          <>
            <Item
              item={item}
              renderMenuItem={renderMenuItem}
              isSubTitle={depth === 0 && !layout.hideChildrenFromNavigation}
              depth={depth > 0}
              withoutLayout={withoutLayout}
            />
            <StandardMegaMenuGrid
              menuItem={item}
              renderMenuItem={renderMenuItem}
              layout={layout}
              depth={depth + 1}
              subChildren={true}
            />
          </>
        ) : (
          <Item
            item={item}
            renderMenuItem={renderMenuItem}
            isSubTitle={depth === 0 && !layout.hideChildrenFromNavigation}
            depth={depth > 0}
            withoutLayout={withoutLayout}
          />
        )}
      </>
    );
  };

  return subChildren ? (
    <List aria-labelledby={item_id} style={{ columns: columns }}>
      {menuItem.items.map((item, index) => {
        return (
          !layout.hideChildrenFromNavigation && (
            <RenderItem item={item} layout={layout} key={index} />
          )
        );
      })}
    </List>
  ) : (
    <Grid columns={columns}>
      {!layout.columnsWidth &&
        !withoutLayout &&
        menuItem.items.map((item, index) => {
          return (
            !layout.hideChildrenFromNavigation && (
              <Grid.Column
                className={cx({
                  depth: depth,
                })}
                key={index}
              >
                <RenderItem item={item} layout={layout} />
              </Grid.Column>
            )
          );
        })}
      {!!layout.columnsWidth &&
        layout.columnsWidth.map((columnWidth, index) => {
          const columns = layout.columnsWidth.length;
          const isLastColumn = columns - 1 === index;
          const lastColumnItems =
            isLastColumn && menuItem.items.length > layout.columnsWidth.length
              ? menuItem.items.slice(index + 1)
              : [];

          const itemsMatrix = listToMatrix(menuItem.items, columns);

          return (
            <Grid.Column key={index} width={columnWidth}>
              {layout.itemsEquallySpread &&
                itemsMatrix.map(
                  (item, itemIndex) =>
                    item[index] && (
                      <RenderItem
                        key={itemIndex}
                        item={item[index]}
                        layout={layout}
                      />
                    ),
                )}
              {!layout.itemsEquallySpread && !!menuItem.items[index] && (
                <RenderItem item={menuItem.items[index]} layout={layout} />
              )}
              {!layout.itemsEquallySpread &&
                isLastColumn &&
                lastColumnItems.map((lastColumnItem, lastColumnIndex) => (
                  <RenderItem
                    key={lastColumnIndex}
                    item={lastColumnItem}
                    layout={layout}
                  />
                ))}
            </Grid.Column>
          );
        })}
      {/* For paths without layout */}
      {Object.keys(layout).length === 0 &&
        menuItem.items.map((section, index) => {
          return (
            <Grid.Column key={index}>
              <Item
                item={section}
                renderMenuItem={renderMenuItem}
                withoutLayout={withoutLayout}
              />
            </Grid.Column>
          );
        })}
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
    !!layouts && Object.keys(layouts).includes(menuItem?.url)
      ? layouts[menuItem.url]
      : {};
  const withoutLayout = Object.keys(layout).length === 0;

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
                withoutLayout={withoutLayout}
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
