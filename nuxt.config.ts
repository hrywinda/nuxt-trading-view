// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  buildModules: ["@nuxtjs/composition-api/module"],
  css: ["~/assets/base.scss"],
  store: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  router: {
    middleware: ["auth"],
  },
  modules: ["nuxt-vue3-google-signin"],
  googleSignIn: {
    clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID,
  },
  publicRuntimeConfig: {
    VUE_APP_REDIRECT_URI: process.env.VUE_APP_REDIRECT_URI,
    VUE_APP_API_KEY: process.env.VUE_APP_API_KEY,
  },
});
