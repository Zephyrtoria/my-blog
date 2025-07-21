import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Musuyin的博客',
  tagline: 'Welcome',
  favicon: 'img/favicon.ico',
  
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },
  
  // Set the production url of your site here
  url: 'https://zephyrtoria.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/my-blog',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zephyrtoria', // Usually your GitHub org/user name.
  projectName: 'my-blog', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zn-Hans',
    locales: ['zn-Hans'],
  },
  
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: false,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/soyo-card.png',
    navbar: {
      title: 'Musuyin',
      logo: {
        alt: 'MYGO',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'backendSidebar',
          position: 'left',
          label: '后端笔记',
        },
        { to: '/blog', label: 'Blog', position: 'left' },

        {
          type: 'docSidebar',
          sidebarId: 'frontendSidebar',
          position: 'left',
          label: '前端笔记',
        },
        {
          type: 'docSidebar',
          sidebarId: 'technologySidebar',
          position: 'left',
          label: '技术笔记',
        },
        {
          type: 'docSidebar',
          sidebarId: 'csSidebar',
          position: 'left',
          label: '计科科目学习',
        },
        {
          type: 'docSidebar',
          sidebarId: 'articleSidebar',
          position: 'left',
          label: '八股文',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/Zephyrtoria/my-blog',
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
              label: 'GitHub',
              href: 'https://github.com/Zephyrtoria',
            },
            {
              label: 'CSDN',
              href: 'https://blog.csdn.net/Zephyrtoria',
            },
          ],
        },
      ],
      copyright: `Powered by Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
