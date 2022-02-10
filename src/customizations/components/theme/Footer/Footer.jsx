/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React, { Component } from 'react';
import { Icon, Image, Grid, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
//import ThemeSites from './ThemeSites.js';
//import Actions from './Actions.js';

//import AbstractImg from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/Extras/abstract-visual.svg';
//import EULogo from '../../../../../theme/themes/eea/assets/images/Footer/EULogo.png';
import EIONETLogo from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/EIONETLogo.png';
import EEALogo from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/EEA-Logo-white.svg';

import Logo1 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/Extras/Group.svg';
import Logo2 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/Extras/Group-3.svg';
import Logo3 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/Extras/Group-154.svg';
import Logo4 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/Extras/Group-95.svg';
import Logo5 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/Extras/Group-2.svg';
import Logo6 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/Extras/Group-98.svg';
import Logo7 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/Extras/Group-5.svg';
import Logo8 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/Extras/Group-96.svg';
import Logo9 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/Extras/Group-4.svg';
import Logo10 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/Extras/Group-1.svg';

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */

class Footer extends Component {
  render() {
    const actions = [
      { link: '/#', title: 'CMS Login', copy: false },
      { link: '/#', title: 'Sitemap', copy: false },
      { link: '/#', title: 'Privacy', copy: false },
      { link: '/#', title: 'Copyright', copy: true },
    ];

    const sites = [
      { link: '/#', src: Logo1, alt: 'Biodiversity' },
      { link: '/#', src: Logo2, alt: 'Climate and energy in the EU' },
      { link: '/#', src: Logo3, alt: 'Copernicus in situ' },
      {
        link: '/#',
        src: Logo4,
        alt: 'Information platform for chemical monitoring',
      },
      { link: '/#', src: Logo5, alt: 'WISE freshwater' },
      { link: '/#', src: Logo6, alt: 'Forest information system for europe' },
      { link: '/#', src: Logo7, alt: 'Climate adapt' },
      { link: '/#', src: Logo8, alt: 'Copernicus land monitoring service' },
      { link: '/#', src: Logo9, alt: 'European industrial emissions portal' },
      { link: '/#', src: Logo10, alt: 'WISE marine' },
    ];

    return (
      <footer>
        <div className="visual">
          <Container>
            <div className="theme-sites">
              <p className="header">The EEA also contributes to</p>
              <Footer.Sites sites={sites}></Footer.Sites>
            </div>
            <div className="subfooter">
              <Grid>
                <Grid.Column mobile={6} tablet={7} computer={8}>
                  <div className="item">
                    <div className="site logo">
                      <Image src={EEALogo} alt="EEA Logo"></Image>
                      <p className="description">
                        An agency of the European Union
                      </p>
                    </div>

                    <div className="eionet logo">
                      <Image src={EIONETLogo} alt="EIONET Logo"></Image>
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
                <Grid.Column mobile={6} tablet={5} computer={4}>
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
                <Footer.Actions actions={actions} />
              </Grid.Row>
            </div>
          </Container>
        </div>
      </footer>
    );
  }
}

Footer.Actions = class Actions extends Component {
  render() {
    return (
      <div className="menu">
        {this.props.actions &&
          this.props.actions.map((action) => (
            <a href={action.link}>
              {action.copy && <>&copy;</>}
              {action.title}
            </a>
          ))}
      </div>
    );
  }
};

Footer.Sites = class Sites extends Component {
  render() {
    return (
      <div className="logos">
        <Grid columns={5}>
          {this.props.sites &&
            this.props.sites.map((site) => (
              <Grid.Column className="logo">
                <Link to={site.link}>
                  <Image src={site.src} alt={site.alt}></Image>
                </Link>
              </Grid.Column>
            ))}
        </Grid>
      </div>
    );
  }
};

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
