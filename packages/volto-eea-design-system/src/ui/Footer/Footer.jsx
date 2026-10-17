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
import FooterSitesButton from '@eeacms/volto-eea-design-system/ui/Footer/FooterSitesButton';
import Contact from '@eeacms/volto-eea-design-system/ui/Footer/Contact';
import { useFirstVisited } from '@eeacms/volto-eea-design-system/helpers';
import Description from '@eeacms/volto-eea-design-system/ui/Footer/Description';

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} props object
 * @returns {string} Markup of the component
 */

const Footer = (props) => {
  const { children } = props;

  const bgImgRef = React.useRef();
  const onScreen = useFirstVisited(bgImgRef);
  return (
    <footer id={'footer'} aria-label={'Footer'}>
      <div
        ref={bgImgRef}
        className={onScreen ? 'footer-wrapper' : 'footer-wrapper-nobg'}
      >
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
Footer.SitesButton = FooterSitesButton;
Footer.SubFooter = SubFooter;
Footer.Description = Description;

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
