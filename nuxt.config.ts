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
  modules: ["nuxt-vue3-google-signin"],
  googleSignIn: {
    clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID,
  },
  runtimeConfig: {
    public: {
      VUE_APP_API_KEY: process.env.VUE_APP_API_KEY,
    },
  },
  router: {
    routes: [
      {
        name: "home",
        path: "/",
        component: "~/pages/index.vue",
      },
      {
        name: "login",
        path: "/login",
        component: "~/pages/login/index.vue",
      },
      // Other routes...
    ],
  },
});
