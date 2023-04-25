import React, { useEffect } from 'react';
import { Container, Input, List } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';
import { useClickOutside } from '@eeacms/volto-eea-design-system/helpers';

const getRandomItems = (arr, max) => {
  return (
    arr?.slice(0, max).map(function () {
      return this.splice(Math.floor(Math.random() * this.length), 1)[0];
    }, arr.slice()) || []
  );
};

function HeaderSearchPopUp({
  history,
  location,
  onClose,
  searchInputRef,
  headerSearchBox,
  triggerRefs = [],
}) {
  const nodeRef = React.useRef();
  const headerSearchViews = headerSearchBox || [];
  const defaultView = headerSearchViews.filter((v) => v.isDefault);
  const localView = headerSearchViews.filter((v) =>
    location.pathname.includes(v.path),
  );
  const activeView = localView.length > 0 ? localView[0] : defaultView[0];

  const {
    path = '',
    buttonTitle,
    description,
    placeholder = 'Search',
    searchSuggestions,
  } = activeView || {};
  const { suggestionsTitle, suggestions, maxToShow } = searchSuggestions || {};

  const [text, setText] = React.useState('');
  const [visibleSuggestions, setVisibileSuggestions] = React.useState(
    getRandomItems(suggestions, maxToShow),
  );

  useEffect(() => {
    setVisibileSuggestions(getRandomItems(suggestions, maxToShow));
  }, [maxToShow, suggestions]);

  useClickOutside({ targetRefs: [nodeRef, ...triggerRefs], callback: onClose });

  const onChangeText = (event, { value }) => {
    setText(value);
    event.preventDefault();
  };

  const onSubmit = (event) => {
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
              className="search"
              onChange={onChangeText}
              icon={{
                className: 'ri-search-line',
                link: true,
                onClick: onSubmit,
              }}
              placeholder={placeholder}
              fluid
            />
          </form>
          {searchSuggestions && suggestions.length > 0 && (
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
        {buttonTitle && (
          <div className="advanced-search">
            <Container>
              <div>{description}</div>
              <a
                href={defaultView[0].path}
                className="ui button white inverted"
                title="Advanced search"
              >
                {buttonTitle}
              </a>
            </Container>
          </div>
        )}
      </div>
    </div>
  );
}

export default withRouter(HeaderSearchPopUp);
