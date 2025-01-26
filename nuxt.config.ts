// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-svgo",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "nuxt-easy-lightbox",
  ],
  tailwindcss: {
    // cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    exposeConfig: {
      level: 2,
    },
    // config: {},
    viewer: true,
  },
  plugins: ["~/plugins/register-components.ts"],
  i18n: {
    strategy: "no_prefix",
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
    defaultLocale: "en",
    experimental: {
      typedOptionsAndMessages: "default",
    },
    locales: [
      {
        code: "en",
        name: "Engish",
        file: "en.json",
      },
      {
        code: "np-NP",
        name: "Nepali",
        file: "np-NP.ts",
      },
    ],
    lazy: true,
    // langDir: "./locales",
    // langDir: "i18n/locales",
  },
});