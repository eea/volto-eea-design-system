/**
 * Header component.
 * @module components/theme/Header/Header
 */

import React, { Component } from 'react';
import {
  Container,
  Dropdown,
  Image,
  Menu,
  Grid,
  Icon,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import eeaFlag from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/eea.png';
import globeIcon from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/globeIcon.png';
import HeaderSearchPopUp from './HeaderSearchPopUp';
import HeaderMenuPopUp from './HeaderMenuPopUp';
import Logo from '../Logo/Logo';

/**
 * Header component class.
 * @class Header
 * @extends Component
 */
class Header extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    token: PropTypes.string,
    pathname: PropTypes.string,
    languages: PropTypes.array,
    linksDropdown: PropTypes.object,
    menuItems: PropTypes.array,
  };

  /**
   * Default properties.
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    token: null,
  };

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  // render() {
  //   return (
  //     <Segment basic className="header-wrapper" role="banner">
  //       <Container>
  //         <div className="header">
  //           <div className="logo-nav-wrapper">
  //             <div className="logo">
  //               <Logo />
  //             </div>
  //             <Navigation pathname={this.props.pathname} />
  //           </div>
  //         </div>
  //       </Container>
  //     </Segment>
  //   );
  // }

  constructor(props) {
    super(props);
    this.state = {
      activeItem: '',
      activeMenu: false,
      activeSearch: false,
      language: 'en',
      burger: '',
    };
  }

  menuOnClick = (e, x) => {
    this.setState({ activeItem: x.name });
    this.setState({ activeMenu: true });
  };

  searchOnClick = (e, x) => {
    if (this.state.activeMenu === true) {
      this.setState({ burger: '' });
      this.setState({ activeMenu: false });
    }
    this.setState({ activeSearch: !this.state.activeSearch });
    this.setState({ activeItem: '' });
  };

  onLanguageSelection = (e, data) => {
    this.setState({
      language: data.text.props.children[1].props.children,
    });
  };

  mobileBurgerOnClick = () => {
    if (this.state.activeSearch === true) {
      this.setState({ activeSearch: false });
    }

    if (this.state.burger === '') {
      this.setState({ burger: 'open' });
      this.setState({ activeMenu: true });
    } else {
      this.setState({ burger: '' });
      this.setState({ activeMenu: false });
    }
  };

  desktopBurgerOnClick = () => {
    this.setState({ activeMenu: false });
    this.setState({ activeItem: '' });
  };

  componentDidUpdate() {
    if (
      this.state.activeSearch ||
      this.state.burger === 'open' ||
      this.state.activeMenu
    ) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }

  render() {
    return (
      <div className="eea header">
        <Header.TopHeader>
          <Header.TopItem className="official-union mobile or lower hidden">
            <Image src={eeaFlag} alt="eea flag"></Image>

            <Dropdown
              text="An official website of the European Union | How do you Know?"
              icon="chevron down"
              aria-label="dropdown"
            >
              <Dropdown.Menu id="eea-official-union-dropdown" role="group">
                <div className="content">
                  <p>
                    All official European Union website addresses are in the{' '}
                    <b>europa.eu</b> domain.
                  </p>
                  <a
                    href="https://europa.eu/european-union/contact/institutions-bodies_en"
                    target="_blank"
                    rel="noreferrer"
                    role="option"
                    aria-selected="false"
                  >
                    See all EU institutions and bodies
                  </a>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </Header.TopItem>

          <Header.TopItem className="official-union mobile only">
            <Image src={eeaFlag} alt="eea flag"></Image>

            <Dropdown
              text="An official EU website"
              icon="chevron down"
              aria-label="dropdown"
            >
              <Dropdown.Menu role="group">
                <div role="option" aria-selected="false" className="content">
                  <p>
                    All official European Union website addresses are in the{' '}
                    <b>europa.eu</b> domain.
                  </p>
                  <a
                    href="https://europa.eu/european-union/contact/institutions-bodies_en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See all EU institutions and bodies
                  </a>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </Header.TopItem>

          {this.props.linksDropdown && (
            <Header.TopItem>
              <Dropdown
                id="theme-sites"
                className="tablet or lower hidden"
                text={this.props.linksDropdown.title}
                icon="chevron down"
                aria-label="dropdown"
              >
                <Dropdown.Menu role="group">
                  <div className="wrapper">
                    {this.props.linksDropdown.links.map((item, index) => (
                      <Dropdown.Item key={index}>
                        <a
                          href={item.href}
                          className="site"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {item.title}
                        </a>
                      </Dropdown.Item>
                    ))}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </Header.TopItem>
          )}

          {this.props.languages && (
            <Dropdown
              id="language-switcher"
              className="item"
              text={`${this.state.language.toUpperCase()}`}
              icon={
                <Image
                  src={globeIcon}
                  alt="language dropdown globe icon"
                ></Image>
              }
              aria-label="dropdown"
            >
              <Dropdown.Menu>
                <div className="wrapper">
                  {this.props.languages.map((item, index) => (
                    <Dropdown.Item
                      key={index}
                      text={
                        <span>
                          {item.name}
                          <span className="country-code">
                            {item.code.toUpperCase()}
                          </span>
                        </span>
                      }
                      onClick={this.onLanguageSelection}
                    ></Dropdown.Item>
                  ))}
                </div>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Header.TopHeader>
        <Header.Main
          activeSearch={this.state.activeSearch}
          activeMenu={this.state.activeMenu}
          menuItems={this.props.menuItems}
        >
          <Grid>
            <Grid.Column mobile={8} tablet={8} computer={4}>
              <Logo id="logo"></Logo>
            </Grid.Column>
            <Grid.Column mobile={4} tablet={4} computer={8}>
              <div className="main-menu">
                {!this.state.activeSearch &&
                  !this.state.activeMenu &&
                  this.props.menuItems && (
                    <Menu className="eea-main-menu tablet or lower hidden" text>
                      {this.props.menuItems.map((item) => (
                        <Menu.Item
                          name={item.key}
                          onClick={this.menuOnClick}
                          active={this.state.activeItem === item.key}
                          key={item['@id']}
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
                    <Icon name="close" />
                  </Header.BurgerAction>
                )}
                <div
                  className="eea-header-search-action "
                  onClick={this.searchOnClick}
                  role="none"
                >
                  <Icon name={!this.state.activeSearch ? 'search' : 'close'} />
                </div>
                <Header.BurgerAction
                  className={`mobile ${this.state.burger}`}
                  onClick={this.mobileBurgerOnClick}
                >
                  <Icon
                    name={this.state.burger === 'open' ? 'close' : 'bars'}
                  ></Icon>
                </Header.BurgerAction>
              </div>
            </Grid.Column>
          </Grid>
        </Header.Main>
      </div>
    );
  }
}

const TopHeader = (props) => (
  <div className="top bar">
    <Container>{props.children}</Container>
  </div>
);

Header.TopHeader = TopHeader;

const TopItem = (props) => (
  <div className={`item ${props.className}`} id={props.id}>
    {props.children}
  </div>
);

Header.TopItem = TopItem;

const Main = (props) => (
  <div className="main bar">
    <Container>{props.children}</Container>
    {props.activeSearch && <HeaderSearchPopUp />}
    {props.activeMenu && <HeaderMenuPopUp menuItems={props.menuItems} />}
  </div>
);

Header.Main = Main;

const BurgerAction = (props) => (
  <div
    className={`eea-header-burger-action ${props.className}`}
    role="none"
    onClick={props.onClick}
  >
    {props.children}
  </div>
);

Header.BurgerAction = BurgerAction;

export default connect((state) => ({
  token: state.userSession.token,
}))(Header);
