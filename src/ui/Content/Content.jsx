import React, { useState } from 'react';
import { Dropdown, Image } from 'semantic-ui-react';
import globeIcon from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/global-line.svg';


function Content({ children, ...rest }) {
  return (
    <div {...rest} className={`eea content ${rest.className || ''}`}>
      {children}
    </div>
  );
}

Content.Info = ({ children, ...rest }) => (
  <div {...rest} className={`row info ${rest.className || ''}`}>
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

Content.Languages = ({ children, ...rest }) => {
  const [language, setLanguage] = useState(rest.default);
  const onLanguageSelection = (e, data) => {
    const { language } = data;
    setLanguage(language);
  };
  return (
    <Dropdown
      className="languages"
      text={`${language.toUpperCase()}`}
      icon={<Image src={globeIcon} alt="language dropdown globe icon"></Image>}
      aria-label="dropdown"
    >
      <Dropdown.Menu>
        <div className="wrapper">
          {rest.languages.map((item, index) => (
            <Dropdown.Item
              key={index}
              language={item.key}
              text={
                <span>
                  {item.text}
                  <span className="country-code">{item.key.toUpperCase()}</span>
                </span>
              }
              onClick={onLanguageSelection}
            ></Dropdown.Item>
          ))}
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Content;
