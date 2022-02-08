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

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="visual">
          <Container>
            <div className="theme-sites">
              <p className="header">The EEA also contributes to</p>
              <ThemeSites />
            </div>
            <div className="subfooter">
              <Grid>
                <Grid.Column mobile={6} tablet={8} computer={8}>
                  <div className="item">
                    <div className="site logo">
                      <Image src={EEALogo} alt="EEA Logo"></Image>
                      <p className="description">
                        An agency of the European Union
                      </p>
                    </div>

                    <div className="ionet logo">
                      <Image src={EIONETLogo} alt="IONET Logo"></Image>
                      <p className="description">
                        European Environment
                        <br />
                        Information and
                        <br />
                        Observation Network
                      </p>
                    </div>
                  </div>
                </Grid.Column>
                <Grid.Column mobile={6} tablet={4} computer={4}>
                  <div className="item">
                    <p className="header">Contact us</p>
                    <div className="contact">
                      <Icon name="comment outline" size="big"></Icon>
                      Ask your question
                    </div>
                    <div className="contact">
                      <Icon name="envelope outline" size="big"></Icon>
                      Sign up to our newsletter
                    </div>
                    <p className="address">
                      Kongens Nytorv 6 1050 Copenhagen K (+45) 33 36 71 00
                    </p>

                    <div className="social">
                      <a href="/#" aria-label="twitter link">
                        <Icon name="twitter"></Icon>
                      </a>
                      <a href="/#" aria-label="facebook link">
                        <Icon name="facebook"></Icon>
                      </a>
                      <a href="/#" aria-label="linkedin link">
                        <Icon name="linkedin"></Icon>
                      </a>
                      <a href="/#" aria-label="youtube link">
                        <Icon name="youtube"></Icon>
                      </a>
                      <a href="/#" aria-label="rss link">
                        <Icon name="rss"></Icon>
                      </a>
                    </div>
                  </div>
                </Grid.Column>
              </Grid>
              <Grid.Row>
                <div className="menu">
                  <a href="/#">CMS Login</a>
                  <a href="/#">Sitemap</a>
                  <a href="/#">Privacy</a>
                  <a href="/#"> &copy; Copyright</a>
                </div>
              </Grid.Row>
            </div>
          </Container>
        </div>
      </footer>
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
