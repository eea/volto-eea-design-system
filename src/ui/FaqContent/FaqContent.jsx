import React, { useState } from 'react';
import { Dropdown, Image, Grid } from 'semantic-ui-react';
import globeIcon from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/global-line.svg';

function FaqContent({ children, ...rest }) {
  return (
    <div {...rest} className={`eea faqContent ${rest.className || ''}`}>
      {children}
    </div>
  );
}

FaqContent.Info = ({ children, ...rest }) => (
  <div {...rest} className={`row info ${rest.className || ''}`}>
    {children}
  </div>
);

FaqContent.Content = ({ children, ...rest }) => (
  <div {...rest} className={`row content ${rest.className || ''}`}>
    {children}
  </div>
);

FaqContent.Actions = ({ children, ...rest }) => (
  <div {...rest} className={`row actions ${rest.className || ''}`}>
    {children}
  </div>
);

FaqContent.Languages = function Languages({ children, ...rest }) {
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
        <div className="language wrapper">
          <Grid columns={2}>
            {rest.languages.map((item, index) => (
              <Grid.Column key={index}>
                <Dropdown.Item
                  language={item.key}
                  text={
                    <span>
                      {item.text}
                      <span className="country-code">
                        {item.key.toUpperCase()}
                      </span>
                    </span>
                  }
                  onClick={onLanguageSelection}
                ></Dropdown.Item>
              </Grid.Column>
            ))}
          </Grid>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default FaqContent;
