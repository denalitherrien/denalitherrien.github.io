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
    baseURL: '/your-repo-name/', // GitHub Pages serves from this subpath
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/image',
    'shadcn-nuxt',
    '@nuxtjs/color-mode'
  ], 
  colorMode: {
    classSuffix: '',
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './app/components/ui'
  }
})