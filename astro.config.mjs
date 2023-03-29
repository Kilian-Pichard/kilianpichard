import { defineConfig } from 'astro/config';
import astroI18next from "astro-i18next";
import tailwind from "@astrojs/tailwind";
const SERVER_PORT = 3000;


// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
    port: SERVER_PORT
  },
  integrations: [astroI18next(), tailwind()]
});