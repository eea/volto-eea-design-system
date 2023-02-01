import React, { useEffect, useState } from 'react';
import { Button, Message, Grid, Select } from 'semantic-ui-react';
import { UniversalLink } from '@plone/volto/components';
import { toRGB, toHSL, toCSS } from './helpers';

import './styles.less';

const methods = [
  { key: 'I', value: 'I', text: 'Method I' },
  { key: 'II', value: 'II', text: 'Method II' },
];

const themes = {
  I: {
    '@primaryColor': '#004B7F',
    '@secondaryColor': '#007B6C',
    '@tertiaryColor': '#3D5265',
    '@lightPrimaryColor': '#0065A4',
    '@lightSecondaryColor': '#00928F',
    '@lightTertiaryColor': '#54728C',
    '@darkPrimaryColor': '#0A3D61',
    '@darkSecondaryColor': '#00665A',
    '@darkTertiaryColor': '#2E3E4C',
  },
  II: {
    '@primaryColor': '#004B7F',
    '@secondaryColor': '#007B6C',
    '@tertiaryColor': '#3D5265',
    '@lightPrimaryColor': '#0065A4',
    '@lightSecondaryColor': '#00928F',
    '@lightTertiaryColor': '#54728C',
    '@darkPrimaryColor': '#0A3D61',
    '@darkSecondaryColor': '#00665A',
    '@darkTertiaryColor': '#2E3E4C',
  },
};

const getMethodIStyle = (theme) => {
  const primaryHSL = toHSL(toRGB(theme['@primaryColor']), 1);
  const secondaryHSL = toHSL(toRGB(theme['@secondaryColor']), 1);
  const tertiaryHSL = toHSL(toRGB(theme['@tertiaryColor']), 1);

  return {
    ...(primaryHSL
      ? {
          '--primary-color-h': primaryHSL.h,
          '--primary-color-s': `${primaryHSL.s * 100}%`,
          '--primary-color-l': `${primaryHSL.l * 100}%`,
        }
      : {}),
    ...(secondaryHSL
      ? {
          '--secondary-color-h': secondaryHSL.h,
          '--secondary-color-s': `${secondaryHSL.s * 100}%`,
          '--secondary-color-l': `${secondaryHSL.l * 100}%`,
        }
      : {}),
    ...(tertiaryHSL
      ? {
          '--tertiary-color-h': tertiaryHSL.h,
          '--tertiary-color-s': `${tertiaryHSL.s * 100}%`,
          '--tertiary-color-l': `${tertiaryHSL.l * 100}%`,
        }
      : {}),
  };
};

const MethodView = ({ theme, setTheme, method }) => {
  if (!method) return null;
  return (
    <>
      {Object.keys(themes[method]).map((key, index) => (
        <React.Fragment key={key}>
          <code>
            {'  '}
            <button
              className="color-picker"
              style={{
                backgroundColor: toRGB(theme[key])
                  ? theme[key]
                  : themes[method][key],
              }}
            />{' '}
            {key}: "
            <span
              contentEditable={true}
              suppressContentEditableWarning={true}
              onInput={(e) => {
                setTheme({ ...theme, [key]: e.currentTarget?.textContent });
              }}
            >
              {themes[method][key]}
            </span>
            ";
          </code>
          {key === '@tertiaryColor' && '\n'}
          {key === '@lightTertiaryColor' && '\n'}
          {key !== '@darkTertiaryColor' && '\n'}
        </React.Fragment>
      ))}
    </>
  );
};

const ThemeGenerator = () => {
  const [method, setMethod] = useState('I');
  const [theme, setTheme] = useState({});

  useEffect(() => {
    const style = getMethodIStyle(theme);
    Object.keys(style).forEach((key) => {
      document.documentElement.style.setProperty(key, style[key]);
    });
  }, [theme]);

  return (
    <div className="ui container">
      <Grid>
        <Grid.Row divided>
          <Grid.Column computer={8} tablet={12}>
            <h1>Theme Generator</h1>
            <p>
              You can add your custom themes to site.variables file in theme{' '}
              {'>'}
              globals. On this page, you can pick required color values and see
              how the components will look like with them.
            </p>
            <Message info>
              <p>
                You can toggle between different methods of customizing the
                theme. You can also mix them as you find best.
              </p>
            </Message>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column style={getMethodIStyle(themes['I'])}>
            <div className="theme-generator-method">
              <h2>site.variables</h2>
              <Select
                placeholder="Select method"
                onChange={(e, data) => {
                  setMethod(data.value);
                }}
                options={methods}
                value={method}
              />
            </div>
            <div className="theme-generator">
              <div className="theme-generator-toolbar">
                <div>
                  <button>Randomize</button>
                  <button
                    onClick={() => {
                      const prevMethod = method;
                      document.documentElement.style = {};
                      setTheme({});
                      setMethod(undefined);
                      setTimeout(() => {
                        setMethod(prevMethod);
                      }, 0);
                    }}
                  >
                    Reset
                  </button>
                  <button
                    className="copy-btn"
                    onClick={() => {
                      if (method === 'I') {
                        navigator.clipboard.writeText(
                          toCSS(getMethodIStyle({ ...themes['I'], ...theme })),
                        );
                      }
                    }}
                  >
                    Copy
                  </button>
                </div>
              </div>
              <pre>
                <MethodView theme={theme} setTheme={setTheme} method={method} />
              </pre>
              <div></div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <h2>Preview</h2>
            <div>
              <Button>Default</Button>
              <Button className="primary">Primary</Button>
              <Button className="secondary">Secondary</Button>
              <Button className="tertiary">tertiary</Button>
            </div>
            <div>
              <UniversalLink href="/">
                I'm a simple link (<em>visited</em>)
              </UniversalLink>
              <br />
              <UniversalLink href="/not-visited">
                I'm a simple link
              </UniversalLink>
              <br />
            </div>
            <h1>What is Lorem Ipsum?</h1>
            <p>
              <b>Lorem Ipsum</b> is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default ThemeGenerator;
