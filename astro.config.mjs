import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://snking06.github.io",
  base: "/site-perso-cv-portfolio",
  integrations: [sitemap()],
});
