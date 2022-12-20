import React from 'react';
import PropTypes from 'prop-types';
import map_mock_data from './map_mock_data';
import Webmap from '@eeacms/volto-eea-map';

Map.propTypes = {
  // image: PropTypes.bool,
  // fullWidth: PropTypes.bool,
  // fullHeight: PropTypes.bool,
  // alignContent: PropTypes.string,
  // textAlign: PropTypes.string,
  // metaAlign: PropTypes.string,
  // backgroundVariant: PropTypes.string,
  // quoted: PropTypes.bool,
  // textVariant: PropTypes.string,
};

function Map(
  {
    // image_url,
    // image,
    // fullWidth,
    // fullHeight,
    // alignContent,
    // backgroundVariant,
    // children,
    // has_copyright,
    // copyrightPosition,
    // copyrightIcon,
    // copyrightText,
  },
) {
  return (
    // full width prop
    <div>
      import map
      <Webmap data={map_mock_data} />
    </div>
  );
}

export default Map;
