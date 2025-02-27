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
});


