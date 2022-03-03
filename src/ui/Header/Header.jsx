/**
 * Header component.
 * @module components/theme/Header/Header
 */

import React from 'react'; // , { Component }
import cx from 'classnames';
import { Container, Image, Menu, Grid, Dropdown } from 'semantic-ui-react'; // Dropdown,

import closeIcon from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/close-line.svg';
import searchIcon from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/search-line.svg';
import burgerIcon from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/menu-line.svg';

import HeaderSearchPopUp from './HeaderSearchPopUp';
import HeaderMenuPopUp from './HeaderMenuPopUp';

function Header({ children }) {
  return <div className="eea header">{children}</div>;
}

const TopHeader = ({ children }) => (
  <div className="top bar">
    <Container>{children}</Container>
  </div>
);

const TopItem = ({ children, className, id }) => (
  <div className={cx('item', 'header-top-item', className)} id={id}>
    {children}
  </div>
);

const TopDropdownMenu = ({
  children,
  id,
  className,
  text,
  mobileText,
  icon,
}) => {
  const Component = ({ mobileText }) => (
    <Dropdown
      id={id}
      className={cx(className, {
        'mobile or lower hidden': !mobileText,
        'mobile only': !!mobileText,
      })}
      text={text}
      icon={icon || 'chevron down'}
      aria-label="dropdown"
    >
      <Dropdown.Menu role="group">{children}</Dropdown.Menu>
    </Dropdown>
  );
  return (
    <>
      <Component />
      {mobileText && <Component mobileText={mobileText} />}
    </>
  );
};

const Main = ({ logo, menuItems }) => {
  const [activeItem, setActiveItem] = React.useState('');
  const [menuIsActive, setMenuIsActive] = React.useState(false);
  const [searchIsActive, setSearchIsActive] = React.useState(false);
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

  const desktopBurgerOnClick = () => {
    setMenuIsActive(false);
    setActiveItem('');
  };

  React.useEffect(() => {
    if (searchIsActive || burger === 'open' || menuIsActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [searchIsActive, burger, menuIsActive]);

  const node = React.useRef();

  return (
    <div className="main bar" ref={node}>
      <Container>
        <Grid>
          <Grid.Column mobile={8} tablet={8} computer={4}>
            {logo}
          </Grid.Column>
          <Grid.Column mobile={4} tablet={4} computer={8}>
            <div className="main-menu">
              {!menuIsActive && menuItems && (
                <Menu className="eea-main-menu tablet or lower hidden" text>
                  {menuItems.map((item) => (
                    <Menu.Item
                      name={item['@id'] || item.url}
                      onClick={menuOnClick}
                      active={activeItem === item.key}
                      key={item['@id'] || item.url}
                    >
                      {item.title}
                    </Menu.Item>
                  ))}
                </Menu>
              )}
              {menuIsActive && (
                <Header.BurgerAction
                  className="desktop"
                  onClick={desktopBurgerOnClick}
                >
                  {/* <Icon name="close" /> */}
                  <Image src={closeIcon} alt="menu close icon" />
                </Header.BurgerAction>
              )}
              <div
                className="search-action"
                onClick={searchOnClick}
                role="none"
              >
                {/* <Icon name={!state.activeSearch ? 'search' : 'close'} /> */}
                <Image
                  src={!searchIsActive ? `${searchIcon}` : `${closeIcon}`}
                  alt="search button open/close"
                />
              </div>
              <Header.BurgerAction
                className={`mobile ${burger}`}
                onClick={mobileBurgerOnClick}
              >
                {/* <Icon
                  name={this.state.burger === 'open' ? 'close' : 'bars'}
                ></Icon> */}
                <Image
                  src={burger === 'open' ? `${closeIcon}` : `${burgerIcon}`}
                  alt="menu icon open/close"
                />
              </Header.BurgerAction>
            </div>
          </Grid.Column>
        </Grid>
      </Container>
      {searchIsActive && <HeaderSearchPopUp onClose={searchOnClick} />}
      {menuIsActive && (
        <HeaderMenuPopUp menuItems={menuItems} onClose={mobileBurgerOnClick} />
      )}
    </div>
  );
};

const BurgerAction = (props) => (
  <div
    className={`burger-action ${props.className}`}
    role="none"
    onClick={props.onClick}
  >
    {props.children}
  </div>
);

Header.BurgerAction = BurgerAction;
Header.Main = Main;
Header.TopDropdownMenu = TopDropdownMenu;
Header.TopHeader = TopHeader;
Header.TopItem = TopItem;

export default Header;
