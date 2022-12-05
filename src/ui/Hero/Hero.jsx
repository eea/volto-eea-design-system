import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'semantic-ui-react';
import Copyright from '../Copyright/Copyright';

Hero.propTypes = {
  image: PropTypes.bool,
  fullWidth: PropTypes.bool,
  fullHeight: PropTypes.bool,
  alignContent: PropTypes.string,
  textAlign: PropTypes.string,
  metaAlign: PropTypes.string,
  backgroundVariant: PropTypes.string,
  quoted: PropTypes.bool,
  textVariant: PropTypes.string,
};

function Hero({
  image_url,
  image,
  fullWidth,
  fullHeight,
  alignContent,
  backgroundVariant,
  children,

  has_copyright,
  copyrightVariant,
  copyrightPosition,
  copyrightIcon,
  copyrightText,
}) {
  return (
    // full width prop
    <div
      className={`${
        fullWidth ? 'eea hero-block full-width' : 'eea hero-block'
      } ${fullHeight ? 'full-height' : ''} color-bg-${backgroundVariant}`}
    >
      <div
        className="hero-block-image"
        style={image ? { backgroundImage: `url(${image_url})` } : {}}
      >
        <div
          className={`hero-block-inner-wrapper d-flex ui container flex-items-${alignContent}`}
        >
          <div className="hero-block-body">
            {children}

            {has_copyright && (
              <Copyright copyrightPosition={copyrightPosition}>
                <Copyright.Icon>
                  <Icon className={copyrightIcon} />
                </Copyright.Icon>
                <Copyright.Text>{copyrightText}</Copyright.Text>
              </Copyright>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Hero.Text = ({ quoted, textVariant, textAlign, children }) => (
  <div className={`hero-block-text color-fg-${textVariant} text-${textAlign}`}>
    <h2 className={`${quoted ? 'quoted' : ''}`}>{children}</h2>
  </div>
);
Hero.Meta = ({ metaAlign, children }) => (
  <div className={`hero-block-meta text-${metaAlign}`}>{children}</div>
);

export default Hero;
