import React from 'react';
import Header from './Header';
import { Dropdown, Image, Segment } from 'semantic-ui-react';
import { Logo } from '@eeacms/volto-eea-design-system/ui';

import LogoImage from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/eea-logo.svg';
import globeIcon from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/global-line.svg';
import eeaFlag from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Header/eea.png';

export default {
  title: 'Layout/Header',
  component: Header,
  argTypes: {
    links: {
      table: {
        disable: true,
      },
    },
    languages: {
      table: {
        disable: true,
      },
    },
    menuItems: {
      description: 'items for the header menu',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '' },
      },
    },
  },
  decorators: [(Story) => <Story />],
};

const logoProps = {
  title: 'Site',
  alt: 'European Environment Agency',
  url: 'https://eea.europa.eu',
  src: LogoImage,
};

const links = [
  { title: 'Biodiversity Information System for Europe', href: '/#' },
  { title: 'Climate Adaptation Platform', href: '/#' },
  { title: 'Copernicus in situ component', href: '/#' },
  { title: 'European Industrial Emissions Portal', href: '/#' },
  { title: 'Forest Information System for Europe', href: '/#' },
  { title: 'Information Platform for Chemical Monitoring', href: '/#' },
  { title: 'Marine Water Information System for Europe', href: '/#' },
  { title: 'Fresh Water Information System for Europe', href: '/#' },
];

const languages = [
  { name: 'Albanian', code: 'sq' },
  { name: 'Български', code: 'bg' },
  { name: 'Bosnian', code: 'bs' },
  { name: 'čeština', code: 'cs' },
  { name: 'Hrvatski', code: 'hr' },
  { name: 'dansk', code: 'da' },
  { name: 'Nederlands', code: 'nl' },
  { name: 'ελληνικά', code: 'el' },
  { name: 'English', code: 'en' },
  { name: 'eesti', code: 'et' },
  { name: 'Suomi', code: 'fi' },
  { name: 'Français', code: 'fr' },
  { name: 'Deutsch', code: 'de' },
  { name: 'magyar', code: 'hu' },
  { name: 'Íslenska', code: 'is' },
  { name: 'italiano', code: 'it' },
  { name: 'Latviešu', code: 'lv' },
  { name: 'lietuvių', code: 'lt' },
  { name: 'Macedonian', code: 'mk' },
  { name: 'Malti', code: 'mt' },
  { name: 'Norsk', code: 'no' },
  { name: 'polski', code: 'pl' },
  { name: 'Português', code: 'pt' },
  { name: 'Română', code: 'ro' },
  { name: 'slovenčina', code: 'sk' },
  { name: 'Slovenščina', code: 'sl' },
  { name: 'Español', code: 'es' },
  { name: 'Svenska', code: 'sv' },
  { name: 'Türkçe', code: 'tr' },
];

const menuItems = [
  {
    '@id': 'item1',
    items: [
      {
        '@id': 'section1',
        description: '',
        items: [],
        review_state: null,
        title: 'Section 1',
      },
      {
        '@id': 'section2',
        description: '',
        items: [
          {
            '@id': 'page1',
            description: '',
            items: [],
            review_state: null,
            title: 'Page 1',
          },
        ],
        review_state: null,
        title: 'Section 2',
      },
      {
        '@id': 'section3',
        description: '',
        items: [],
        review_state: null,
        title: 'Section 3',
      },
    ],
    review_state: null,
    title: 'Item 1',
  },
  {
    '@id': 'item2',
    items: [
      {
        '@id': 'section1',
        description: '',
        items: [],
        review_state: null,
        title: 'Section 1',
      },
      {
        '@id': 'section2',
        description: '',
        items: [
          {
            '@id': 'page1',
            description: '',
            items: [],
            review_state: null,
            title: 'Page 1',
          },
          {
            '@id': 'page2',
            description: '',
            items: [],
            review_state: null,
            title: 'Page 2',
          },
        ],
        review_state: null,
        title: 'Section 2',
      },
      {
        '@id': 'section3',
        description: '',
        items: [],
        review_state: null,
        title: 'Section 3',
      },
    ],
    review_state: null,
    title: 'Item 2',
  },
  {
    '@id': 'Topics',
    items: [
      {
        '@id': 'Air-and-climate',
        description: '',
        items: [
          {
            '@id': 'Air-pollution-sources',
            description: '',
            items: [],
            review_state: null,
            title: 'Air pollution sources',
          },
          {
            '@id': 'Air-quality-and-COVID-19',
            description: '',
            items: [],
            review_state: null,
            title: 'Air quality and COVID-19',
          },
        ],
        review_state: null,
        title: 'Air and climate',
      },
      {
        '@id': 'Nature',
        description: '',
        items: [
          {
            '@id': 'An-introduction-to-habitats',
            description: '',
            items: [],
            review_state: null,
            title: 'An introduction to habitats',
          },
          {
            '@id': 'EUNIS',
            description: '',
            items: [],
            review_state: null,
            title:
              'Find species, habitat types and protected sites across Europe (EUNIS)',
          },
        ],
        review_state: null,
        title: 'Nature',
      },
      {
        '@id': 'Sustainability-and-well-being',
        description: '',
        items: [],
        review_state: null,
        title: 'Sustainability and well-being',
      },
      {
        '@id': 'Economic-sectors',
        description: '',
        items: [],
        review_state: null,
        title: 'Economic sectors',
      },
    ],
    review_state: null,
    title: 'Topics',
  },
  {
    '@id': 'item4',
    description: '',
    items: [],
    review_state: null,
    title: 'Item 4',
  },
  {
    '@id': 'item5',
    description: '',
    items: [],
    review_state: null,
    title: 'Item 5',
  },
];

const debounce = (func) => {
  let timer;
  return (event) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, 50, event);
  };
};

const Template = (args) => {
  const [viewportWidth, setWidth] = React.useState(
    typeof window !== 'undefined' && window.innerWidth,
  );
  React.useEffect(() => {
    const handleWindowResize = window.addEventListener('resize', () =>
      debounce(setWidth(window.innerWidth)),
    );

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const { languages, links, linksMenuTitle, menuItems } = args;

  const [language, setLanguage] = React.useState('en');
  const [pathname, setPathname] = React.useState('/');

  return (
    <div>
      <Header>
        <Header.TopHeader>
          <Header.TopItem className="official-union">
            <Image src={eeaFlag} alt="eea flag"></Image>
            <Header.TopDropdownMenu
              text="An official website of the European Union | How do you Know?"
              mobileText="An official EU website"
              icon="chevron down"
              aria-label="dropdown"
              className=""
              viewportWidth={viewportWidth}
            >
              <div className="content">
                <p>
                  All official European Union website addresses are in the{' '}
                  europa.eu domain.
                </p>
                <a
                  href="https://europa.eu/european-union/contact/institutions-bodies_en"
                  target="_blank"
                  rel="noreferrer"
                  role="option"
                  aria-selected="false"
                >
                  See all EU institutions and bodies
                </a>
              </div>
            </Header.TopDropdownMenu>
          </Header.TopItem>

          <Header.TopItem>
            <Header.TopDropdownMenu
              id="theme-sites"
              className="tablet or lower hidden"
              text={linksMenuTitle}
              viewportWidth={viewportWidth}
            >
              <div className="wrapper">
                {links.map((item, index) => (
                  <Dropdown.Item key={index}>
                    <a
                      href={item.href}
                      className="site"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.title}
                    </a>
                  </Dropdown.Item>
                ))}
              </div>
            </Header.TopDropdownMenu>
          </Header.TopItem>

          <Header.TopDropdownMenu
            id="language-switcher"
            className="item"
            text={`${language.toUpperCase()}`}
            mobileText={`${language.toUpperCase()}`}
            icon={
              <Image src={globeIcon} alt="language dropdown globe icon"></Image>
            }
            viewportWidth={viewportWidth}
          >
            <div className="wrapper">
              {languages.map((item, index) => (
                <Dropdown.Item
                  key={index}
                  text={
                    <span>
                      {item.name}
                      <span className="country-code">
                        {item.code.toUpperCase()}
                      </span>
                    </span>
                  }
                  onClick={() => setLanguage(item.code)}
                ></Dropdown.Item>
              ))}
            </div>
          </Header.TopDropdownMenu>
        </Header.TopHeader>
        <Header.Main
          pathname={pathname}
          logo={<Logo {...logoProps} />}
          menuItems={menuItems}
          renderMenuItem={(item, options = {}) => {
            const { onClick } = options;
            return (
              <a
                onClick={(e) => {
                  const path = item['@id'] || item.url;
                  setPathname(path);
                  e.preventDefault();
                  onClick && onClick(e, item);
                }}
                href={item['@id'] || item.url}
              >
                {item.title}
              </a>
            );
          }}
          renderGlobalMenuItem={(item, options = {}) => {
            const { onClick } = options;
            return (
              <a
                onClick={(e) => {
                  // const path = item['@id'] || item.url;
                  // setPathname(path);
                  e.preventDefault();
                  onClick && onClick(e, item);
                }}
                href={item['@id'] || item.url}
              >
                {item.title}
              </a>
            );
          }}
        ></Header.Main>
      </Header>

      <Segment>Current location: {pathname}</Segment>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  linksMenuTitle: 'Environmental information systems',
  links,
  languages,
  menuItems,
};
