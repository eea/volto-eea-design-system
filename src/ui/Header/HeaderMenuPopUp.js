import React from 'react';
import { Container } from 'semantic-ui-react';

function HeaderMenuPopUp({ menuItems }) {
  return (
    <div id="mega-menu">
      <Container>
        <nav>
          <ul className="menu">
            {menuItems.map((item) => (
              //first tier
              <li
                key={item['@id']}
                className={item.items.length > 0 ? 'hasSubMenu' : null}
              >
                {item.items.length > 0 && (
                  <label htmlFor={`drop-${item['@id']}`} className="toggle">
                    {item.title}
                  </label>
                )}
                <a href="/#">
                  <span>{item.title}</span>
                </a>
                {item.items.length > 0 && (
                  <input type="checkbox" id={`drop-${item['@id']}`} />
                )}
                {item.items.length > 0 && (
                  //second tier
                  <ul className="sub second">
                    {item.items.map((section) => (
                      <li
                        key={section['@id']}
                        className={
                          section.items.length > 0 ? 'hasSubMenu' : null
                        }
                      >
                        {section.items.length > 0 && (
                          <label
                            htmlFor={`drop-${item['@id']}-${section['@id']}`}
                            className="toggle"
                          >
                            {section.title}
                          </label>
                        )}
                        <a href="/#">
                          <span>{section.title}</span>
                        </a>
                        {section.items.length > 0 && (
                          <input
                            type="checkbox"
                            id={`drop-${item['@id']}-${section['@id']}`}
                          ></input>
                        )}
                        {section.items.length > 0 && (
                          //third tier
                          <ul className="sub third">
                            {section.items.map((page) => (
                              <li key={page['@id']}>
                                <a href="/#">
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
