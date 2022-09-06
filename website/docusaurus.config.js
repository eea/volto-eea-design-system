/** @type {import('@docusaurus/types').DocusaurusConfig} */

module.exports = {
  title: 'EEA Design System',
  tagline: 'Creating a consistent user experience for our digital products',
  url: 'https://eea.github.io/',
  deploymentBranch: 'develop-itml',
  baseUrl: '/volto-eea-design-system/',
  trailingSlash: true,
  // url: 'http://localhost:3005',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/eea_icon.png',
  organizationName: 'eea', // Usually your GitHub org/user name.
  projectName: 'volto-eea-design-system', // Usually your repo name.
  customFields: {
    storyBookUrl: 'https://eea.github.io/volto-kitkat-frontend/',
  },
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
    },
    navbar: {
      title: 'EEA Design System',
      logo: {
        alt: 'EEA Design System Logo',
        src: 'img/eea_icon.png',
      },
      items: [
        {
          to: 'docs/category/components',
          label: 'Components',
          activeBaseRegex: 'docs/(webdev|category)/(Components|components)',
          position: 'left',
        },
        {
          to: 'docs/category/web-content',
          label: 'Web content',
          activeBaseRegex: 'docs/(category/web-content|webcontent)',
          position: 'left',
        },
        {
          to: 'docs/category/publications',
          label: 'Publications',
          activeBaseRegex: 'docs/(category/publications|pubguide)',
          position: 'left',
        },
        {
          to: 'docs/category/maps-and-charts',
          label: 'Maps and charts',
          activeBaseRegex: 'docs/(dataguide|category/maps-and-charts)',
          position: 'left',
        },
        {
          href: 'https://github.com/eea/volto-eea-design-system',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'See also',
          items: [
            {
              label: 'EEA Website',
              href: 'https://www.eea.europa.eu',
            },
            {
              label: 'EEA Storybook',
              href: 'https://eea.github.io/volto-kitkat-frontend/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EEA. Built with Docusaurus.`,
    },
  },
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic,700italic&display=swap',
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          exclude: ['**/md_components/**'],
          editUrl: 'https://github.com/eea/volto-eea-design-system/edit/contribute-documentation/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
