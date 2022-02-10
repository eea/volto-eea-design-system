/**
 * Header component.
 * @module components/theme/Header/Header
 */

import React, { Component } from 'react';
import { Container, Image, Menu, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import eeaFlag from '../../../../../theme/themes/eea/assets/images/Header/eea.png';
import searchIcon from '../../../../../theme/themes/eea/assets/images/Header/search.png';
//import globeIcon from '../../../../../theme/themes/eea/assets/images/Header/globeIcon.png';
import HeaderSearchPopUp from './HeaderSearchPopUp';
import HeaderMenuPopUp from './HeaderMenuPopUp';
import Logo from '../Logo/Logo';

import { Col } from '../Grid/Col';

//import { Logo, Navigation } from '@plone/volto/components';

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
    pathname: PropTypes.string.isRequired,
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

  burgerOnClick = () => {
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
    const items = [
      {
        key: 'item 1',
        name: 'Item 1',
        active: false,
      },
      {
        key: 'item 2',
        name: 'Item 2',
        active: false,
      },
      {
        key: 'item 3',
        name: 'Item 3',
        active: false,
      },
      {
        key: 'item 4',
        name: 'Item 4',
        active: false,
      },
      {
        key: 'item 5',
        name: 'Item 5',
        active: false,
      },
    ];

    // const languagesList = [
    //   { name: 'Albanian', code: 'sq' },
    //   { name: 'Български', code: 'bg' },
    //   { name: 'Bosnian', code: 'bs' },
    //   { name: 'čeština', code: 'cs' },
    //   { name: 'Hrvatski', code: 'hr' },
    //   { name: 'dansk', code: 'da' },
    //   { name: 'Nederlands', code: 'nl' },
    //   { name: 'ελληνικά', code: 'el' },
    //   { name: 'English', code: 'en' },
    //   { name: 'eesti', code: 'et' },
    //   { name: 'Suomi', code: 'fi' },
    //   { name: 'Français', code: 'fr' },
    //   { name: 'Deutsch', code: 'de' },
    //   { name: 'magyar', code: 'hu' },
    //   { name: 'Íslenska', code: 'is' },
    //   { name: 'italiano', code: 'it' },
    //   { name: 'Latviešu', code: 'lv' },
    //   { name: 'lietuvių', code: 'lt' },
    //   { name: 'Macedonian', code: 'mk' },
    //   { name: 'Malti', code: 'mt' },
    //   { name: 'Norsk', code: 'no' },
    //   { name: 'polski', code: 'pl' },
    //   { name: 'Português', code: 'pt' },
    //   { name: 'Română', code: 'ro' },
    //   { name: 'slovenčina', code: 'sk' },
    //   { name: 'Slovenščina', code: 'sl' },
    //   { name: 'Español', code: 'es' },
    //   { name: 'Svenska', code: 'sv' },
    //   { name: 'Türkçe', code: 'tr' },
    // ];

    return (
      <div className="eea-header">
        {/* <div className="eea-top-header">
          <Container>
            <div id="eea-official-union" className="eea-top-header-item">
              <Image src={eeaFlag} alt="eea flag"></Image>

              <Dropdown
                text="An official website of the European Union | How do you Know?"
                icon="chevron down"
                aria-label="dropdown"
              >
                <Dropdown.Menu id="eea-official-union-dropdown" role="group">
                  <div>
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
            </div>

            <div id="eea-official-union-mobile" className="eea-top-header-item">
              <Image src={eeaFlag} alt="eea flag"></Image>

              <Dropdown
                text="An official EU website"
                icon="chevron down"
                aria-label="dropdown"
              >
                <Dropdown.Menu
                  id="eea-official-union-dropdown-mobile"
                  role="group"
                >
                  <div role="option" aria-selected="false">
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
            </div>

            <Dropdown
              id="eea-top-header-theme-sites"
              className="eea-top-header-item"
              text="Environmental information systems"
              icon="chevron down"
              aria-label="dropdown"
            >
              <Dropdown.Menu id="eea-theme-sites-dropdown" role="group">
                <div id="eea-theme-sites-list">
                  <div
                    className="eea-theme-site-item"
                    role="option"
                    aria-selected="false"
                  >
                    <a href="/#" target="_blank">
                      Biodiversity Information System for Europe
                    </a>
                  </div>
                  <div
                    className="eea-theme-site-item"
                    role="option"
                    aria-selected="false"
                  >
                    <a href="/#" target="_blank">
                      Climate Adaptation Platform
                    </a>
                  </div>
                  <div
                    className="eea-theme-site-item"
                    role="option"
                    aria-selected="false"
                  >
                    <a href="/#" target="_blank">
                      Copernicus in situ component
                    </a>
                    <br />
                  </div>
                  <div
                    className="eea-theme-site-item"
                    role="option"
                    aria-selected="false"
                  >
                    <a href="/#" target="_blank">
                      European Industrial Emissions Portal
                    </a>
                  </div>
                  <div
                    className="eea-theme-site-item"
                    role="option"
                    aria-selected="false"
                  >
                    <a href="/#" target="_blank">
                      Forest Information System for Europe
                    </a>
                  </div>
                  <div
                    className="eea-theme-site-item"
                    role="option"
                    aria-selected="false"
                  >
                    <a href="/#" target="_blank">
                      Information Platform for Chemical Monitoring
                    </a>
                  </div>
                  <div
                    className="eea-theme-site-item"
                    role="option"
                    aria-selected="false"
                  >
                    <a href="/#" target="_blank">
                      Marine Water Information System for Europe
                    </a>
                  </div>
                  <div
                    className="eea-theme-site-item"
                    role="option"
                    aria-selected="false"
                  >
                    <a href="/#" target="_blank">
                      Fresh Water Information System for Europe
                    </a>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown
              id="eea-top-header-language-dropdown"
              className="eea-top-header-item"
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
                {languagesList.map((item, index) => (
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
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </div> */}

        <div className="eea-main-header">
          <Container>
            <Grid.Row>
              <Col desktop="4" tablet="5" mobile="3">
                {/* <Image src={logo} id="eea-logo" alt="eea logo"></Image> */}
                <Logo id="eea-logo"></Logo>
              </Col>
              <Col desktop="8" tablet="3" mobile="1">
                <div className="eea-main-header-menu">
                  {!this.state.activeSearch && !this.state.activeMenu && (
                    <Menu className="eea-main-menu" text>
                      {items.map((item) => (
                        <Menu.Item
                          className="eea-main-menu-item"
                          name={item.key}
                          onClick={this.menuOnClick}
                          active={this.state.activeItem === item.key}
                          key={item.key}
                        >
                          {item.name}
                        </Menu.Item>
                      ))}
                    </Menu>
                  )}
                  {this.state.activeMenu && (
                    <div
                      className="eea-header-burger-action desktop"
                      role="none"
                      onClick={() => {
                        this.setState({ activeMenu: false });
                        this.setState({ activeItem: '' });
                      }}
                    >
                      <span></span>
                      <span></span>
                    </div>
                  )}
                  <div className="eea-header-search-action ">
                    {!this.state.activeSearch ? (
                      <Image
                        src={searchIcon}
                        alt="search icon"
                        onClick={this.searchOnClick}
                      ></Image>
                    ) : (
                      <div
                        onClick={this.searchOnClick}
                        className="eea-header-search-action "
                        role="none"
                      >
                        <span></span>
                        <span></span>
                      </div>
                    )}
                  </div>

                  <div
                    className={`eea-header-burger-action mobile ${this.state.burger}`}
                    role="none"
                    onClick={this.burgerOnClick}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </Col>
            </Grid.Row>
          </Container>
          {this.state.activeSearch && <HeaderSearchPopUp></HeaderSearchPopUp>}
          {this.state.activeMenu && <HeaderMenuPopUp></HeaderMenuPopUp>}
        </div>
      </div>
    );
  }
}

export default connect((state) => ({
  token: state.userSession.token,
}))(Header);
