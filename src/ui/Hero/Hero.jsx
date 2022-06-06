import React from 'react';
import PropTypes from 'prop-types';

Hero.propTypes = {
  image: PropTypes.bool,
  fullWidth: PropTypes.bool,
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
  alignContent,
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
          <div className="hero-block-body">{children}</div>
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
