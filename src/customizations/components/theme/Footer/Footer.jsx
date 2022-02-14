/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React, { Component } from 'react';
//import { Segment, Header, Table, Icon, Image, Grid } from 'semantic-ui-react';
import { Icon, Image, Grid, Container } from 'semantic-ui-react';
import ThemeSites from './theme-sites.js';

//import AbstractImg from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/Extras/abstract-visual.svg';
//import EULogo from '../../../../../theme/themes/eea/assets/images/Footer/EULogo.png';
import EIONETLogo from '../../../../../theme/themes/eea/assets/images/Footer/EIONETLogo.png';
import EEALogo from '../../../../../theme/themes/eea/assets/images/Footer/EEA-Logo-white.svg';

import { Col } from '../Grid/Col';

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */

class Footer extends Component {
  render() {
    return (
      <div className="eea-footer">
        <div className="eea-footer-visual">
          <div className="eea-footer-container">
            <p className="eea-footer-header">The EEA also contributes to</p>

            <ThemeSites />

            <Container className="eea-subfooter">
              <Grid.Row>
                <Col desktop="8" tablet="5" mobile="2">
                  <div className="eea-footer-logos eea-subfooter-item">
                    <Image src={EEALogo} alt="EEA Logo"></Image>
                    <p className="eea-footer-logo-description">
                      An agency of the European Union
                    </p>
                    <div className="ionet-logo">
                      <Image src={EIONETLogo} alt="IONET Logo"></Image>
                      <p>
                        European Environment
                        <br />
                        Information and
                        <br />
                        Observation Network
                      </p>
                    </div>
                  </div>
                </Col>
                <Col desktop="4" tablet="3" mobile="2">
                  <div className="eea-subfooter-item">
                    <p className="eea-subfooter-item-header">Contact us</p>
                    <div className="eea-footer-contact-item">
                      <Icon name="comment outline" size="big"></Icon>
                      Ask your question
                    </div>
                    <div className="eea-footer-contact-item">
                      <Icon name="envelope outline" size="big"></Icon>
                      Sign up to our newsletter
                    </div>
                    <p className="eea-footer-contact-address">
                      Kongens Nytorv 6 1050 Copenhagen K (+45) 33 36 71 00
                    </p>

                    <div className="eea-footer-contact-social">
                      <a href="/#">
                        <Icon size="big" name="twitter"></Icon>
                      </a>
                      <a href="/#">
                        <Icon size="big" name="facebook"></Icon>
                      </a>
                      <a href="/#">
                        <Icon size="big" name="linkedin"></Icon>
                      </a>
                      <a href="/#">
                        <Icon size="big" name="youtube"></Icon>
                      </a>
                      <a href="/#">
                        <Icon size="big" name="rss"></Icon>
                      </a>
                    </div>
                  </div>
                </Col>
              </Grid.Row>
              <Grid.Row>
                <div className="eea-footer-links">
                  <a href="/#">CMS Login</a>
                  <a href="/#">Sitemap</a>
                  <a href="/#">Privacy</a>
                  <a href="/#"> &copy; Copyright</a>
                </div>
              </Grid.Row>
            </Container>
          </div>
        </div>
      </div>
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
