import React, { useEffect } from 'react';
import { Container, Input, List, Image } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';
import { useClickOutside } from '@eeacms/volto-eea-design-system/helpers';
import { handleEnterKeyPress } from '@eeacms/volto-eea-design-system/helpers';

import searchIcon from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/ai-search.svg';

const getRandomItems = (arr, max) => {
  return (
    arr?.slice(0, max).map(function () {
      return this.splice(Math.floor(Math.random() * this.length), 1)[0];
    }, arr.slice()) || []
  );
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
  onClose,
  searchInputRef,
  headerSearchBox,
  triggerRefs = [],
}) {
  const nodeRef = React.useRef();

  const searchInput =
    headerSearchBox.filter((v) => v.type === 'search-input')[0] || {};
  const actions =
    headerSearchBox.filter((v) => ['info', 'button-link'].includes(v.type)) ||
    [];

  const {
    path = '',
    placeholder = 'Search',
    suggestionsTitle,
    maxToShow,
    suggestions,
  } = searchInput;

  const [visibleSuggestions, setVisibileSuggestions] = React.useState(
    getRandomItems(suggestions, maxToShow),
  );

  useEffect(() => {
    setVisibileSuggestions(getRandomItems(suggestions, maxToShow));
  }, [maxToShow, suggestions]);

  useClickOutside({ targetRefs: [nodeRef, ...triggerRefs], callback: onClose });

  const onSubmit = (event) => {
    const text = searchInputRef?.current?.inputRef?.current?.value;
    history.push(`${path}?q=${text}`);

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
          {suggestions?.length > 0 && (
            <div className="search-suggestions">
              {suggestionsTitle && <h4>{suggestionsTitle}</h4>}

              <List>
                {visibleSuggestions.map((item, i) => {
                  return (
                    <List.Item key={i}>
                      <Link
                        to={`${path}?q=${item}`}
                        onClick={() => onClickHandler(item)}
                      >
                        {item}
                      </Link>
                    </List.Item>
                  );
                })}
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
