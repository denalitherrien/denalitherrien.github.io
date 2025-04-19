// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4
  },
  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    baseURL: '/', // Change if using project repo
    buildAssetsDir: '_nuxt/', // Explicit assets directory
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    }
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    'shadcn-nuxt',
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    classSuffix: '',
  },
  shadcn: {
    prefix: '',
    componentDir: './app/components/ui'
  },
  // For GitHub Pages deployment
  experimental: {
    payloadExtraction: true
  },
  routeRules: {
    '/**': { isr: true } // Enable incremental static regeneration
  },
})