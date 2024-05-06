// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: "%s - 牛马编程",
      title: '牛马编程',
      charset: "utf-8",
      htmlAttrs: {
        lang: "zh-cn"
      },
      meta: [
        { name: "description", content: "牛马编程描述" },
        { name: "keywords", content: "牛马编程关键词" }
      ],
      script: [
        // { src: "http://xxx.js" }
      ],
      link: [
        { rel: "stylesheet", href: "http://xxx.css" }
      ]
    }
  },
  css: [
    "~/assets/main.css"
  ],
  // devtools: { enabled: true },
  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? [
          'naive-ui',
          'vueuc',
          '@css-render/vue3-ssr',
          '@juggle/resize-observer'
        ]
        : ['@juggle/resize-observer']
  },
  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc', 'date-fns-tz/formatInTimeZone']
          : []
    }
  },
  modules: [
    'nuxt-windicss',
  ],
  imports: {
    dirs: ["apis"]
  }
})
