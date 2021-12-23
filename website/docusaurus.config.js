/** @type {import('@docusaurus/types').DocusaurusConfig} */

module.exports = {
  title: 'EEA Design System',
  tagline: 'EEA Design System package',
  url: 'https://eea.github.io/',
  deploymentBranch: 'develop',
  baseUrl: '/volto-eea-design-system/',
  trailingSlash: true,
  //url: 'http://localhost:3005',
  baseUrl: '/eea-design-system/',
  //baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/eea_icon.png',
  organizationName: 'eea', // Usually your GitHub org/user name.
  projectName: 'volto-eea-design-system', // Usually your repo name.
  customFields: {
    storyBookUrl: 'http://192.168.30.188:6006',
  },
  themeConfig: {
    navbar: {
      title: 'EEA Design System',
      logo: {
        alt: 'EEA Design System Logo',
        src: 'img/eea_icon.png',
      },
      items: [
        // {
        //   type: 'doc',
        //   docId: 'intro',
        //   position: 'left',
        //   label: 'EEA Component Library',
        // },
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
          title: 'Community',
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
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          exclude: ['**/md_components/**'],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
