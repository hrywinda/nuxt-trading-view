// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
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
    clientId: "1010629603082-914r6g9t1gdq33p4tribsg56e231acpt.apps.googleusercontent.com",
  },
});
