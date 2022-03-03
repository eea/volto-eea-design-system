import React from 'react';

function Content({ children, ...rest }) {
  return (
    <div {...rest} className={`eea content ${rest.className || ''}`}>
      {children}
    </div>
  );
}

Content.Head = ({ children, ...rest }) => (
  <div {...rest} className={`row head ${rest.className || ''}`}>
    {children}
  </div>
);

Content.Content = ({ children, ...rest }) => (
  <div {...rest} className={`row content ${rest.className || ''}`}>
    {children}
  </div>
);

Content.Actions = ({ children, ...rest }) => (
  <div {...rest} className={`row actions ${rest.className || ''}`}>
    {children}
  </div>
);

Content.Date = ({ children, ...rest }) => (
  <div {...rest} className={`date ${rest.className || ''}`}>
    {children}
  </div>
);

Content.Languages = function ({ children, ...rest }) {
  onLanguageSelection = (e, data) => {
    this.setState({
      language: data.text.props.children[1].props.children,
    });
  };
  return (
    <Dropdown
      id="language-switcher"
      className="item"
      text={`${this.state.language.toUpperCase()}`}
      icon={<Image src={globeIcon} alt="language dropdown globe icon"></Image>}
      aria-label="dropdown"
    >
      <Dropdown.Menu>
        <div className="wrapper">
          {rest.languages.map((item, index) => (
            <Dropdown.Item
              key={index}
              text={
                <span>
                  {item.text}
                  <span className="country-code">{item.key.toUpperCase()}</span>
                </span>
              }
              onClick={this.onLanguageSelection}
            ></Dropdown.Item>
          ))}
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Content;
