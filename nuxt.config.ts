// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  modules: ["@pinia/nuxt"],
  // pinia: {
  //   autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
  // },
  css: ["~/assets/main.css"],
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/public/favicon.ico",
        },
      ],
    },
  },
});
