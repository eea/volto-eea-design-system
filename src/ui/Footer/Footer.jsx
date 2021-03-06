/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import { Container } from 'semantic-ui-react';

import FooterSites from '@eeacms/volto-eea-design-system/ui/Footer/FooterSites';
import FooterActions from '@eeacms/volto-eea-design-system/ui/Footer/FooterActions';
import FooterHeader from '@eeacms/volto-eea-design-system/ui/Footer/FooterHeader';
import SubFooter from '@eeacms/volto-eea-design-system/ui/Footer/SubFooter';
import Social from '@eeacms/volto-eea-design-system/ui/Footer/Social';
import Contact from '@eeacms/volto-eea-design-system/ui/Footer/Contact';

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */

const Footer = (props) => {
  const { children } = props;
  return (
    <footer>
      <div className="wrapper">
        <Container>{children}</Container>
      </div>
    </footer>
  );
};

Footer.Actions = FooterActions;
Footer.Contact = Contact;
Footer.Header = FooterHeader;
Footer.Sites = FooterSites;
Footer.Social = Social;
Footer.SubFooter = SubFooter;

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
