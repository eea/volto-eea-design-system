/**
 * Header component.
 * @module components/theme/Header/Header
 */

import React from 'react'; // , { Component }
import { useHistory } from 'react-router-dom';
import cx from 'classnames';
import { Container, Image, Menu, Grid, Dropdown } from 'semantic-ui-react'; // Dropdown,

import closeIcon from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/close-line.svg';
import searchIcon from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/search-line.svg';
import burgerIcon from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/menu-line.svg';

import HeaderSearchPopUp from './HeaderSearchPopUp';
import HeaderMenuPopUp from './HeaderMenuPopUp';
import PropTypes from 'prop-types';

Header.propTypes = {
  transparency: PropTypes.bool,
  inverted: PropTypes.bool,
};

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
  className,
  icon,
  id,
  tabletText,
  mobileText,
  text,
  viewportWidth,
}) => {
  const isTablet = viewportWidth < 991;
  const isMobile = viewportWidth < 767;

  const Component = ({ mobileText }) => (
    <Dropdown
      id={id}
      className={className}
      text={mobileText || text}
      icon={icon || 'chevron down'}
      aria-label="dropdown"
      closeOnChange={false}
      closeOnBlur={true}
    >
      <Dropdown.Menu role="group">{children}</Dropdown.Menu>
    </Dropdown>
  );
  return (
    <>
      {isMobile ? (
        <Component mobileText={mobileText} />
      ) : isTablet ? (
        <Component mobileText={tabletText} />
      ) : (
        <Component />
      )}
    </>
  );
};

// disable sticky until it's more stable
// const useScrollingUp = () => {
//   let prevScroll;
//
//   if (process.browser) {
//     prevScroll = window.pageYOffset;
//   }
//   const [scrollingUp, setScrollingUp] = React.useState(false);
//   const handleScroll = () => {
//     const currScroll = window.pageYOffset;
//     const isScrolled = prevScroll > currScroll;
//     setScrollingUp(isScrolled);
//     prevScroll = currScroll;
//   };
//   React.useEffect(() => {
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => {
//       window.removeEventListener('scroll', handleScroll, { passive: true });
//     };
//   });
//   return scrollingUp;
// };

const Main = ({
  logo,
  menuItems,
  renderMenuItem,
  renderGlobalMenuItem,
  pathname,
  transparency,
  inverted,
}) => {
  const history = useHistory();
  const [activeItem, setActiveItem] = React.useState(pathname);
  const [menuIsActive, setMenuIsActive] = React.useState(false);
  const [searchIsActive, setSearchIsActive] = React.useState(false);
  const [burger, setBurger] = React.useState('');
  const searchInputRef = React.useRef(null);

  React.useEffect(() => {
    setMenuIsActive(false);
    setSearchIsActive(false);
    setBurger('');
    // remove active menu when we have no pathname which means we hit logo to go home
    if (!pathname) {
      setActiveItem('');
    }
  }, [pathname]);

  React.useEffect(() => {
    if (searchIsActive) {
      searchInputRef.current && searchInputRef.current.focus();
    }
  }, [searchIsActive]);

  const searchOnClick = (e, x) => {
    if (menuIsActive === true) {
      setBurger('');
      setMenuIsActive(false);
      setActiveItem('');
    }
    setSearchIsActive(!searchIsActive);
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
      setActiveItem('');
    }
  };

  const menuOnClickOutside = () => {
    // restore active element if nothing was selected from the menu dropdown
    if (pathname !== activeItem) {
      setActiveItem(pathname);
    }
    // close mobile navigation when clicking outside if we have value for nav
    if (burger) {
      setBurger('');
    }
    // always close the  menu
    setMenuIsActive(false);
  };

  const menuOnClick = (e, item) => {
    if (searchIsActive) setSearchIsActive(false);
    setActiveItem(item['@id'] || item.url);
    if (item.items.length) {
      setMenuIsActive(true);
    } else {
      history.push(item.url);
    }
  };

  // React.useEffect(() => {
  //   if (searchIsActive || burger === 'open' || menuIsActive) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'unset';
  //   }
  // }, [searchIsActive, burger, menuIsActive]);

  const node = React.useRef();
  const searchButtonRef = React.useRef();
  const mobileMenuBurgerRef = React.useRef();
  const desktopMenuRef = React.useRef();

  // disable sticky setting until feature is more stable
  // const isScrollingUp = useScrollingUp();
  // <div
  // className={`main bar ${transparency ? 'transparency' : ''} ${
  //     isScrollingUp ? 'sticky' : ''
  // }`}
  // >
  return (
    <div
      className={`main bar ${transparency ? 'transparency' : ''}`}
      ref={node}
    >
      <Container>
        <Grid>
          <Grid.Column mobile={8} tablet={8} computer={4}>
            {logo}
          </Grid.Column>
          <Grid.Column mobile={4} tablet={4} computer={8}>
            <div className={inverted ? 'main-menu inverted' : 'main-menu'}>
              {menuItems && (
                <div
                  className="ui text eea-main-menu tablet or lower hidden menu"
                  ref={desktopMenuRef}
                >
                  {menuItems.map((item) => (
                    <Menu.Item
                      name={item['@id'] || item.url}
                      key={item['@id'] || item.url}
                      active={
                        activeItem.indexOf(item['@id']) !== -1 ||
                        activeItem.indexOf(item.url) !== -1
                      }
                    >
                      {renderGlobalMenuItem(item, {
                        onClick: menuOnClick,
                      })}
                    </Menu.Item>
                  ))}
                </div>
              )}
              <div
                className="search-action"
                onClick={searchOnClick}
                role="none"
                ref={searchButtonRef}
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
                ref={mobileMenuBurgerRef}
              >
                <Image
                  src={burger === 'open' ? `${closeIcon}` : `${burgerIcon}`}
                  alt="menu icon open/close"
                />
              </Header.BurgerAction>
            </div>
          </Grid.Column>
        </Grid>
      </Container>
      {searchIsActive && (
        <HeaderSearchPopUp
          onClose={searchOnClick}
          searchInputRef={searchInputRef}
          triggerRefs={[searchButtonRef]}
        />
      )}
      <HeaderMenuPopUp
        renderMenuItem={renderMenuItem}
        activeItem={activeItem}
        menuItems={menuItems}
        pathName={pathname}
        onClose={menuOnClickOutside}
        triggerRefs={[mobileMenuBurgerRef, desktopMenuRef]}
        visible={menuIsActive}
      />
    </div>
  );
};

const BurgerAction = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className={`burger-action ${props.className}`}
    role="none"
    onClick={props.onClick}
  >
    {props.children}
  </div>
));

Header.BurgerAction = BurgerAction;
Header.Main = Main;
Header.TopDropdownMenu = TopDropdownMenu;
Header.TopHeader = TopHeader;
Header.TopItem = TopItem;

export default Header;
