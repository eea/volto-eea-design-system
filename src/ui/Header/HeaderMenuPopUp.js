import React from 'react';
import { Container } from 'semantic-ui-react';

import { useClickOutside } from '@eeacms/volto-eea-design-system/helpers';

function HeaderMenuPopUp({ menuItems, onClose }) {
  const nodeRef = React.useRef();

  useClickOutside({ nodeRef, callback: onClose });

  return (
    <div id="mega-menu" ref={nodeRef}>
      <Container>
        <nav>
          <ul className="menu">
            {menuItems.map((item) => (
              //first tier
              <li
                key={item['@id'] || item.url}
                className={item.items.length > 0 ? 'hasSubMenu' : null}
              >
                {item.items.length > 0 && (
                  <label
                    htmlFor={`drop-${item['@id'] || item.url}`}
                    className="toggle"
                  >
                    {item.title}
                  </label>
                )}
                <a href={item['@id'] || item.url}>
                  <span>{item.title}</span>
                </a>
                {item.items.length > 0 && (
                  <input
                    type="checkbox"
                    id={`drop-${item['@id'] || item.url}`}
                  />
                )}
                {item.items.length > 0 && (
                  //second tier
                  <ul className="sub second">
                    {item.items.map((section) => (
                      <li
                        key={section['@id'] || section.url}
                        className={
                          section.items.length > 0 ? 'hasSubMenu' : null
                        }
                      >
                        {section.items.length > 0 && (
                          <label
                            htmlFor={`drop-${item['@id'] || item.url}-${
                              section['@id'] || section.url
                            }`}
                            className="toggle"
                          >
                            <span>{section.title}</span>
                          </label>
                        )}
                        <a href={section['@id'] || section.url}>
                          <span>{section.title}</span>
                        </a>
                        {section.items.length > 0 && (
                          <input
                            type="checkbox"
                            id={`drop-${item['@id'] || item.url}-${
                              section['@id'] || section.url
                            }`}
                          ></input>
                        )}
                        {section.items.length > 0 && (
                          //third tier
                          <ul className="sub third">
                            {section.items.map((page) => (
                              <li key={page['@id'] || page.url}>
                                <a href={page['@id'] || page.url}>
                                  <span>{page.title}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </div>
  );
}

export default HeaderMenuPopUp;
