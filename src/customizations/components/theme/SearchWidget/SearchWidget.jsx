/**
 * Search widget component.
 * @module components/theme/SearchWidget/SearchWidget
 */

import { getProxiedExternalContent } from '@eeacms/volto-corsproxy/actions';
import { createContent } from '@plone/volto/actions';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { defineMessages, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import {
  Accordion,
  Button,
  Form,
  Icon,
  Input,
  List,
  Popup,
} from 'semantic-ui-react';

const messages = defineMessages({
  search: {
    id: 'Search',
    defaultMessage: 'Search',
  },
  searchSite: {
    id: 'Search',
    defaultMessage: 'Search',
  },
});

/**
 * SearchWidget component class.
 * @class SearchWidget
 * @extends Component
 */
class SearchWidget extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    pathname: PropTypes.string.isRequired,
  };

  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs WysiwygEditor
   */
  constructor(props) {
    super(props);
    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeSection = this.onChangeSection.bind(this);
    this.onGoToSearchPage = this.onGoToSearchPage.bind(this);
    this.state = {
      text: '',
      section: false,
      suggestedWords: [],
      activeIndex: -1,
    };
  }

  /**
   * On change text
   * @method onChangeText
   * @param {object} event Event object.
   * @param {string} value Text value.
   * @returns {undefined}
   */
  onChangeText(event, { value }) {
    this.setState({
      text: value,
    });
    this.searchSuggestions(value);
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };
  /**
   * On change section
   * @method onChangeSection
   * @param {object} event Event object.
   * @param {bool} checked Section checked.
   * @returns {undefined}
   */
  onChangeSection(event, { checked }) {
    this.setState({
      section: checked,
    });
  }

  /**
   * On go to the search page
   * @method onGoToSearchPage
   */
  onGoToSearchPage() {
    window.location = `http://search.apps.eea.europa.eu?q=${this.state.text}`;
  }

  /**
   * will search for suggestions based on partial match
   * @param {string} data
   */
  searchSuggestions = async (data) => {
    const searchTernUrl = `https://www.eea.europa.eu/api/eea-custom-search.tags?q=${data}`;
    const result = await this.props.getProxiedExternalContent(searchTernUrl);
    const resultFinal = Array.isArray(result) ? result : JSON.parse(result);

const SearchWidget = (props) => {
  return <div>Test Block</div>;
};

export default SearchWidget;
