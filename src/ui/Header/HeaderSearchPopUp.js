import React from 'react';
import isArray from 'lodash/isArray';
import isPlainObject from 'lodash/isPlainObject';
import { useSelector } from 'react-redux';
import { Container, Input, List, Image } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';
import { useClickOutside } from '@eeacms/volto-eea-design-system/helpers';
import { handleEnterKeyPress } from '@eeacms/volto-eea-design-system/helpers';

import searchSVG from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/search-line.svg';
import aiSearchIcon from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/ai-search.svg';
import { useAISummaryToggle } from './useAISummaryToggle';
import { getSearchInput, useHeaderSearchSuggestions } from './utils';

const SKELETON_ITEMS = [
  { id: 'suggestion-skeleton-180', width: 180 },
  { id: 'suggestion-skeleton-240', width: 240 },
  { id: 'suggestion-skeleton-160', width: 160 },
  { id: 'suggestion-skeleton-220', width: 220 },
  { id: 'suggestion-skeleton-190', width: 190 },
  { id: 'suggestion-skeleton-230', width: 230 },
];

const serializeAction = (action, location) => {
  if (action.type === 'info' && isArray(action.content)) {
    const matchedContent =
      action.content.filter((c) => {
        const path = c.matchpath ? c.matchpath : c.path;
        return path && location.pathname.match(path);
      })[0] || action.content[0];
    return {
      type: 'info',
      content: (isPlainObject(matchedContent) && matchedContent.text) || null,
    };
  }
  return action;
};

function ActionItem({ action }) {
  if (action.type === 'info') {
    return <div>{action.content}</div>;
  }
  if (action.type === 'button-link') {
    return (
      <a
        href={action.url}
        className="ui button white inverted"
        title={action.title}
      >
        {action.title}
      </a>
    );
  }
  return null;
}

function HeaderSearchPopUp({
  history,
  location,
  onClose,
  searchInputRef,
  headerSearchBox,
  triggerRefs = [],
}) {
  const nodeRef = React.useRef();

  const searchInput = getSearchInput(headerSearchBox, location);
  // A search box with hideActions shows no info text or buttons below it
  const actions = searchInput.hideActions
    ? []
    : headerSearchBox
        .filter((v) => ['info', 'button-link'].includes(v.type))
        .map((v) => serializeAction(v, location)) || [];

  const {
    path = '',
    // URL parameter that carries the search text, e.g. 'SearchableText' for
    // a page with Volto's Search block
    queryParam = 'q',
    placeholder = 'Search',
    suggestionsTitle,
    maxToShow,
  } = searchInput;

  const { suggestions: visibleSuggestions, isLoading } =
    useHeaderSearchSuggestions(searchInput);

  const siteUseAISearchIcon = useSelector(
    (state) =>
      state.reduxAsyncConnect?.headerSettings?.useAISearchIcon || false,
  );
  // A search box can turn the site-wide icon off, e.g. a subsite search
  const useAISearchIcon =
    siteUseAISearchIcon && (searchInput.useAISearchIcon ?? true);

  const [aiSummaryEnabled] = useAISummaryToggle();

  // The AI sparkle only shows when the AI search icon is configured and
  // the user has not opted out of AI summaries.
  const searchIcon =
    useAISearchIcon && aiSummaryEnabled ? aiSearchIcon : searchSVG;

  useClickOutside({ targetRefs: [nodeRef, ...triggerRefs], callback: onClose });

  const onSubmit = (event) => {
    const text = searchInputRef?.current?.inputRef?.current?.value;
    history.push(`${path}?${queryParam}=${text}`);

    if (window?.searchContext?.resetSearch) {
      window.searchContext.resetSearch({ searchTerm: text });
    }

    onClose();
    event.preventDefault();
  };

  const onClickHandler = (suggestion) => {
    if (window?.searchContext?.resetSearch) {
      window.searchContext.resetSearch({ searchTerm: suggestion });
    }

    onClose();
  };

  return (
    <div id="search-box" ref={nodeRef}>
      <div className="wrapper">
        <Container>
          <form method="get" onSubmit={onSubmit}>
            <Input
              ref={searchInputRef}
              className="icon search"
              action={{
                className: 'icon',
                'aria-label': 'Submit search',
                onClick: onSubmit,
                onKeyDown: (event) => {
                  handleEnterKeyPress(event, onSubmit);
                },
                children: (
                  <Image
                    src={searchIcon}
                    alt="Global search"
                    height={45}
                    width={45}
                    className="header-search-icon"
                  />
                ),
              }}
              placeholder={placeholder}
              fluid
            />
          </form>
          {(visibleSuggestions?.length > 0 || isLoading) && (
            <div className="search-suggestions">
              {suggestionsTitle && <h4>{suggestionsTitle}</h4>}

              <List>
                {isLoading
                  ? SKELETON_ITEMS.slice(0, maxToShow || 6).map((skeleton) => (
                      <List.Item
                        key={skeleton.id}
                        className="suggestion-skeleton"
                      >
                        <span
                          className="suggestion-skeleton-line"
                          style={{ width: `${skeleton.width}px` }}
                        />
                      </List.Item>
                    ))
                  : visibleSuggestions.map((item) => (
                      <List.Item key={item}>
                        <Link
                          to={`${path}?${queryParam}=${item}`}
                          onClick={() => onClickHandler(item)}
                        >
                          {item}
                        </Link>
                      </List.Item>
                    ))}
              </List>
            </div>
          )}
        </Container>
        {actions?.length > 0 && (
          <div className="advanced-search">
            <Container>
              {actions.map((action, i) => (
                <ActionItem key={i} action={action} />
              ))}
            </Container>
          </div>
        )}
      </div>
    </div>
  );
}

export default withRouter(HeaderSearchPopUp);
