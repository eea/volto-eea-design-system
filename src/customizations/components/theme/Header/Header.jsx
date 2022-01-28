/**
 * Header component.
 * @module components/theme/Header/Header
 */

import React, { Component } from 'react';
import { Container, Dropdown, Image, Menu, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import eeaFlag from '../../../../../theme/themes/eea/assets/images/Header/eea.png';
import logo from '../../../../../theme/themes/eea/assets/images/Header/eea-logo.svg';
import searchIcon from '../../../../../theme/themes/eea/assets/images/Header/search.png';
import closeIcon from '../../../../../theme/themes/eea/assets/images/Header/close.png';
import HeaderSearchPopUp from './HeaderSearchPopUp';
import HeaderMenuPopUp from './HeaderMenuPopUp';

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
    this.setState({ activeSearch: !this.state.activeSearch });
  };

  onLanguageSelection = (e, data) => {
    this.setState({
      language: data.text.props.children[1].props.children,
    });
  };

  burgerOnClick = () => {
    if (this.state.burger === '') {
      this.setState({ burger: 'open' });
      this.setState({ activeMenu: true });
    } else {
      this.setState({ burger: '' });
      this.setState({ activeMenu: false });
    }
  };

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

    const languagesList = [
      { name: 'Albanian', code: 'sq' },
      { name: 'Български', code: 'bg' },
      { name: 'Bosnian', code: 'bs' },
      { name: 'čeština', code: 'cs' },
      { name: 'Hrvatski', code: 'hr' },
      { name: 'dansk', code: 'da' },
      { name: 'Nederlands', code: 'nl' },
      { name: 'ελληνικά', code: 'el' },
      { name: 'English', code: 'en' },
      { name: 'eesti', code: 'et' },
      { name: 'Suomi', code: 'fi' },
      { name: 'Français', code: 'fr' },
      { name: 'Deutsch', code: 'de' },
      { name: 'magyar', code: 'hu' },
      { name: 'Íslenska', code: 'is' },
      { name: 'italiano', code: 'it' },
      { name: 'Latviešu', code: 'lv' },
      { name: 'lietuvių', code: 'lt' },
      { name: 'Macedonian', code: 'mk' },
      { name: 'Malti', code: 'mt' },
      { name: 'Norsk', code: 'no' },
      { name: 'polski', code: 'pl' },
      { name: 'Português', code: 'pt' },
      { name: 'Română', code: 'ro' },
      { name: 'slovenčina', code: 'sk' },
      { name: 'Slovenščina', code: 'sl' },
      { name: 'Español', code: 'es' },
      { name: 'Svenska', code: 'sv' },
      { name: 'Türkçe', code: 'tr' },
    ];

    return (
      <div className="eea-header">
        <div className="eea-top-header">
          <Container>
            <div id="eea-official-union" className="eea-top-header-item">
              <Image src={eeaFlag} alt="eea flag"></Image>

              <Dropdown
                text="An official website of the European Union | How do you Know?"
                icon="chevron down"
              >
                <Dropdown.Menu id="eea-official-union-dropdown">
                  <div>
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

            <div id="eea-official-union-mobile" className="eea-top-header-item">
              <Image src={eeaFlag} alt="eea flag"></Image>

              <Dropdown text="An official EU website" icon="chevron down">
                <Dropdown.Menu id="eea-official-union-dropdown-mobile">
                  <div>
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
            >
              <Dropdown.Menu id="eea-theme-sites-dropdown">
                <div id="eea-theme-sites-list">
                  <div className="eea-theme-site-item">
                    <a href="/#" target="_blank">
                      Biodiversity Information System for Europe
                    </a>
                  </div>
                  <div className="eea-theme-site-item">
                    <a href="/#" target="_blank">
                      Climate Adaptation Platform
                    </a>
                  </div>
                  <div className="eea-theme-site-item">
                    <a href="/#" target="_blank">
                      Copernicus in situ component
                    </a>
                    <br />
                  </div>
                  <div className="eea-theme-site-item">
                    <a href="/#" target="_blank">
                      European Industrial Emissions Portal
                    </a>
                  </div>
                  <div className="eea-theme-site-item">
                    <a href="/#" target="_blank">
                      Forest Information System for Europe
                    </a>
                  </div>
                  <div className="eea-theme-site-item">
                    <a href="/#" target="_blank">
                      Information Platform for Chemical Monitoring
                    </a>
                  </div>
                  <div className="eea-theme-site-item">
                    <a href="/#" target="_blank">
                      Marine Water Information System for Europe
                    </a>
                  </div>
                  <div className="eea-theme-site-item">
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
              icon="globe"
            >
              <Dropdown.Menu>
                {languagesList.map((item, index) => (
                  <Dropdown.Item
                    key={index}
                    text={
                      <span>
                        {item.name}
                        <span
                          className="country-code"
                          style={{ fontWeight: 'bold', marginLeft: '3px' }}
                        >
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
        </div>

        <div className="eea-main-header">
          <Container>
            <Grid.Row>
              <Col desktop="4" tablet="5" mobile="3">
                <Image src={logo} id="eea-logo" alt="eea logo"></Image>
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
      // <Segment basic className="header-wrapper" role="banner">
      //   <Container>
      //     <div
      //       className="top-header"
      //       style={{
      //         height: '29px',
      //         width: '1380px',
      //         backgroundColor: '#3D5265',
      //         display: 'flex',
      //         color: '#FFFFFF',
      //         fontSize: '12px',
      //         padding: '0',
      //         alignItems: 'center',
      //       }}
      //     >
      //       <div
      //         className="top-header-info"
      //         style={{
      //           display: 'flex',
      //           margin: '1px 403px 1px 153px',
      //           alignItems: 'center',
      //         }}
      //       >
      //         <p>
      //           An official website of the European Union |{' '}
      //           <a
      //             href="/#"
      //             style={{ textDecoration: 'underline', color: '#FFFFFF' }}
      //           >
      //             See all EU institutions and bodies
      //           </a>{' '}
      //         </p>
      //       </div>

      //       <Dropdown
      //         text="EEA Theme Sites "
      //         icon="chevron down"
      //         style={{ marginRight: '85px' }}
      //       ></Dropdown>

      //       <div
      //         className="language"
      //         style={{ display: 'flex', alignItems: 'center' }}
      //       >
      //         {/* EN <Image src={vector} style={{marginLeft:"5px"}}></Image> */}
      //         <Dropdown
      //           text="EN"
      //           button
      //           icon="none"
      //           style={{
      //             backgroundColor: '#3D5265',
      //             height: '29px',
      //             color: 'white',
      //             fontSize: '12px',
      //           }}
      //         >
      //           <Dropdown.Menu>
      //             {languagesList.map((item, index) => (
      //               <Dropdown.Item
      //                 key={index}
      //                 text={item.name + '(' + item.code + ')'}
      //               ></Dropdown.Item>
      //             ))}
      //           </Dropdown.Menu>
      //         </Dropdown>
      //         <Image
      //           src={vector}
      //           style={{ position: 'relative', left: '-30px' }}
      //         ></Image>
      //       </div>
      //     </div>

      //     <div
      //       className="header"
      //       style={{
      //         width: '1380px',
      //         height: '135px',
      //         display: 'flex',
      //         marginBottom: '0px',
      //         padding: '0px',
      //       }}
      //     >
      //       <Image
      //         src={logo}
      //         style={{
      //           width: '311px',
      //           height: '109.6px',
      //           margin: '11px 591.39px 7.4px 139px',
      //         }}
      //       />
      //       <div
      //         style={{
      //           display: 'flex',
      //           marginRight: '139.11px',
      //           position: 'relative',
      //           top: '-1px',
      //         }}
      //       >
      //         <Image
      //           src={searchIcon}
      //           style={{ width: '93px', height: '135px' }}
      //         />
      //         <Image
      //           src={eeaIcon}
      //           style={{
      //             width: '92.5px',
      //             height: '135px',
      //             position: 'relative',
      //             left: '-2px',
      //           }}
      //         />
      //       </div>
      //     </div>

      //     <div
      //       className="header-menu"
      //       style={{
      //         width: '1366px',
      //         height: '40px',
      //         backgroundColor: '#F9F9F9',
      //         display: 'flex',
      //       }}
      //     >
      //       <Menu
      //         text
      //         style={{
      //           width: '797.49px',
      //           height: '20.54px',
      //           margin: '10px 140.51px 6.46px 428px',
      //           backgroundColor: '#F9F9F9',
      //           position: 'relative',
      //           top: '-10px',
      //         }}
      //       >
      //         {items.map((item) => (
      //           <Menu.Item
      //             name={item.key}
      //             style={
      //               this.state.activeItem !== item.key ? item.style : style1
      //             }
      //             onClick={this.menuOnClick}
      //             active={this.state.activeItem === item.key}
      //           >
      //             {item.name}
      //           </Menu.Item>
      //         ))}
      //       </Menu>
      //     </div>
      //   </Container>
      // </Segment>
    );
  }
}

export default connect((state) => ({
  token: state.userSession.token,
}))(Header);
