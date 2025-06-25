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
import _ from 'lodash';
import { isInternalURL } from '@plone/volto/helpers';
import config from '@plone/volto/registry';

Header.propTypes = {
  transparency: PropTypes.bool,
  inverted: PropTypes.bool,
};

function Header({ children }) {
  return (
    <header className="eea header" aria-label={'Site'}>
      {children}
    </header>
  );
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

const onKeyDownHandler = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    event.target.click();
  }
};

const TopDropdownMenu = ({
  children,
  ariaLabel,
  className,
  classNameHeader,
  icon,
  id,
  tabletText,
  mobileText,
  text,
  viewportWidth,
}) => {
  const isTablet = viewportWidth < 991;
  const isMobile = viewportWidth < 767;

  const Component = ({ mobileText }) => {
    const headerText = mobileText || text;
    const label = ariaLabel || headerText;
    const dropdownRef = React.useRef(null);

    return (
      <>
        <Dropdown
          id={id}
          className={className}
          text={() => (
            <div className={`divider text ${classNameHeader}`}>
              {headerText}
            </div>
          )}
          ref={dropdownRef}
          icon={icon || 'chevron down'}
          aria-label={label}
          closeOnChange={true}
          closeOnBlur={false}
          closeOnEscape={true}
          openOnFocus={true}
          onBlur={(e) => {
            const dropdown = dropdownRef.current;
            const ref = dropdown.ref.current;
            if (e.target !== ref && !ref.contains(e.relatedTarget)) {
              dropdown.close();
            }
          }}
          onKeyDown={onKeyDownHandler}
        >
          <Dropdown.Menu role="option">{children}</Dropdown.Menu>
        </Dropdown>
      </>
    );
  };
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
  menuItemsLayouts,
  renderMenuItem,
  renderGlobalMenuItem,
  headerSearchBox,
  pathname,
  transparency,
  inverted,
  hideSearch,
  isMultilingual,
}) => {
  const history = useHistory();
  const [activeItem, setActiveItem] = React.useState(pathname);
  const [menuIsActive, setMenuIsActive] = React.useState(false);
  const [searchIsActive, setSearchIsActive] = React.useState(false);
  const [burger, setBurger] = React.useState('');
  const searchInputRef = React.useRef(null);
  const [isClient, setIsClient] = React.useState();
  const itemsLayouts = menuItemsLayouts || config.settings?.menuItemsLayouts;

  React.useEffect(() => setIsClient(true), []);

  React.useEffect(() => {
    setMenuIsActive(false);
    setSearchIsActive(false);
    setBurger('');
    // remove active menu when we have no pathname which means we hit logo to go home
    //remove the lang route in order to check if empty
    //setActiveItem as pathname when pathname changed
    if (
      !pathname ||
      (isMultilingual === true && !pathname?.split('/')?.slice(2)?.join('/'))
    ) {
      setActiveItem('');
    } else setActiveItem(pathname);
  }, [isMultilingual, pathname]);

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
      if (isInternalURL(item.url)) {
        history.push(item.url);
      } else if (isClient) {
        window.location.replace(item.url);
      }
    }
  };

  // Listens for escape keydown event
  React.useEffect(() => {
    const escKeyPressed = (e) => {
      if (e.key === 'Escape') {
        // menuOnClickOutside();
        // restore active element if nothing was selected from the menu dropdown
        if (pathname !== activeItem) {
          setActiveItem(pathname);
        }
        // close mobile navigation when clicking outside if we have value for nav
        if (burger) {
          setBurger('');
        }
        // always close the  menu & search
        setMenuIsActive(false);
        setSearchIsActive(false);
      }
    };

    document.addEventListener('keydown', escKeyPressed);

    return () => {
      document.removeEventListener('keydown', escKeyPressed);
    };
  }, [activeItem, burger, pathname]);

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
      <Container className={'main-bar-container'}>
        <Grid>
          <Grid.Column mobile={8} tablet={8} computer={4}>
            {logo}
          </Grid.Column>
          <Grid.Column mobile={4} tablet={4} computer={8}>
            <div className={inverted ? 'main-menu inverted' : 'main-menu'}>
              {menuItems && (
                <nav aria-label={'Main'}>
                  <ul
                    className="ui text eea-main-menu tablet or lower hidden menu"
                    ref={desktopMenuRef}
                    id={'navigation'}
                  >
                    {menuItems.map((item, index) => {
                      const url = item['@id'] || item.url;
                      const firstItem = index === 0 && item.title === 'Home';
                      const active = firstItem
                        ? url === activeItem
                        : activeItem.indexOf(url) !== -1;
                      return (
                        <Menu.Item
                          name={url}
                          key={url}
                          as={'li'}
                          active={active}
                          aria-expanded={active}
                        >
                          {renderGlobalMenuItem(item, {
                            onClick: menuOnClick,
                          })}
                        </Menu.Item>
                      );
                    })}
                  </ul>
                </nav>
              )}
              {!hideSearch && (
                <button
                  className="search-action"
                  onClick={searchOnClick}
                  aria-expanded={searchIsActive}
                  ref={searchButtonRef}
                >
                  {/* <Icon name={!state.activeSearch ? 'search' : 'close'} /> */}
                  <Image
                    src={!searchIsActive ? `${searchIcon}` : `${closeIcon}`}
                    alt="Global search"
                    height={45}
                    width={45}
                    className="header-search-icon"
                  />
                </button>
              )}
              <Header.BurgerAction
                className={`mobile ${burger}`}
                onClick={mobileBurgerOnClick}
                aria-expanded={menuIsActive}
                ref={mobileMenuBurgerRef}
              >
                <Image
                  src={burger === 'open' ? `${closeIcon}` : `${burgerIcon}`}
                  alt="Menu navigation"
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
          headerSearchBox={headerSearchBox}
        />
      )}
      <HeaderMenuPopUp
        renderMenuItem={renderMenuItem}
        activeItem={activeItem}
        menuItems={menuItems}
        menuItemsLayouts={itemsLayouts}
        pathName={pathname}
        onClose={menuOnClickOutside}
        triggerRefs={[mobileMenuBurgerRef, desktopMenuRef]}
        visible={menuIsActive}
      />
    </div>
  );
};

const BurgerAction = React.forwardRef((props, ref) => (
  <button
    ref={ref}
    className={`burger-action ${props.className}`}
    {..._.omit(props, ['onClick', 'children', 'className', 'ref'])}
    onClick={props.onClick}
  >
    {props.children}
  </button>
));

Header.BurgerAction = BurgerAction;
Header.Main = Main;
Header.TopDropdownMenu = TopDropdownMenu;
Header.TopHeader = TopHeader;
Header.TopItem = TopItem;

export default Header;
