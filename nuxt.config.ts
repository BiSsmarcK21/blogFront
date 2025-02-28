// https://nuxt.com/docs/api/configuration/nuxt-config
const API_URL = process.env.API_URL
const isProduction = process.env.NODE_ENV === 'production'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: true,
  debug: false,

  devtools: {
    enabled: true,
  },

  nitro: {
    routeRules: {
      '/api/v1/**': {
        proxy: 'http://localhost:8080/**',
      },
    },
  },

  runtimeConfig: {
    API_URL: isProduction ? API_URL : 'http://localhost:3000',
  },

  css: [
      '/styles/global.css'
  ],

  modules: ['@nuxt/fonts'],
  app: {
    head: {
      title: 'Your Project Title',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Your project description' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap' }
      ]
    }
  }
});