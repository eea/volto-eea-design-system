import React from 'react';
import { Container } from 'semantic-ui-react';
import cx from 'classnames';

import { useClickOutside } from '@eeacms/volto-eea-design-system/helpers';

const levels = ['first', 'second', 'third'];

const Item = ({ item, renderMenuItem }) => (
  <>
    {item.items.length > 0 && (
      <label htmlFor={`drop-${item['@id'] || item.url}`} className="toggle">
        {item.title}
      </label>
    )}
    {renderMenuItem(item)}
    {item.items.length > 0 && (
      <input type="checkbox" id={`drop-${item['@id'] || item.url}`} />
    )}
  </>
);

const ItemsList = ({ items, renderMenuItem, level = 0 }) => (
  <ul
    className={cx(
      level === 0 ? 'menu' : 'sub',
      levels[level],
      `level-${level}`,
    )}
  >
    {items.map((item) => (
      <li
        key={item['@id'] || item.url}
        className={cx({ hasSubMenu: item.items?.length > 0 })}
      >
        <Item item={item} renderMenuItem={renderMenuItem} />

        {item.items.length > 0 && (
          <ItemsList
            items={item.items}
            level={level + 1}
            renderMenuItem={renderMenuItem}
          />
        )}
      </li>
    ))}
  </ul>
);

function HeaderMenuPopUp({ menuItems, onClose, triggerRefs, renderMenuItem }) {
  const nodeRef = React.useRef();
  useClickOutside({ targetRefs: [nodeRef, ...triggerRefs], callback: onClose });

  return (
    <div id="mega-menu" ref={nodeRef}>
      <Container>
        <nav>
          <ItemsList items={menuItems} renderMenuItem={renderMenuItem} />
        </nav>
      </Container>
    </div>
  );
}

export default HeaderMenuPopUp;
