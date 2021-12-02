/**
 * Navigation components.
 * @module components/theme/Navigation/Navigation
 */

import { getNavigation } from '@plone/volto/actions';
import { Anontools, SearchWidget } from '@plone/volto/components';
import { getBaseUrl } from '@plone/volto/helpers';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { defineMessages, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import {
  Accordion,
  Button,
  Icon,
  Image,
  List,
  Menu,
  Popup,
} from 'semantic-ui-react';
import config from '@plone/volto/registry';
import EUflag from '@eeacms/volto-eea-design-system/../theme/eea/assets/images/europe-flag.svg';
import throttle from 'lodash.throttle';

const messages = defineMessages({
  closeMobileMenu: {
    id: 'Close menu',
    defaultMessage: 'Close menu',
  },
  openMobileMenu: {
    id: 'Open menu',
    defaultMessage: 'Open menu',
  },
});
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

/**
 * Navigation container class.
 * @class Navigation
 * @extends Component
 */
class Navigation extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    getNavigation: PropTypes.func.isRequired,
    pathname: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string,
      }),
    ).isRequired,
    lang: PropTypes.string.isRequired,
  };

  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs Navigation
   */
  constructor(props) {
    super(props);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.closeMobileMenu = this.closeMobileMenu.bind(this);
    this.onLinkClick = this.onLinkClick.bind(this);
    this.state = {
      isMobileMenuOpen: false,
      activeIndex: -1,
      is_visible: false,
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener(
      'scroll',
      throttle(() => scrollComponent.toggleVisibility(), 500),
    );
  }

  /**
   * Toggle visibility based on page y offset
   */
  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }

  /**
   * Will scroll to top
   */
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  /**
   * Component will mount
   * @method componentWillMount
   * @returns {undefined}
   */
  UNSAFE_componentWillMount() {
    this.props.getNavigation(
      getBaseUrl(this.props.pathname),
      config.settings.navDepth,
    );
  }

  /**
   * Component will receive props
   * @method componentWillReceiveProps
   * @param {Object} nextProps Next properties
   * @returns {undefined}
   */
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.pathname !== this.props.pathname) {
      this.props.getNavigation(
        getBaseUrl(nextProps.pathname),
        config.settings.navDepth,
      );
    }
  }
  /**
   * Will toggle open/close
   * @param {Object} e - event
   * @param {number} titleProps - index of the content to be revealed
   */
  toggleOpenAccordion = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  /**
   * Toggle mobile menu's open state
   * @method toggleMobileMenu
   */
  toggleMobileMenu() {
    this.setState({ isMobileMenuOpen: !this.state.isMobileMenuOpen });
  }

  /**
   * Close mobile menu
   * @method closeMobileMenu
   */
  closeMobileMenu() {
    if (!this.state.isMobileMenuOpen) {
      return;
    }
    this.setState({ isMobileMenuOpen: false });
  }

  /**
   * Click an internal link
   * @method onLinkClick
   * @returns {undefined}
   */
  onLinkClick(evt, url) {
    evt.preventDefault();
    this.closeMobileMenu();
  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    const { lang } = this.props;
    const { activeIndex, is_visible } = this.state;

    return (
      <nav className="navigation">
        <div className="hamburger-wrapper mobile tablet computer only">
          <button
            className={cx('hamburger hamburger--boring', {
              'is-active': this.state.isMobileMenuOpen,
            })}
            aria-label={
              this.state.isMobileMenuOpen
                ? this.props.intl.formatMessage(messages.closeMobileMenu, {
                    type: this.props.type,
                  })
                : this.props.intl.formatMessage(messages.openMobileMenu, {
                    type: this.props.type,
                  })
            }
            title={
              this.state.isMobileMenuOpen
                ? this.props.intl.formatMessage(messages.closeMobileMenu, {
                    type: this.props.type,
                  })
                : this.props.intl.formatMessage(messages.openMobileMenu, {
                    type: this.props.type,
                  })
            }
            type="button"
            onClick={this.toggleMobileMenu}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>
        <Menu
          stackable
          pointing
          secondary
          className={this.state.isMobileMenuOpen ? 'open' : 'large screen only'}
        >
          <div className="navigation-links">
            {this.props.items.map((item) => (
              <NavLink
                to={item.url === '' ? '/' : item.url}
                key={item.url}
                className="item"
                activeClassName="active"
                exact={
                  config.settings.isMultilingual
                    ? item.url === `/${lang}`
                    : item.url === ''
                }
              >
                {item.title}
              </NavLink>
            ))}
          </div>

          <div className="tools-wrapper">
            <Popup
              on="click"
              className="large screen only custom-search-pop"
              trigger={
                <div className="tools-change-language">
                  <Icon name="globe" size="big" />
                  <span>EN</span>
                </div>
              }
              content={
                <List bulleted className="languages-list">
                  {languagesList.map((language, index) => (
                    <List.Item key={index}>
                      <List.Content>
                        <List.Description>
                          <a href={`/${language.code}`}>
                            {`${language.name} (${language.code})`}
                          </a>
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  ))}
                </List>
              }
              position="top left"
            />

            <div className="mobile tablet computer only fill-width">
              <Accordion fluid styled>
                <Accordion.Title
                  active={activeIndex === 0}
                  index={0}
                  onClick={this.toggleOpenAccordion}
                  className="languages-title-list"
                >
                  EEA homepage in your language
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                  <List bulleted className="languages-list">
                    {languagesList.map((language, index) => (
                      <List.Item key={index}>
                        <List.Content>
                          <List.Description>
                            <a href={`/${language.code}`}>
                              {`${language.name} (${language.code})`}
                            </a>
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    ))}
                  </List>
                </Accordion.Content>
              </Accordion>
            </div>

            <div className="tools-search-wrapper">
              {!this.props.token && (
                <div className="tools">
                  <Anontools handleClick={this.closeMobileMenu} />
                </div>
              )}

              <div className="search">
                <SearchWidget pathname={this.props.pathname} />
              </div>
            </div>

            <div>
              <a
                href="https://europa.eu/european-union/about-eu_en"
                title="The EEA is an agency of the European Union"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={EUflag}
                  alt="The EEA is an agency of the European Union"
                  title="The EEA is an agency of the European Union"
                  height={64}
                  className="eu-flag"
                />
              </a>
            </div>
          </div>
        </Menu>

        {/* Back to top button */}

        {is_visible && (
          <Button icon id="button" onClick={() => this.scrollToTop()}>
            <Icon name="arrow up" />
          </Button>
        )}
      </nav>
    );
  }
}

export default compose(
  injectIntl,
  connect(
    (state) => ({
      items:
        state.navigation.items?.filter(
          (item) =>
            !(
              item?.url?.includes('http://') || item?.url?.includes('https://')
            ),
        ) || [],
      lang: state.intl.locale,
    }),
    { getNavigation },
  ),
)(Navigation);
