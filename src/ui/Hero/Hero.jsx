import React from 'react';
import PropTypes from 'prop-types';

Hero.propTypes = {
  image: PropTypes.bool,
  fullWidth: PropTypes.bool,
  alignContent: PropTypes.string,
  textAlign: PropTypes.string,
  backgroundVariant: PropTypes.string,
  quoted: PropTypes.bool,
  textVariant: PropTypes.string,
};

function Hero({
  image_url,
  image,
  fullWidth,
  alignContent,
  textAlign,
  backgroundVariant,
  children,
}) {
  return (
    // full width prop
    <div
      className={`${
        fullWidth ? 'eea hero-block full-width' : 'eea hero-block'
      } color-bg-${backgroundVariant}`}
    >
      <div
        className="hero-block-image"
        style={image ? { backgroundImage: `url(${image_url})` } : {}}
      >
        <div
          className={`hero-block-inner-wrapper d-flex ui container flex-items-${alignContent}`}
        >
          {/* align text prop */}
          <div className={`hero-block-body text-${textAlign}`}>{children}</div>
        </div>
      </div>
    </div>
  );
}

Hero.Text = ({ quoted, textVariant, children }) => (
  <div
    className={`hero-block-text color-fg-${textVariant} ${
      quoted ? 'quoted' : ''
    }`}
  >
    {children}
  </div>
);
Hero.Meta = ({ children }) => <div className="hero-block-meta">{children}</div>;

export default Hero;
