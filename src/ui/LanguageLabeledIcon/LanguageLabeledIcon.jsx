import React, { useState, useContext, createContext } from 'react';

const LanguageContext = createContext();

function LanguageLabeledIcon({ children, ...rest }) {
  const [hidden, seHidden] = useState(true);
  const [language, setLanguage] = useState('EN');
  return (
    <LanguageContext.Provider
      value={{
        hidden: hidden,
        setHidden: seHidden,
        language: language,
        setLanguage: setLanguage,
      }}
    >
      <div className="eea language labeled icon">{children}</div>
    </LanguageContext.Provider>
  );
}

const Label = ({ children, ...rest }) => {
  const context = useContext(LanguageContext);
  return (
    <div
      className="label"
      onClick={() => context.setHidden(!context.hidden)}
      onKeyDown={() => context.setHidden(!context.hidden)}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );
};

LanguageLabeledIcon.Label = Label;

const Icon = ({ children, ...rest }) => {
  const context = useContext(LanguageContext);
  return (
    <div
      className="icon wrapper"
      onClick={() => context.setHidden(!context.hidden)}
      onKeyDown={() => context.setHidden(!context.hidden)}
      role="button"
      tabIndex={0}
    >
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
      <div className={`link wrapper ${context.hidden ? 'hidden' : ''}`}>
        <ul>
          {first.map((item, index) => (
            <li key={index}>
              <div
                onClick={() => context.setLanguage(item.key.toUpperCase())}
                onKeyDown={() => context.setHidden(!context.hidden)}
                role="button"
                tabIndex={0}
              >
                {item.text} <span>{item.key}</span>
              </div>
            </li>
          ))}
        </ul>
        <ul>
          {second.map((item, index) => (
            <li key={index}>
              <div
                onClick={() => context.setLanguage(item.key.toUpperCase())}
                onKeyDown={() => context.setHidden(!context.hidden)}
                role="button"
                tabIndex={0}
              >
                {item.text} <span>{item.key}</span>
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
