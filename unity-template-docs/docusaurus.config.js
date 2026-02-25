// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ResXR Unity Template Docs',
  tagline: 'Documentation for the ResXR Unity research template',
  favicon: 'img/logo.svg',

  future: {
    v4: true,
  },

  url: 'https://resxr.org',
  baseUrl: '/unity-template-docs/',

  organizationName: 'SchonbergLab',
  projectName: 'resxr-website',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Unity Template Docs',
        logo: {
          alt: 'ResXR Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/NoaTAU/TAUXR-Research-Template-Updated',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'ResXR',
            items: [
              {
                label: 'Documentation',
                to: '/',
              },
              {
                label: 'Homepage',
                href: 'https://resxr.org/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ResXR. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
