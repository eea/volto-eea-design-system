/**
 * Header component.
 * @module components/theme/Header/Header
 */

import React, { Component, useState } from 'react';
import { Container, Segment, Dropdown, Image, Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../../../../../theme/themes/eea/assets/images/Header/EeaLogo.png';
import menuIcon from '../../../../../theme/themes/eea/assets/images/Header/hamburgerMenuIcon.png';
import searchIcon from '../../../../../theme/themes/eea/assets/images/Header/searchIcon.png';
import vector from '../../../../../theme/themes/eea/assets/images/Header/Vector.png';
import eeaIcon from '../../../../../theme/themes/eea/assets/images/Header/eeaIcon.png';
import arrow from '../../../../../theme/themes/eea/assets/images/Header/down-arrow.png';

import { Logo, Navigation } from '@plone/volto/components';

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
    };
  }

  menuOnClick = (e, x) => {
    console.log(x);
    this.setState({ activeItem: x.name });
  };

  render() {
    const items = [
      {
        key: 'item 1',
        name: 'Item 1',
        active: false,
        style: {
          width: '111.49px',
          height: '14.54px',
          marginRight: '20.51px',
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#3D5265',
        },
      },
      {
        key: 'item 2',
        name: 'Item 2',
        active: false,
        style: {
          width: '111.49px',
          height: '14.54px',
          marginRight: '20.51px',
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#3D5265',
        },
      },
      {
        key: 'item 3',
        name: 'Item 3',
        active: false,
        style: {
          width: '111.49px',
          height: '14.54px',
          marginRight: '20.51px',
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#3D5265',
        },
      },
      {
        key: 'item 4',
        name: 'Item 4',
        active: false,
        style: {
          width: '111.49px',
          height: '14.54px',
          marginRight: '20.51px',
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#3D5265',
        },
      },
      {
        key: 'item 5',
        name: 'Item 5',
        active: false,
        style: {
          width: '111.49px',
          height: '14.54px',
          marginRight: '20.51px',
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#3D5265',
        },
      },
      {
        key: 'item 6',
        name: 'Item 6',
        active: false,
        style: {
          width: '111.49px',
          height: '14.54px',
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#3D5265',
        },
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

    const style1 = { ...items[1].style, fontSize: '22px', color: '#00928F' };

    return (
      <Segment basic className="header-wrapper" role="banner">
        <Container>
          <div
            className="top-header"
            style={{
              height: '29px',
              width: '1380px',
              backgroundColor: '#3D5265',
              display: 'flex',
              color: '#FFFFFF',
              fontSize: '12px',
              padding: '0',
              alignItems: 'center',
            }}
          >
            <div
              className="top-header-info"
              style={{
                display: 'flex',
                margin: '1px 403px 1px 153px',
                alignItems: 'center',
              }}
            >
              <p>
                An official website of the European Union |{' '}
                <a
                  href="/#"
                  style={{ textDecoration: 'underline', color: '#FFFFFF' }}
                >
                  See all EU institutions and bodies
                </a>{' '}
              </p>
            </div>

            <Dropdown
              text="EEA Theme Sites "
              icon="chevron down"
              style={{ marginRight: '85px' }}
            ></Dropdown>

            <div
              className="language"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              {/* EN <Image src={vector} style={{marginLeft:"5px"}}></Image> */}
              <Dropdown
                text="EN"
                button
                icon="none"
                style={{
                  backgroundColor: '#3D5265',
                  height: '29px',
                  color: 'white',
                  fontSize: '12px',
                }}
              >
                <Dropdown.Menu>
                  {languagesList.map((item, index) => (
                    <Dropdown.Item
                      key={index}
                      text={item.name + '(' + item.code + ')'}
                    ></Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Image
                src={vector}
                style={{ position: 'relative', left: '-30px' }}
              ></Image>
            </div>
          </div>

          <div
            className="header"
            style={{
              width: '1380px',
              height: '135px',
              display: 'flex',
              marginBottom: '0px',
              padding: '0px',
            }}
          >
            <Image
              src={logo}
              style={{
                width: '311px',
                height: '109.6px',
                margin: '11px 591.39px 7.4px 139px',
              }}
            />
            <div
              style={{
                display: 'flex',
                marginRight: '139.11px',
                position: 'relative',
                top: '-1px',
              }}
            >
              <Image
                src={searchIcon}
                style={{ width: '93px', height: '135px' }}
              />
              <Image
                src={eeaIcon}
                style={{
                  width: '92.5px',
                  height: '135px',
                  position: 'relative',
                  left: '-2px',
                }}
              />
            </div>
          </div>

          <div
            className="header-menu"
            style={{
              width: '1366px',
              height: '40px',
              backgroundColor: '#F9F9F9',
              display: 'flex',
            }}
          >
            <Menu
              text
              style={{
                width: '797.49px',
                height: '20.54px',
                margin: '10px 140.51px 6.46px 428px',
                backgroundColor: '#F9F9F9',
                position: 'relative',
                top: '-10px',
              }}
            >
              {items.map((item) => (
                <Menu.Item
                  name={item.key}
                  style={
                    this.state.activeItem !== item.key ? item.style : style1
                  }
                  onClick={this.menuOnClick}
                  active={this.state.activeItem === item.key}
                >
                  {item.name}
                </Menu.Item>
              ))}
            </Menu>
          </div>
        </Container>
      </Segment>
    );
  }
}

export default connect((state) => ({
  token: state.userSession.token,
}))(Header);
