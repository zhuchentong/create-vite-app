import { defineConfig } from 'vitepress'
import path from 'path'
const ogDescription = 'Next Generation Frontend Tooling'
const ogImage = 'https://main.vitejs.dev/og-image.png'
const ogTitle = 'Vite'
const ogUrl = 'https://main.vitejs.dev'

export default defineConfig({
  title: 'Vite CLI',
  description: 'Next Generation Frontend Tooling',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'twitter:description', content: ogDescription }],
    ['meta', { property: 'twitter:title', content: ogTitle }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:image', content: ogImage }],
    ['meta', { property: 'twitter:url', content: ogUrl }]
  ],

  vue: {
    reactivityTransform: true
  },

  themeConfig: {
    logo: '/cli.png',
    editLink: {
      pattern: 'https://github.com/vitejs/vite/edit/main/docs/:path',
      text: 'Suggest changes to this page'
    },

    socialLinks: [
      { icon: 'discord', link: 'https://jzzx-docs.netlify.app/' },
      { icon: 'github', link: 'https://github.com/ErKeLost/vite-cli' }
    ],

    algolia: {
      apiKey: 'b573aa848fd57fb47d693b531297403c',
      indexName: 'vitejs',
      searchParameters: {
        facetFilters: ['tags:en']
      }
    },


    localeLinks: {
      text: 'English',
      items: [
        { text: '简体中文', link: 'https://cn.vitejs.dev' }
      ]
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present ERKELOST & Vite CLI Contributors'
    },

    nav: [
      { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
      {
        text: '示例',
        items: [
          {
            text: 'Vue',
            items: [
              {
                text: 'Naive-UI (主题化测试中)',
                link: 'https://create-vite-app-naive-ui.netlify.app'
              },
              {
                text: 'Element-plus (主题化测试中)',
                link: 'https://create-vite-app-element-plus.netlify.app'
              },
              {
                text: 'Ant-Design-Vue (主题化测试中)',
                link: 'https://vite-cli-ant-design-vue.netlify.app'
              },
              {
                text: 'DevUI',
                link: 'https://vite-cli-element-plus.netlify.app'
              },
              {
                text: 'T-Design-Vue',
                link: 'https://vite-cli-element-plus.netlify.app'
              },
              {
                text: 'Arco-Design-Vue',
                link: 'https://vite-cli-element-plus.netlify.app'
              }
            ]
          },
          {
            text: 'React',
            items: [
              {
                text: 'Ant-Design',
                link: 'https://twitter.com/vite_js'
              }
            ]
          }
        ]
      }
      // { text: 'Config', link: '/config/', activeMatch: '/config/' },
      // { text: 'Plugins', link: '/plugins/', activeMatch: '/plugins/' },
      // {
      //   text: '示例',
      //   items: [
      //     {
      //       text: 'Twitter',
      //       link: 'https://twitter.com/vite_js'
      //     },
      //     {
      //       text: 'Discord Chat',
      //       link: 'https://chat.vitejs.dev'
      //     },
      //     {
      //       text: 'Awesome Vite',
      //       link: 'https://github.com/vitejs/awesome-vite'
      //     },
      //     {
      //       text: 'DEV Community',
      //       link: 'https://dev.to/t/vite'
      //     },
      //     {
      //       text: 'Rollup Plugins Compat',
      //       link: 'https://vite-rollup-plugins.patak.dev/'
      //     },
      //     {
      //       text: 'Changelog',
      //       link: 'https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md'
      //     }
      //   ]
      // }
      // {
      //   text: 'v3 (next)',
      //   items: [
      //     {
      //       text: 'v2.x (stable)',
      //       link: 'https://v2.vitejs.dev'
      //     }
      //   ]
      // }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            // {
            //   text: 'Why Vite',
            //   link: '/guide/why'
            // },
            {
              text: 'Getting Started',
              link: '/guide/'
            }
            // {
            //   text: 'Features',
            //   link: '/guide/features'
            // },
            // {
            //   text: 'Using Plugins',
            //   link: '/guide/using-plugins'
            // },
            // {
            //   text: 'Dependency Pre-Bundling',
            //   link: '/guide/dep-pre-bundling'
            // },
            // {
            //   text: 'Static Asset Handling',
            //   link: '/guide/assets'
            // },
            // {
            //   text: 'Building for Production',
            //   link: '/guide/build'
            // },
            // {
            //   text: 'Deploying a Static Site',
            //   link: '/guide/static-deploy'
            // },
            // {
            //   text: 'Env Variables and Modes',
            //   link: '/guide/env-and-mode'
            // },
            // {
            //   text: 'Server-Side Rendering (SSR)',
            //   link: '/guide/ssr'
            // },
            // {
            //   text: 'Backend Integration',
            //   link: '/guide/backend-integration'
            // },
            // {
            //   text: 'Comparisons',
            //   link: '/guide/comparisons'
            // },
            // {
            //   text: 'Migration from v2',
            //   link: '/guide/migration'
            // }
          ]
        }
        // {
        //   text: 'APIs',
        //   items: [
        //     {
        //       text: 'Plugin API',
        //       link: '/guide/api-plugin'
        //     },
        //     {
        //       text: 'HMR API',
        //       link: '/guide/api-hmr'
        //     },
        //     {
        //       text: 'JavaScript API',
        //       link: '/guide/api-javascript'
        //     },
        //     {
        //       text: 'Config Reference',
        //       link: '/config/'
        //     }
        //   ]
        // }
      ]
      // '/config/': [
      //   {
      //     text: 'Config',
      //     items: [
      //       {
      //         text: 'Configuring Vite',
      //         link: '/config/'
      //       },
      //       {
      //         text: 'Shared Options',
      //         link: '/config/shared-options'
      //       },
      //       {
      //         text: 'Server Options',
      //         link: '/config/server-options'
      //       },
      //       {
      //         text: 'Build Options',
      //         link: '/config/build-options'
      //       },
      //       {
      //         text: 'Preview Options',
      //         link: '/config/preview-options'
      //       },
      //       {
      //         text: 'Dep Optimization Options',
      //         link: '/config/dep-optimization-options'
      //       },
      //       {
      //         text: 'SSR Options',
      //         link: '/config/ssr-options'
      //       },
      //       {
      //         text: 'Worker Options',
      //         link: '/config/worker-options'
      //       }
      //     ]
      //   }
      // ]
    }
  }
})
