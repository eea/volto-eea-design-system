/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React, { Component } from 'react';
import { Icon, Image, Grid, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import EIONETLogo from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/EIONETLogo.png';
import EEALogo from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/EEA-Logo-white.svg';

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
              {this.props.header && (
                <Footer.Header>{this.props.header}</Footer.Header>
              )}
              {this.props.sites.length > 0 && (
                <Footer.Sites sites={this.props.sites}></Footer.Sites>
              )}
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
                    {this.props.contacts && (
                      <Footer.Contact
                        contacts={this.props.contacts}
                      ></Footer.Contact>
                    )}

                    {this.props.social.length > 0 && (
                      <Footer.Social social={this.props.social}></Footer.Social>
                    )}
                  </div>
                </Grid.Column>
              </Grid>
              <Grid.Row>
                {this.props.actions.length > 0 && (
                  <Footer.Actions actions={this.props.actions} />
                )}
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
      props.actions.map((action, index) => (
        <a href={action.link} key={index}>
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
        props.sites.map((site, index) => (
          <Grid.Column className="logo" key={index}>
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
    {props.social.map((item, index) => (
      <a href={item.link} aria-label={`${item.name} link`} key={index}>
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
      props.contacts.contacts.map((contact, index) => (
        <div className="contact" key={index}>
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
