/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React, { Component } from 'react';
//import { Segment, Header, Table, Icon, Image, Grid } from 'semantic-ui-react';
import { Segment, Icon, Image, Grid } from 'semantic-ui-react';

//import EUflag from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/europe-flag.svg';
import EULogo from '../../../../../theme/themes/eea/assets/images/Footer/EULogo.png';
import EIONETLogo from '../../../../../theme/themes/eea/assets/images/Footer/EIONETLogo.png';
//import Vector1 from '../../../../../theme/themes/eea/assets/images/Footer/Vector1.png';
//import Vector2 from '../../../../../theme/themes/eea/assets/images/Footer/Vector2.png';
import EEALogo from '../../../../../theme/themes/eea/assets/images/Footer/EEALogo.png';
import Logo1 from '../../../../../theme/themes/eea/assets/images/Footer/Extras/Logo1.png';
import Logo2 from '../../../../../theme/themes/eea/assets/images/Footer/Extras/Logo2.png';
import Logo3 from '../../../../../theme/themes/eea/assets/images/Footer/Extras/Logo3.png';
import Logo4 from '../../../../../theme/themes/eea/assets/images/Footer/Extras/Logo4.png';
import Logo5 from '../../../../../theme/themes/eea/assets/images/Footer/Extras/Logo5.png';
import Logo6 from '../../../../../theme/themes/eea/assets/images/Footer/Extras/Logo6.png';
import Logo7 from '../../../../../theme/themes/eea/assets/images/Footer/Extras/Logo7.png';
import Logo8 from '../../../../../theme/themes/eea/assets/images/Footer/Extras/Logo8.png';
import Logo9 from '../../../../../theme/themes/eea/assets/images/Footer/Extras/Logo9.png';
import Logo10 from '../../../../../theme/themes/eea/assets/images/Footer/Extras/Logo10.png';

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
        <div
          className="top-footer"
          style={{
            height: '124px',
            color: 'white',
            backgroundColor: '#3D5265',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            lineHeight: '21.09px',
          }}
        >
          <div style={{ display: 'flex' }}>
            <Image
              src={EULogo}
              style={{ width: '97.81px', height: '78.06px' }}
            ></Image>
            <div
              style={{
                width: '267px',
                height: '72px',
                fontSize: '18px',
                verticalAlign: 'center',
                marginLeft: '14.81px',
              }}
            >
              <p style={{ margin: '0' }}>
                An official website of the European Union{' '}
              </p>
              <a
                href="/#"
                style={{ color: 'white', textDecoration: 'underline' }}
              >
                See all EU institutions and bodies
              </a>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <Image
              src={EIONETLogo}
              style={{ width: '67px', height: '73px' }}
            ></Image>
            <div
              style={{
                width: '336px',
                height: '67px',
                fontSize: '18px',
                verticalAlign: 'center',
                textAlign: 'center',
              }}
            >
              <p style={{ margin: '0' }}>EIONET </p>
              <p style={{ margin: '0' }}>
                European Environment Information and Observation Network{' '}
              </p>
            </div>
          </div>
        </div>

        <div
          className="footer"
          style={{
            height: '900px',
            background: 'linear-gradient(#00928F,#3D5265)',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <p
            style={{
              marginTop: '79px',
              fontSize: '36px',
              fontWeight: '900',
              letterSpacing: '5%',
              textAlign: 'center',
              marginBottom: '0',
            }}
          >
            The EEA also contributes to
          </p>

          <div
            className="footer-logos"
            style={{
              height: '192px',
              display: 'flex',
              margin: '62px 138px 0px 141px',
              flexWrap: 'wrap',
            }}
          >
            <Grid columns={5}>
              <Grid.Row>
                <Grid.Column>
                  <Image src={Logo1}></Image>
                </Grid.Column>
                <Grid.Column>
                  <Image src={Logo2}></Image>
                </Grid.Column>
                <Grid.Column>
                  <Image src={Logo3}></Image>
                </Grid.Column>
                <Grid.Column>
                  <Image src={Logo4}></Image>``
                </Grid.Column>
                <Grid.Column>
                  <Image src={Logo5}></Image>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Image src={Logo6}></Image>
                </Grid.Column>
                <Grid.Column>
                  <Image src={Logo7}></Image>
                </Grid.Column>
                <Grid.Column>
                  <Image src={Logo8}></Image>
                </Grid.Column>
                <Grid.Column>
                  <Image src={Logo9}></Image>
                </Grid.Column>
                <Grid.Column>
                  <Image src={Logo10}></Image>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>

          <Image src={EEALogo}></Image>

          <div>
            <a href="/#" style={{ color: 'white' }}>
              <Icon size="big" name="twitter"></Icon>
            </a>
            <a href="/#" style={{ color: 'white' }}>
              <Icon size="big" name="facebook"></Icon>
            </a>
            <a href="/#" style={{ color: 'white' }}>
              <Icon size="big" name="linkedin"></Icon>
            </a>
            <a href="/#" style={{ color: 'white' }}>
              <Icon size="big" name="youtube"></Icon>
            </a>
            <a href="/#" style={{ color: 'white' }}>
              <Icon size="big" name="rss"></Icon>
            </a>
            <a href="/#" style={{ color: 'white' }}>
              <Icon size="big" name="instagram"></Icon>
            </a>
          </div>

          <div>
            <p>Contact us</p>
            <span>
              <Icon name="map marker alternate" size="big"></Icon>
              Kongens Nytorv 6 1050 Copenhagen K
            </span>
            <span>
              <Icon name="comment outline" size="big"></Icon>
              Ask your question
            </span>
            <span>
              <Icon name="phone" size="big"></Icon>
              (+45) 33 36 71 00
            </span>
            <span>
              <Icon name="envelope outline" size="big"></Icon>
              Sign up to our newsletter
            </span>
          </div>

          {/* <div style={{ margin: '64.14px 141px 0px 156px' }}>
            <p
              style={{
                fontSize: '36px',
                letterSpacing: '5%',
                marginTop: '79px',
                textAlign: 'center',
              }}
            >
              The EEA also contributes to
            </p>
            <Grid columns={5}>
              <Grid.Row>
                <Grid.Column>
                  <Image src={Logo1}></Image>
                </Grid.Column>
                <Grid.Column>
                  <Image src={Logo2}></Image>
                </Grid.Column>
                <Grid.Column>
                  <Image src={Logo3}></Image>
                </Grid.Column>
                <Grid.Column>
                  <Image src={Logo4}></Image>
                </Grid.Column>
                <Grid.Column>
                  <Image src={Logo5}></Image>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Image src={Logo6}></Image>
                </Grid.Column>
                <Grid.Column>
                  <Image src={Logo7}></Image>
                </Grid.Column>
                <Grid.Column>
                  <Image src={Logo8}></Image>
                </Grid.Column>
                <Grid.Column>
                  <Image src={Logo9}></Image>
                </Grid.Column>
                <Grid.Column>
                  <Image src={Logo10}></Image>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>

          <div
            className="contact-information"
            style={{ margin: '64.14px 141px 0px 156px' }}
          >
            <Grid columns={2} centered>
              <Grid.Row>
                <Grid.Column>
                  <Image src={EEALogo}></Image>
                </Grid.Column>
                <Grid.Column>
                  <h6
                    style={{
                      fontSize: '36px',
                      textAlign: 'center',
                      margin: '0',
                      marginBottom: '32px',
                    }}
                  >
                    Contact us
                  </h6>

                  <Grid columns={2}>
                    <Grid.Row>
                      <Grid.Column style={{ display: 'flex' }}>
                        <Icon name="map marker alternate" size="big"></Icon>
                        <p style={{ marginLeft: '10px' }}>
                          Kongens Nytorv 6 1050 Copenhagen K
                        </p>
                      </Grid.Column>
                      <Grid.Column style={{ display: 'flex' }}>
                        <Icon name="comment outline" size="big"></Icon>
                        <p style={{ marginLeft: '10px' }}>Ask your question</p>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column
                        style={{
                          display: 'flex',
                          position: 'relative',
                          left: '-10px',
                        }}
                      >
                        <Icon name="phone" size="big"></Icon>
                        <p style={{ marginLeft: '10px' }}>(+45) 33 36 71 00</p>
                      </Grid.Column>
                      <Grid.Column style={{ display: 'flex' }}>
                        <Icon name="envelope outline" size="big"></Icon>
                        <p style={{ marginLeft: '10px' }}>
                          Sign up to our newsletter
                        </p>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <a href="/#" style={{ color: 'white' }}>
                    <Icon size="big" name="twitter"></Icon>
                  </a>
                  <a href="/#" style={{ color: 'white' }}>
                    <Icon size="big" name="facebook"></Icon>
                  </a>
                  <a href="/#" style={{ color: 'white' }}>
                    <Icon size="big" name="linkedin"></Icon>
                  </a>
                  <a href="/#" style={{ color: 'white' }}>
                    <Icon size="big" name="youtube"></Icon>
                  </a>
                  <a href="/#" style={{ color: 'white' }}>
                    <Icon size="big" name="rss"></Icon>
                  </a>
                  <a href="/#" style={{ color: 'white' }}>
                    <Icon size="big" name="instagram"></Icon>
                  </a>
                </Grid.Column>
                <Grid.Column
                  style={{ display: 'flex', justifyContent: 'space-evenly' }}
                >
                  <a href="/#" style={{ color: 'white', fontSize: '12px' }}>
                    CMS Login
                  </a>
                  <a href="/#" style={{ color: 'white', fontSize: '12px' }}>
                    Sitemap
                  </a>
                  <a href="/#" style={{ color: 'white', fontSize: '12px' }}>
                    Privacy
                  </a>
                  <a href="/#" style={{ color: 'white', fontSize: '12px' }}>
                    &copy; Copyright
                  </a>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div> */}
        </div>
      </Segment>
    );
  }
}
// class Footer extends Component {
//   render() {
//     return (
//       <Segment className="footer-wrapper">
//         <div className="first-footer">
//           <Segment text-align="center" className="portal-footer">
//             <div className="colophon-section">
//               <div className="section-centered">
//                 <Header as="h2" className="section-header">
//                   <a href="https://www.eionet.europa.eu/">Eionet</a>
//                 </Header>
//                 <p className="media-centered">
//                   European Environment Information and Observation Network
//                   (Eionet)
//                 </p>
//               </div>
//             </div>
//             <div className="colophon-section">
//               <div className="section-centered">
//                 <Header as="h2" className="section-header">
//                   The EEA also contributes to
//                 </Header>
//                 <div className="two-tables">
//                   <Table className="left-table">
//                     <Table.Body>
//                       <Table.Row>
//                         <Table.Cell className="table-link-title">
//                           {' '}
//                           <a href="https://biodiversity.europa.eu/">BISE</a>
//                         </Table.Cell>
//                         <Table.Cell className="table-link-description">
//                           <a href="https://biodiversity.europa.eu/">
//                             Biodiversity Information System for Europe
//                           </a>
//                         </Table.Cell>
//                       </Table.Row>
//                       <Table.Row>
//                         <Table.Cell className="table-link-title">
//                           <a href="https://climate-adapt.eea.europa.eu/">
//                             Climate-ADAPT
//                           </a>
//                         </Table.Cell>
//                         <Table.Cell className="table-link-description">
//                           {' '}
//                           <a href="https://climate-adapt.eea.europa.eu/">
//                             Climate Adaptation Platform
//                           </a>
//                         </Table.Cell>
//                       </Table.Row>
//                       <Table.Row>
//                         <Table.Cell className="table-link-title">
//                           {' '}
//                           <a href="https://insitu.copernicus.eu/">
//                             Copernicus In Situ
//                           </a>
//                         </Table.Cell>
//                         <Table.Cell className="table-link-description">
//                           <a href="https://insitu.copernicus.eu/">
//                             Copernicus in situ component
//                           </a>
//                         </Table.Cell>
//                       </Table.Row>
//                       <Table.Row>
//                         <Table.Cell className="table-link-title">
//                           {' '}
//                           <a href="https://land.copernicus.eu/">
//                             Copernicus Land
//                           </a>
//                         </Table.Cell>
//                         <Table.Cell className="table-link-description">
//                           <a href="https://land.copernicus.eu/">
//                             Copernicus land monitoring
//                           </a>
//                         </Table.Cell>
//                       </Table.Row>
//                     </Table.Body>
//                   </Table>
//                   <Table className="right-table">
//                     <Table.Body>
//                       <Table.Row className="right-row">
//                         <Table.Cell className="table-link-description">
//                           <a href="https://industry.eea.europa.eu/">
//                             European Industrial Emissions Portal
//                           </a>
//                         </Table.Cell>
//                         <Table.Cell className="table-link-title">
//                           {' '}
//                           <a href="https://industry.eea.europa.eu/">EIEP</a>
//                         </Table.Cell>
//                       </Table.Row>

//                       <Table.Row className="right-row">
//                         <Table.Cell className="table-link-description">
//                           <a href="https://forest.eea.europa.eu/">
//                             Forest Information System for Europe
//                           </a>
//                         </Table.Cell>
//                         <Table.Cell className="table-link-title">
//                           {' '}
//                           <a href="https://forest.eea.europa.eu/">FISE</a>
//                         </Table.Cell>
//                       </Table.Row>

//                       <Table.Row className="right-row">
//                         <Table.Cell className="table-link-description">
//                           <a href="https://ipchem.jrc.ec.europa.eu/RDSIdiscovery/ipchem/index.html">
//                             Information Platform for Chemical Monitoring
//                           </a>
//                         </Table.Cell>
//                         <Table.Cell className="table-link-title">
//                           {' '}
//                           <a href="https://ipchem.jrc.ec.europa.eu/RDSIdiscovery/ipchem/index.html">
//                             IPCHEM
//                           </a>
//                         </Table.Cell>
//                       </Table.Row>

//                       <Table.Row className="right-row">
//                         <Table.Cell className="table-link-description">
//                           {' '}
//                           <a href="https://water.europa.eu/marine">
//                             Marine Water Information System for Europe
//                           </a>
//                         </Table.Cell>
//                         <Table.Cell className="table-link-title">
//                           {' '}
//                           <a href="https://water.europa.eu/marine">
//                             WISE-Marine
//                           </a>
//                         </Table.Cell>
//                       </Table.Row>

//                       <Table.Row className="right-row">
//                         <Table.Cell className="table-link-description">
//                           {' '}
//                           <a href="https://water.europa.eu/freshwater">
//                             Fresh Water Information System for Europe
//                           </a>
//                         </Table.Cell>
//                         <Table.Cell className="table-link-title">
//                           {' '}
//                           <a href="https://water.europa.eu/freshwater">
//                             WISE-FreshWater
//                           </a>
//                         </Table.Cell>
//                       </Table.Row>
//                     </Table.Body>
//                   </Table>
//                 </div>
//               </div>
//             </div>
//             <div className="colophon-section">
//               <div className="section-centered">
//                 <Header as="h2" className="section-header">
//                   Follow us
//                 </Header>
//                 <div className="media-centered">
//                   <div className="social-media">
//                     <a
//                       className="link-plain media"
//                       title="Follow us on Twitter"
//                       href="https://twitter.com/euenvironment"
//                     >
//                       <Icon name="twitter square" />
//                     </a>
//                     <a
//                       className="link-plain media"
//                       title="Follow us on Facebook"
//                       href="https://www.facebook.com/European.Environment.Agency"
//                     >
//                       <Icon name="facebook" />
//                     </a>
//                     <a
//                       className="link-plain media"
//                       title="Follow us on LinkedIn"
//                       href="https://www.linkedin.com/company/european-environment-agency"
//                     >
//                       <Icon name="linkedin" />
//                     </a>
//                     <a
//                       className="link-plain media"
//                       title="Follow us on YouTube"
//                       href="https://www.youtube.com/user/EEAvideos"
//                     >
//                       <Icon name="youtube square" />
//                     </a>
//                     <a
//                       className="link-plain media"
//                       title="Subscribe to RSS Feed"
//                       href="/subscription/news-feeds"
//                     >
//                       <Icon name="rss square" />
//                     </a>
//                   </div>
//                   <a
//                     className="media"
//                     title="Subscribe by email"
//                     href="/subscription/targeted-subscription"
//                   >
//                     <Icon name="newspaper outline" />
//                     <div className="media-body">
//                       <span>Sign up to receive our news notifications</span>
//                       <br />
//                       <span>and our quarterly e-newsletter</span>
//                     </div>
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="colophon-section">
//               <div className="section-centered">
//                 <Header as="h2" className="section-header">
//                   <a href="/contact-us">Contact us</a>
//                 </Header>
//                 <div className="media-centered">
//                   <div className="mx-2">
//                     <Icon name="map marker alternate" />
//                     <span>
//                       Kongens Nytorv 6 <br /> 1050 Copenhagen K
//                     </span>
//                   </div>
//                   <div className="mx-2">
//                     <Icon name="phone" flipped="horizontally" />
//                     <span>
//                       Phone number:
//                       <br />
//                       <a href="tel:+4533367100">(+45) 33 36 71 00</a>
//                     </span>
//                   </div>
//                   <div className="mx-2">
//                     <a href="https://www.eea.europa.eu/contact-us">
//                       <Icon name="comment" />
//                     </a>
//                     <span>
//                       <a
//                         href="https://www.eea.europa.eu/contact-us"
//                         className="block"
//                       >
//                         Ask your question
//                       </a>
//                       <br />
//                       <a href="https://www.eea.europa.eu/media/">
//                         Media enquiries
//                       </a>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Segment>
//         </div>

//         <div className="second-footer">
//           <Segment textAlign="center" className="portal-colophon">
//             <div className="colophon-section eu-section">
//               <a href="https://europa.eu/european-union/about-eu_en">
//                 <span
//                   className="icon-siteaction-europe-flag"
//                   alt="EU flag"
//                   title="European Union Flag"
//                 />
//                 <span className="europe-agency-text">
//                   <Image
//                     src={EUflag}
//                     alt="European Union Flag"
//                     title="European Union Flag"
//                     height={64}
//                     className="eu-flag"
//                   />
//                   <span> The EEA is an agency of the European Union</span>
//                 </span>
//               </a>
//             </div>

//             <div className="colophon-section eea-software-info">
//               <div className="ui container">
//                 <p className="colophon-links">
//                   <Icon name="database" />
//                   Engineered by:&nbsp;
//                   <a href="https://www.eea.europa.eu/help/contact-info">
//                     EEA Web Team
//                   </a>
//                 </p>

//                 <p className="colophon-links">
//                   Software version:&nbsp;
//                   <a href="https://github.com/eea/ims-frontend/releases">
//                     EEA IMS Frontend
//                   </a>
//                   <span> / </span>
//                   <a href="https://github.com/eea/eea.docker.kgs/releases">
//                     EEA Plone KGS
//                   </a>
//                 </p>

//                 <p className="colophon-links">
//                   <a
//                     href="https://www.eea.europa.eu/code"
//                     title="Code for developers"
//                   >
//                     Code for developers
//                   </a>
//                 </p>

//                 <p className="colophon-links">
//                   <a href="https://status.eea.europa.eu" title="Systems Status">
//                     Systems Status
//                   </a>
//                 </p>

//                 <p className="colophon-links">
//                   <a href="https://www.eea.europa.eu/legal/">Legal notice</a>
//                 </p>

//                 <p className="colophon-links">
//                   <a
//                     rel="license"
//                     href="http://creativecommons.org/licenses/by/2.5/dk/deed.en_GB"
//                     title="Creative Commons Attribution License"
//                   >
//                     <Icon name="creative commons" size="large" />
//                     <span>Creative commons license</span>
//                   </a>
//                 </p>

//                 <p className="colophon-links">
//                   <a
//                     href="https://www.eea.europa.eu/login_form"
//                     title="Log in to CMS"
//                   >
//                     <strong>CMS login</strong>
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </Segment>
//         </div>
//       </Segment>
//     );
//   }
// }

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
