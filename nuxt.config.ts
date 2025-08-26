// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   app: {
    baseURL: '/nuxt-challenge/'
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  typescript: {
    strict: true
  }
})
