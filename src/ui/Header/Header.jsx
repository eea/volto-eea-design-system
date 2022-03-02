/**
 * Header component.
 * @module components/theme/Header/Header
 */

import React, { Component } from 'react';
import { Container, Dropdown, Image, Menu, Grid } from 'semantic-ui-react';

import eeaFlag from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/eea.png';
import globeIcon from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/global-line.svg';
import closeIcon from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/close-line.svg';
import searchIcon from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/search-line.svg';
import burgerIcon from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/menu-line.svg';

import HeaderSearchPopUp from './HeaderSearchPopUp';
import HeaderMenuPopUp from './HeaderMenuPopUp';
import Logo from '../Logo/Logo';

// import PropTypes from 'prop-types';

function Header({ children }) {
  const [activeItem, setActiveItem] = React.useState('');
  const [menuIsActive, setMenuIsActive] = React.useState(false);
  const [searchIsActive, setSearchIsActive] = React.useState(false);
  const [language, setLanguage] = React.useState('en');
  const [burger, setBurger] = React.useState('');

  const menuOnClick = (e, x) => {
    if (searchIsActive === true) {
      setSearchIsActive(false);
    }
    setActiveItem(x.name);
    setMenuIsActive(true);
  };

  const searchOnClick = (e, x) => {
    if (menuIsActive === true) {
      setBurger('');
      setMenuIsActive(false);
    }
    setSearchIsActive(!searchIsActive);
    setActiveItem('');
  };

  const onLanguageSelection = (e, data) => {
    setLanguage(data.text.props.children[1].props.children);
  };

  const mobileBurgerOnClick = () => {
    if (searchIsActive === true) {
      setSearchIsActive(false);
    }

    if (burger === '') {
      setBurger('open');
      setMenuIsActive(true);
    } else {
      setBurger('');
      setMenuIsActive(false);
    }
  };

  React.useEffect(() => {
    if (searchIsActive || burger === 'open' || menuIsActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [searchIsActive, burger, menuIsActive]);

  return <div className="eea header">{children}</div>;
}

//      <Header.TopHeader>
//        <Header.TopItem className="official-union mobile or lower hidden">
//          <Image src={eeaFlag} alt="eea flag"></Image>

//          <Dropdown
//            text="An official website of the European Union | How do you Know?"
//            icon="chevron down"
//            aria-label="dropdown"
//          >
//            <Dropdown.Menu id="eea-official-union-dropdown" role="group">
//              <div className="content">
//                <p>
//                  All official European Union website addresses are in the{' '}
//                  <b>europa.eu</b> domain.
//                </p>
//                <a
//                  href="https://europa.eu/european-union/contact/institutions-bodies_en"
//                  target="_blank"
//                  rel="noreferrer"
//                  role="option"
//                  aria-selected="false"
//                >
//                  See all EU institutions and bodies
//                </a>
//              </div>
//            </Dropdown.Menu>
//          </Dropdown>
//        </Header.TopItem>

//        <Header.TopItem className="official-union mobile only">
//          <Image src={eeaFlag} alt="eea flag"></Image>

//          <Dropdown
//            text="An official EU website"
//            icon="chevron down"
//            aria-label="dropdown"
//          >
//            <Dropdown.Menu role="group">
//              <div role="option" aria-selected="false" className="content">
//                <p>
//                  All official European Union website addresses are in the{' '}
//                  <b>europa.eu</b> domain.
//                </p>
//                <a
//                  href="https://europa.eu/european-union/contact/institutions-bodies_en"
//                  target="_blank"
//                  rel="noreferrer"
//                >
//                  See all EU institutions and bodies
//                </a>
//              </div>
//            </Dropdown.Menu>
//          </Dropdown>
//        </Header.TopItem>

//        {this.props.linksDropdown && (
//          <Header.TopItem>
//            <Dropdown
//              id="theme-sites"
//              className="tablet or lower hidden"
//              text={this.props.linksDropdown.title}
//              icon="chevron down"
//              aria-label="dropdown"
//            >
//              <Dropdown.Menu role="group">
//                <div className="wrapper">
//                  {this.props.linksDropdown.links.map((item, index) => (
//                    <Dropdown.Item key={index}>
//                      <a
//                        href={item.href}
//                        className="site"
//                        target="_blank"
//                        rel="noreferrer"
//                      >
//                        {item.title}
//                      </a>
//                    </Dropdown.Item>
//                  ))}
//                </div>
//              </Dropdown.Menu>
//            </Dropdown>
//          </Header.TopItem>
//        )}

//        {this.props.languages && (
//          <Dropdown
//            id="language-switcher"
//            className="item"
//            text={`${this.state.language.toUpperCase()}`}
//            icon={
//              <Image
//                src={globeIcon}
//                alt="language dropdown globe icon"
//              ></Image>
//            }
//            aria-label="dropdown"
//          >
//            <Dropdown.Menu>
//              <div className="wrapper">
//                {this.props.languages.map((item, index) => (
//                  <Dropdown.Item
//                    key={index}
//                    text={
//                      <span>
//                        {item.name}
//                        <span className="country-code">
//                          {item.code.toUpperCase()}
//                        </span>
//                      </span>
//                    }
//                    onClick={this.onLanguageSelection}
//                  ></Dropdown.Item>
//                ))}
//              </div>
//            </Dropdown.Menu>
//          </Dropdown>
//        )}
//      </Header.TopHeader>
//      <Header.Main
//        activeSearch={this.state.activeSearch}
//        activeMenu={this.state.activeMenu}
//        menuItems={this.props.menuItems}
//      >
//        <Grid>
//          <Grid.Column mobile={8} tablet={8} computer={4}>
//            <Logo id="logo"></Logo>
//          </Grid.Column>
//          <Grid.Column mobile={4} tablet={4} computer={8}>
//            <div className="main-menu">
//              {!this.state.activeMenu && this.props.menuItems && (
//                <Menu className="eea-main-menu tablet or lower hidden" text>
//                  {this.props.menuItems.map((item) => (
//                    <Menu.Item
//                      name={item['@id'] || item.url}
//                      onClick={this.menuOnClick}
//                      active={this.state.activeItem === item.key}
//                      key={item['@id'] || item.url}
//                    >
//                      {item.title}
//                    </Menu.Item>
//                  ))}
//                </Menu>
//              )}
//              {this.state.activeMenu && (
//                <Header.BurgerAction
//                  className="desktop"
//                  onClick={this.desktopBurgerOnClick}
//                >
//                  {/* <Icon name="close" /> */}
//                  <Image src={closeIcon} alt="menu close icon" />
//                </Header.BurgerAction>
//              )}
//              <div
//                className="search-action"
//                onClick={this.searchOnClick}
//                role="none"
//              >
//                {/* <Icon name={!this.state.activeSearch ? 'search' : 'close'} /> */}
//                <Image
//                  src={
//                    !this.state.activeSearch
//                      ? `${searchIcon}`
//                      : `${closeIcon}`
//                  }
//                  alt="search button open/close"
//                />
//              </div>
//              <Header.BurgerAction
//                className={`mobile ${this.state.burger}`}
//                onClick={this.mobileBurgerOnClick}
//              >
//                {/* <Icon
//                  name={this.state.burger === 'open' ? 'close' : 'bars'}
//                ></Icon> */}
//                <Image
//                  src={
//                    this.state.burger === 'open'
//                      ? `${closeIcon}`
//                      : `${burgerIcon}`
//                  }
//                  alt="menu icon open/close"
//                />
//              </Header.BurgerAction>
//            </div>
//          </Grid.Column>
//        </Grid>
//      </Header.Main>

const TopHeader = ({ children }) => (
  <div className="top bar">
    <Container>{children}</Container>
  </div>
);

const TopItem = ({ children, className = 'header-top-item', id }) => (
  <div className={`item ${className}`} id={id}>
    {children}
  </div>
);

const Main = (props) => (
  <div className="main bar">
    <Container>
      <Grid>
        <Grid.Column mobile={8} tablet={8} computer={4}>
          <Logo id="logo"></Logo>
        </Grid.Column>
        <Grid.Column mobile={4} tablet={4} computer={8}>
          <div className="main-menu">
            {!this.state.activeMenu && this.props.menuItems && (
              <Menu className="eea-main-menu tablet or lower hidden" text>
                {this.props.menuItems.map((item) => (
                  <Menu.Item
                    name={item['@id'] || item.url}
                    onClick={this.menuOnClick}
                    active={this.state.activeItem === item.key}
                    key={item['@id'] || item.url}
                  >
                    {item.title}
                  </Menu.Item>
                ))}
              </Menu>
            )}
            {this.state.activeMenu && (
              <Header.BurgerAction
                className="desktop"
                onClick={this.desktopBurgerOnClick}
              >
                {/* <Icon name="close" /> */}
                <Image src={closeIcon} alt="menu close icon" />
              </Header.BurgerAction>
            )}
            <div
              className="search-action"
              onClick={this.searchOnClick}
              role="none"
            >
              {/* <Icon name={!this.state.activeSearch ? 'search' : 'close'} /> */}
              <Image
                src={
                  !this.state.activeSearch ? `${searchIcon}` : `${closeIcon}`
                }
                alt="search button open/close"
              />
            </div>
            <Header.BurgerAction
              className={`mobile ${this.state.burger}`}
              onClick={this.mobileBurgerOnClick}
            >
              {/* <Icon
                  name={this.state.burger === 'open' ? 'close' : 'bars'}
                ></Icon> */}
              <Image
                src={
                  this.state.burger === 'open'
                    ? `${closeIcon}`
                    : `${burgerIcon}`
                }
                alt="menu icon open/close"
              />
            </Header.BurgerAction>
          </div>
        </Grid.Column>
      </Grid>
    </Container>
    {props.activeSearch && <HeaderSearchPopUp />}
    {props.activeMenu && <HeaderMenuPopUp menuItems={props.menuItems} />}
  </div>
);

const BurgerAction = (props) => (
  <div
    className={`burger-action ${props.className}`}
    role="none"
    onClick={props.onClick}
  >
    {props.children}
  </div>
);

Header.TopHeader = TopHeader;
Header.TopItem = TopItem;
Header.BurgerAction = BurgerAction;
Header.Main = Main;

export default Header;
