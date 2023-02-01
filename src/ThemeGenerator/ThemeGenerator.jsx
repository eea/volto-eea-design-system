import React, { useEffect, useState } from 'react';
import { Button, Message, Grid } from 'semantic-ui-react';
import { UniversalLink } from '@plone/volto/components';
import {
  colors,
  darken,
  lighten,
  saturate,
  toRGB,
  toHSL,
  toCSS,
  hslToHex,
  randomNumberGenerator,
} from './helpers';

import './styles.less';

const themeMap = {
  '@primaryColor': 'primary',
  '@secondaryColor': 'secondary',
  '@tertiaryColor': 'tertiary',
  '@lightPrimaryColor': 'light-primary',
  '@lightSecondaryColor': 'light-secondary',
  '@lightTertiaryColor': 'light-tertiary',
  '@darkPrimaryColor': 'dark-primary',
  '@darkSecondaryColor': 'dark-secondary',
  '@darkTertiaryColor': 'dark-tertiary',
};

const defineColor = (title, color) => {
  const rgb = toRGB(color);
  const hsla = toHSL(rgb);

  if (hsla) {
    hsla.sp = `${hsla.s * 100}%`;
    hsla.lp = `${hsla.l * 100}%`;
  }

  return {
    rgb,
    hsla,
    style: hsla
      ? {
          [`--${title}-color-h`]: hsla.h,
          [`--${title}-color-s`]: hsla.sp,
          [`--${title}-color-l`]: hsla.lp,
          [`--${title}-color-a`]: hsla.a,
          [`--${title}-color`]: `hsla(${hsla.h}, ${hsla.sp}, ${hsla.lp}, ${hsla.a})`,
        }
      : {},
  };
};

const getStyle = (theme) => {
  let style = {};

  Object.keys(themeMap).forEach((key) => {
    style = {
      ...style,
      ...defineColor(themeMap[key], theme[key]).style,
    };
  });
  return style;
};

const getDefaultColor = (title) => {
  const hsl = {
    h: parseFloat(
      getComputedStyle(document.documentElement)
        .getPropertyValue(`--${title}-color-h`)
        .replace(' ', ''),
    ),
    s:
      parseFloat(
        getComputedStyle(document.documentElement)
          .getPropertyValue(`--${title}-color-s`)
          .replace(' ', '')
          .replace('%', ''),
      ) / 100,
    l:
      parseFloat(
        getComputedStyle(document.documentElement)
          .getPropertyValue(`--${title}-color-l`)
          .replace(' ', '')
          .replace('%', ''),
      ) / 100,
  };

  return hslToHex(hsl);
};

const updateSpan = (id, value) => {
  const span = document.getElementById(id);

  if (span) {
    span.innerHTML = value;
  }
};

const ThemeGenerator = () => {
  const [theme, setTheme] = useState({});

  const init = () => {
    const newTheme = { ...theme };

    Object.keys(themeMap).forEach((key) => {
      const color = getDefaultColor(themeMap[key]);
      updateSpan(key, color);
      newTheme[key] = color;
    });

    setTheme(newTheme);
  };

  useEffect(() => {
    init();
    /* eslint-disable-next-line */
  }, []);

  useEffect(() => {
    const style = getStyle(theme);
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
          <Grid.Column style={getStyle(theme)}>
            <h2>site.variables</h2>
            <div className="theme-generator">
              <div className="theme-generator-toolbar">
                <div>
                  <button
                    onClick={() => {
                      const randomColors = randomNumberGenerator(
                        0,
                        colors.length,
                        3,
                      );
                      const primary = defineColor(
                        'primary',
                        colors[randomColors[0]],
                      );
                      const secondary = defineColor(
                        'secondary',
                        colors[randomColors[1]],
                      );
                      const tertiary = defineColor(
                        'tertiary',
                        colors[randomColors[2]],
                      );

                      const newTheme = {
                        ...theme,
                        '@primaryColor': hslToHex(primary.hsla),
                        '@secondaryColor': hslToHex(secondary.hsla),
                        '@tertiaryColor': hslToHex(tertiary.hsla),
                        '@lightPrimaryColor': hslToHex(
                          saturate(lighten(primary.hsla, 15), 0),
                        ),
                        '@lightSecondaryColor': hslToHex(
                          saturate(lighten(secondary.hsla, 15), 0),
                        ),
                        '@lightTertiaryColor': hslToHex(
                          saturate(lighten(tertiary.hsla, 15), 0),
                        ),
                        '@darkPrimaryColor': hslToHex(
                          saturate(darken(primary.hsla, 6), 10),
                        ),
                        '@darkSecondaryColor': hslToHex(
                          saturate(darken(secondary.hsla, 6), 10),
                        ),
                        '@darkTertiaryColor': hslToHex(
                          saturate(darken(tertiary.hsla, 6), 10),
                        ),
                      };

                      Object.keys(newTheme).forEach((key) => {
                        updateSpan(key, newTheme[key]);
                      });

                      setTheme(newTheme);
                    }}
                  >
                    Randomize
                  </button>
                  <button
                    onClick={() => {
                      document.documentElement.style = {};
                      init();
                    }}
                  >
                    Reset
                  </button>
                  <button
                    className="copy-btn"
                    onClick={() => {
                      navigator.clipboard.writeText(toCSS(getStyle(theme)));
                    }}
                  >
                    Copy
                  </button>
                </div>
              </div>
              <pre>
                {Object.keys(themeMap).map((key, index) => (
                  <React.Fragment key={key}>
                    <code>
                      {'  '}
                      <button
                        className="color-picker"
                        style={{
                          backgroundColor: theme[key],
                        }}
                      />{' '}
                      {key}: "
                      <span
                        id={key}
                        contentEditable={true}
                        suppressContentEditableWarning={true}
                        onInput={(e) => {
                          setTheme({
                            ...theme,
                            [key]: e.currentTarget?.textContent,
                          });
                        }}
                      />
                      ";
                    </code>
                    {key === '@tertiaryColor' && '\n'}
                    {key === '@lightTertiaryColor' && '\n'}
                    {key !== '@darkTertiaryColor' && '\n'}
                  </React.Fragment>
                ))}
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
