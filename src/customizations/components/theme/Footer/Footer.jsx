/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React, { Component } from 'react';
import { Segment, Header, Table, Icon, Image } from 'semantic-ui-react';

import EUflag from '@eeacms/volto-eea-design-system/../theme/eea/assets/images/europe-flag.svg';

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */
class Footer extends Component {
  render() {
    return (
      <Segment className="footer-wrapper">
        <div className="first-footer">
          <Segment text-align="center" className="portal-footer">
            <div className="colophon-section">
              <div className="section-centered">
                <Header as="h2" className="section-header">
                  <a href="https://www.eionet.europa.eu/">Eionet</a>
                </Header>
                <p className="media-centered">
                  European Environment Information and Observation Network
                  (Eionet)
                </p>
              </div>
            </div>
            <div className="colophon-section">
              <div className="section-centered">
                <Header as="h2" className="section-header">
                  The EEA also contributes to
                </Header>
                <div className="two-tables">
                  <Table className="left-table">
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell className="table-link-title">
                          {' '}
                          <a href="https://biodiversity.europa.eu/">BISE</a>
                        </Table.Cell>
                        <Table.Cell className="table-link-description">
                          <a href="https://biodiversity.europa.eu/">
                            Biodiversity Information System for Europe
                          </a>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell className="table-link-title">
                          <a href="https://climate-adapt.eea.europa.eu/">
                            Climate-ADAPT
                          </a>
                        </Table.Cell>
                        <Table.Cell className="table-link-description">
                          {' '}
                          <a href="https://climate-adapt.eea.europa.eu/">
                            Climate Adaptation Platform
                          </a>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell className="table-link-title">
                          {' '}
                          <a href="https://insitu.copernicus.eu/">
                            Copernicus In Situ
                          </a>
                        </Table.Cell>
                        <Table.Cell className="table-link-description">
                          <a href="https://insitu.copernicus.eu/">
                            Copernicus in situ component
                          </a>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell className="table-link-title">
                          {' '}
                          <a href="https://land.copernicus.eu/">
                            Copernicus Land
                          </a>
                        </Table.Cell>
                        <Table.Cell className="table-link-description">
                          <a href="https://land.copernicus.eu/">
                            Copernicus land monitoring
                          </a>
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                  <Table className="right-table">
                    <Table.Body>
                      <Table.Row className="right-row">
                        <Table.Cell className="table-link-description">
                          <a href="https://industry.eea.europa.eu/">
                            European Industrial Emissions Portal
                          </a>
                        </Table.Cell>
                        <Table.Cell className="table-link-title">
                          {' '}
                          <a href="https://industry.eea.europa.eu/">EIEP</a>
                        </Table.Cell>
                      </Table.Row>

                      <Table.Row className="right-row">
                        <Table.Cell className="table-link-description">
                          <a href="https://forest.eea.europa.eu/">
                            Forest Information System for Europe
                          </a>
                        </Table.Cell>
                        <Table.Cell className="table-link-title">
                          {' '}
                          <a href="https://forest.eea.europa.eu/">FISE</a>
                        </Table.Cell>
                      </Table.Row>

                      <Table.Row className="right-row">
                        <Table.Cell className="table-link-description">
                          <a href="https://ipchem.jrc.ec.europa.eu/RDSIdiscovery/ipchem/index.html">
                            Information Platform for Chemical Monitoring
                          </a>
                        </Table.Cell>
                        <Table.Cell className="table-link-title">
                          {' '}
                          <a href="https://ipchem.jrc.ec.europa.eu/RDSIdiscovery/ipchem/index.html">
                            IPCHEM
                          </a>
                        </Table.Cell>
                      </Table.Row>

                      <Table.Row className="right-row">
                        <Table.Cell className="table-link-description">
                          {' '}
                          <a href="https://water.europa.eu/marine">
                            Marine Water Information System for Europe
                          </a>
                        </Table.Cell>
                        <Table.Cell className="table-link-title">
                          {' '}
                          <a href="https://water.europa.eu/marine">
                            WISE-Marine
                          </a>
                        </Table.Cell>
                      </Table.Row>

                      <Table.Row className="right-row">
                        <Table.Cell className="table-link-description">
                          {' '}
                          <a href="https://water.europa.eu/freshwater">
                            Fresh Water Information System for Europe
                          </a>
                        </Table.Cell>
                        <Table.Cell className="table-link-title">
                          {' '}
                          <a href="https://water.europa.eu/freshwater">
                            WISE-FreshWater
                          </a>
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </div>
              </div>
            </div>
            <div className="colophon-section">
              <div className="section-centered">
                <Header as="h2" className="section-header">
                  Follow us
                </Header>
                <div className="media-centered">
                  <div className="social-media">
                    <a
                      className="link-plain media"
                      title="Follow us on Twitter"
                      href="https://twitter.com/euenvironment"
                    >
                      <Icon name="twitter square" />
                    </a>
                    <a
                      className="link-plain media"
                      title="Follow us on Facebook"
                      href="https://www.facebook.com/European.Environment.Agency"
                    >
                      <Icon name="facebook" />
                    </a>
                    <a
                      className="link-plain media"
                      title="Follow us on LinkedIn"
                      href="https://www.linkedin.com/company/european-environment-agency"
                    >
                      <Icon name="linkedin" />
                    </a>
                    <a
                      className="link-plain media"
                      title="Follow us on YouTube"
                      href="https://www.youtube.com/user/EEAvideos"
                    >
                      <Icon name="youtube square" />
                    </a>
                    <a
                      className="link-plain media"
                      title="Subscribe to RSS Feed"
                      href="/subscription/news-feeds"
                    >
                      <Icon name="rss square" />
                    </a>
                  </div>
                  <a
                    className="media"
                    title="Subscribe by email"
                    href="/subscription/targeted-subscription"
                  >
                    <Icon name="newspaper outline" />
                    <div className="media-body">
                      <span>Sign up to receive our news notifications</span>
                      <br />
                      <span>and our quarterly e-newsletter</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="colophon-section">
              <div className="section-centered">
                <Header as="h2" className="section-header">
                  <a href="/contact-us">Contact us</a>
                </Header>
                <div className="media-centered">
                  <div className="mx-2">
                    <Icon name="map marker alternate" />
                    <span>
                      Kongens Nytorv 6 <br /> 1050 Copenhagen K
                    </span>
                  </div>
                  <div className="mx-2">
                    <Icon name="phone" flipped="horizontally" />
                    <span>
                      Phone number:
                      <br />
                      <a href="tel:+4533367100">(+45) 33 36 71 00</a>
                    </span>
                  </div>
                  <div className="mx-2">
                    <a href="https://www.eea.europa.eu/contact-us">
                      <Icon name="comment" />
                    </a>
                    <span>
                      <a
                        href="https://www.eea.europa.eu/contact-us"
                        className="block"
                      >
                        Ask your question
                      </a>
                      <br />
                      <a href="https://www.eea.europa.eu/media/">
                        Media enquiries
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Segment>
        </div>

        <div className="second-footer">
          <Segment textAlign="center" className="portal-colophon">
            <div className="colophon-section eu-section">
              <a href="https://europa.eu/european-union/about-eu_en">
                <span
                  className="icon-siteaction-europe-flag"
                  alt="EU flag"
                  title="European Union Flag"
                />
                <span className="europe-agency-text">
                  <Image
                    src={EUflag}
                    alt="European Union Flag"
                    title="European Union Flag"
                    height={64}
                    className="eu-flag"
                  />
                  <span> The EEA is an agency of the European Union</span>
                </span>
              </a>
            </div>

            <div className="colophon-section eea-software-info">
              <div className="ui container">
                <p className="colophon-links">
                  <Icon name="database" />
                  Engineered by:&nbsp;
                  <a href="https://www.eea.europa.eu/help/contact-info">
                    EEA Web Team
                  </a>
                </p>

                <p className="colophon-links">
                  Software version:&nbsp;
                  <a href="https://github.com/eea/ims-frontend/releases">
                    EEA IMS Frontend
                  </a>
                  <span> / </span>
                  <a href="https://github.com/eea/eea.docker.kgs/releases">
                    EEA Plone KGS
                  </a>
                </p>

                <p className="colophon-links">
                  <a
                    href="https://www.eea.europa.eu/code"
                    title="Code for developers"
                  >
                    Code for developers
                  </a>
                </p>

                <p className="colophon-links">
                  <a href="https://status.eea.europa.eu" title="Systems Status">
                    Systems Status
                  </a>
                </p>

                <p className="colophon-links">
                  <a href="https://www.eea.europa.eu/legal/">Legal notice</a>
                </p>

                <p className="colophon-links">
                  <a
                    rel="license"
                    href="http://creativecommons.org/licenses/by/2.5/dk/deed.en_GB"
                    title="Creative Commons Attribution License"
                  >
                    <Icon name="creative commons" size="large" />
                    <span>Creative commons license</span>
                  </a>
                </p>

                <p className="colophon-links">
                  <a
                    href="https://www.eea.europa.eu/login_form"
                    title="Log in to CMS"
                  >
                    <strong>CMS login</strong>
                  </a>
                </p>
              </div>
            </div>
          </Segment>
        </div>
      </Segment>
    );
  }
}

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Footer.propTypes = {
  /**
   * i18n object
   */
};

export default Footer;
