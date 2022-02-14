import React from 'react';
import { Container } from 'semantic-ui-react';

function HeaderMenuPopUp() {
  return (
    <div id="eea-mega-menu-wrap">
      <Container>
        <nav className="eea-nav">
          <a href="/#" className="eea-mobile-menu-trigger">
            Open mobile menu
          </a>
          <ul className="menu menu-bar">
            <li>
              {/* <a
                href="/#"
                className="menu-link menu-bar-link"
                aria-haspopup="true"
                id="trigger"
              ></a> */}
              <ul
                className="mega-menu mega-menu--multiLevel"
                id="first-section-link"
              >
                <li>
                  <a
                    href="/#"
                    className="menu-link mega-menu-link"
                    aria-haspopup="true"
                  >
                    Item 1
                  </a>
                  <ul className="menu menu-list">
                    <li>
                      <a href="/#" className="menu-link menu-list-link">
                        Section 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#"
                        className="menu-link menu-list-link"
                        aria-haspopup="true"
                      >
                        Section 2
                      </a>
                      <ul className="menu menu-list">
                        <li>
                          <a href="/#" className="menu-link menu-list-link">
                            Page 1
                          </a>
                        </li>
                        <li>
                          <a href="/#" className="menu-link menu-list-link">
                            Page 2
                          </a>
                        </li>
                        <li>
                          <a href="/#" className="menu-link menu-list-link">
                            Page 3
                          </a>
                        </li>
                        <li>
                          <a href="/#" className="menu-link menu-list-link">
                            Page 4
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/#" className="menu-link menu-list-link">
                        Section 3
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="/#"
                    className="menu-link mega-menu-link"
                    aria-haspopup="true"
                  >
                    Item 2
                  </a>
                  <ul className="menu menu-list">
                    <li>
                      <a href="/#" className="menu-link menu-list-link">
                        Section 1
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="menu-link menu-list-link">
                        Section 2
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="/#"
                    className="menu-link mega-menu-link"
                    aria-haspopup="true"
                  >
                    Item 3
                  </a>
                  <ul className="menu menu-list">
                    <li>
                      <a href="/#" className="menu-link menu-list-link">
                        Section 1
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="menu-link menu-list-link">
                        Section 2
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/#" className="menu-link mega-menu-link">
                    Item 4
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
}

export default HeaderMenuPopUp;
