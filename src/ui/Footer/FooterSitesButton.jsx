import PropTypes from 'prop-types';
import { UniversalLink } from '@plone/volto/components';

const SitesButton = (props) => {
  if (props.children) {
    return <div>{props.children}</div>;
  }

  //fallback to props
  return (
    <div className="theme-sites">
      <UniversalLink
        href={props.hrefButton}
        className="theme-sites-button"
        openLinkInNewTab={false}
      >
        {props.buttonName}
      </UniversalLink>
    </div>
  );
};

SitesButton.propTypes = {
  hrefButton: PropTypes.string,
};

export default SitesButton;
