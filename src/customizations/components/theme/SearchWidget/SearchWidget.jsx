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

    if (Array.isArray(resultFinal)) {
      this.setState({ suggestedWords: resultFinal });
    } else {
      this.setState({ suggestedWords: [] });
    }
  };

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    return (
      <>
        <Popup
          position="bottom center"
          style={{ width: '446px', maxWidth: '500px' }}
          className="large screen only custom-search-pop"
          content={
            <div>
              <Input
                type="text"
                onChange={this.onChangeText}
                placeholder="Search..."
                action
                fluid
                size="mini"
                value={this.state.text}
                autoComplete="off"
                name="q"
              >
                <input />
                <Button
                  className="search-custom-eea"
                  onClick={this.onGoToSearchPage}
                  icon="search"
                  size="mini"
                ></Button>
              </Input>

              <div className="eea-search-links clearfix">
                <a
                  href="http://search.apps.eea.europa.eu"
                  className="pull-left"
                >
                  <span>Advanced search</span>
                </a>
                <a
                  className="pull-right"
                  href="https://www.eea.europa.eu/help/glossary"
                >
                  A-Z Glossary
                </a>
              </div>
              <List divided className="suggested-this.state.suggestedWords">
                {this.state.suggestedWords.map((word, index) => (
                  <List.Item key={index}>
                    <List.Content>
                      <List.Description>
                        <a
                          href={`http://search.apps.eea.europa.eu?q=${word}`}
                          className="suggested-item"
                        >
                          <strong>{this.state.text}</strong>
                          {word.slice(this.state.text.length, word.length)}
                        </a>
                      </List.Description>
                    </List.Content>
                  </List.Item>
                ))}
              </List>
            </div>
          }
          on="click"
          popper={{ id: 'popper-container', style: { zIndex: 2000 } }}
          trigger={
            <div className="large screen only">
              <Form>
                <Form.Field className="searchbox ">
                  <Input
                    aria-label={this.props.intl.formatMessage(messages.search)}
                    transparent
                    disabled
                    autoComplete="off"
                    placeholder={this.props.intl.formatMessage(
                      messages.searchSite,
                    )}
                    title={this.props.intl.formatMessage(messages.search)}
                  />
                  <button
                    aria-label={this.props.intl.formatMessage(messages.search)}
                  >
                    <Icon name="search" size="large" />
                  </button>
                </Form.Field>
              </Form>
            </div>
          }
        />

        <div className="mobile tablet computer only">
          <Form
            action="https://www.eea.europa.eu/eea-custom-search"
            method="get"
          >
            <Form.Field className="searchbox">
              <Accordion fluid>
                <Accordion.Title
                  active={this.state.activeIndex === 0}
                  index={0}
                  onClick={this.handleClick}
                >
                  <Input
                    aria-label={this.props.intl.formatMessage(messages.search)}
                    name="q"
                    transparent
                    autoComplete="off"
                    placeholder={this.props.intl.formatMessage(
                      messages.searchSite,
                    )}
                    title={this.props.intl.formatMessage(messages.search)}
                    onChange={this.onChangeText}
                    value={this.state.text}
                  />
                </Accordion.Title>
                <Accordion.Content active={this.state.activeIndex === 0}>
                  <List divided className="suggested-this.state.suggestedWords">
                    {this.state.suggestedWords.map((word, index) => (
                      <List.Item key={index}>
                        <List.Content>
                          <List.Description>
                            <a
                              href={`http://search.apps.eea.europa.eu?q=${word}`}
                              className="suggested-item"
                            >
                              <strong>{this.state.text}</strong>
                              {word.slice(this.state.text.length, word.length)}
                            </a>
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    ))}
                  </List>
                </Accordion.Content>
              </Accordion>
              <button
                aria-label={this.props.intl.formatMessage(messages.search)}
                onClick={this.onGoToSearchPage}
              >
                <Icon name="search" size="large" />
              </button>
            </Form.Field>
          </Form>

          <div
            className="eea-search-links mobile tablet computer only clearfix"
            style={{ color: 'white' }}
          >
            <a href="http://search.apps.eea.europa.eu" className="pull-left">
              <span>Advanced search</span>
            </a>
            <a
              className="pull-right"
              href="https://www.eea.europa.eu/help/glossary"
            >
              A-Z Glossary
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default compose(
  withRouter,
  injectIntl,
  connect(
    (state, ownProps) => ({
      request: state.content.subrequests[ownProps.block] || {},
      content: state.content.subrequests[ownProps.block]?.data,
      subrequests: state.content.subrequests,
      thestate: state,
    }),
    { createContent, getProxiedExternalContent },
  ),
)(SearchWidget);
