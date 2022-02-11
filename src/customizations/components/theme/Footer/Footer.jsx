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

    const social = [
      { name: 'twitter', link: '/#' },
      { name: 'facebook', link: '/#' },
      { name: 'linkedin', link: '/#' },
      { name: 'youtube', link: '/#' },
      { name: 'rss', link: '/#' },
    ];

    const contacts = {
      header: 'Contact Us',
      contacts: [
        { icon: 'comment outline', text: 'Ask your question' },
        { icon: 'envelope outline', text: 'Sign up to our newsletter' },
      ],
      address: 'Kongens Nytorv 6 1050 Copenhagen K (+45) 33 36 71 00',
    };

    return (
      <footer>
        <div className="visual">
          <Container>
            <div className="theme-sites">
              <Footer.Header>The EEA also contributes to</Footer.Header>
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
                    <Footer.Contact contacts={contacts}></Footer.Contact>

                    <Footer.Social social={social}></Footer.Social>
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

const Actions = (props) => (
  <div className="menu">
    {props.actions &&
      props.actions.map((action) => (
        <a href={action.link}>
          {action.copy && <>&copy;</>}
          {action.title}
        </a>
      ))}
  </div>
);

Footer.Actions = Actions;

const Sites = (props) => (
  <div className="logos">
    <Grid columns={5}>
      {props.sites &&
        props.sites.map((site) => (
          <Grid.Column className="logo">
            <Link to={site.link}>
              <Image src={site.src} alt={site.alt}></Image>
            </Link>
          </Grid.Column>
        ))}
    </Grid>
  </div>
);

Footer.Sites = Sites;

const Header = (props) => <p className="header">{props.children}</p>;

Footer.Header = Header;

const Social = (props) => (
  <div className="social">
    {props.social.map((item) => (
      <a href={item.link} aria-label={`${item.name} link`}>
        <Icon name={item.name}></Icon>
      </a>
    ))}
  </div>
);

Footer.Social = Social;

const Contact = (props) => (
  <>
    <p className="header">{props.contacts.header}</p>
    {props.contacts.contacts.length > 0 &&
      props.contacts.contacts.map((contact) => (
        <div className="contact">
          <Icon name={contact.icon} size="big"></Icon>
          {contact.text}
        </div>
      ))}
    {props.contacts.address && (
      <p className="address">{props.contacts.address}</p>
    )}
  </>
);

Footer.Contact = Contact;

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
