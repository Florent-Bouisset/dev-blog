// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/content"],
  content: {
    experimental: {
      search: {
        indexed: true,
        ignoredTags: [],
        filterQuery: {},
      },
    },
  },
});
