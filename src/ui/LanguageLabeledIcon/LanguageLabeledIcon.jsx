import React, { useState, useContext, createContext } from 'react';
import { Popup } from 'semantic-ui-react';

const LanguageContext = createContext();

function LanguageLabeledIcon({ children, ...rest }) {
  const [language, setLanguage] = useState('EN');
  return (
    <LanguageContext.Provider
      value={{
        language: language,
        setLanguage: setLanguage,
      }}
    >
      <div className="eea language labeled icon">
        <Popup
          className="language-popup"
          trigger={rest.trigger}
          content={children}
          basic
          on="click"
          position="bottom center"
        />
      </div>
    </LanguageContext.Provider>
  );
}

const Label = ({ children, ...rest }) => {
  return <div className="label">{children}</div>;
};

LanguageLabeledIcon.Label = Label;

const Icon = ({ children, ...rest }) => {
  const context = useContext(LanguageContext);
  return (
    <div className="icon wrapper">
      {rest.icon}
      <span>{context.language}</span>
    </div>
  );
};

LanguageLabeledIcon.Icon = Icon;

const Dropdown = ({ children, ...rest }) => {
  const context = useContext(LanguageContext);

  var length = rest.items.length;
  var first = rest.items.slice(0, length / 2);
  var second = rest.items.slice(length / 2);

  return (
    <div className="dropdown">
      <div className={`link wrapper`}>
        <ul>
          {first.map((item, index) => (
            <li key={index}>
              <div
                onClick={() => context.setLanguage(item.code.toUpperCase())}
                onKeyDown={() => context.setHidden(!context.hidden)}
                role="button"
                tabIndex={0}
              >
                {item.name} <span>{item.code.toUpperCase()}</span>
              </div>
            </li>
          ))}
        </ul>
        <ul>
          {second.map((item, index) => (
            <li key={index}>
              <div
                onClick={() => context.setLanguage(item.code.toUpperCase())}
                onKeyDown={() => context.setHidden(!context.hidden)}
                role="button"
                tabIndex={0}
              >
                {item.name} <span>{item.code.toUpperCase()}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

LanguageLabeledIcon.Dropdown = Dropdown;

export default LanguageLabeledIcon;
