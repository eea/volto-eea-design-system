/**
 * Document view component.
 * @module components/theme/View/NarrowTextView
 */

import React from 'react';
import PropTypes from 'prop-types';

import { DefaultView } from '@plone/volto/components/';

import { BodyClass } from '@plone/volto/helpers';

import { hasBlocksData } from '@plone/volto/helpers';

/**
 * Component to display the default view.
 * @function NarrowView
 * @param {Object} content Content object.
 * @returns {string} Markup of the component.
 */
const NarrowView = ({ content }) => {
  return hasBlocksData(content) ? (
    <>
      <BodyClass className="narrow_view" />
      <DefaultView content={content} className={'ui container'} />
    </>
  ) : null;
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
NarrowView.propTypes = {
  /**
   * Content of the object
   */
  content: PropTypes.shape({
    /**
     * Title of the object
     */
    title: PropTypes.string,
    /**
     * Description of the object
     */
    description: PropTypes.string,
    /**
     * Text of the object
     */
    text: PropTypes.shape({
      /**
       * Data of the text of the object
       */
      data: PropTypes.string,
    }),
  }).isRequired,
};

export default NarrowView;