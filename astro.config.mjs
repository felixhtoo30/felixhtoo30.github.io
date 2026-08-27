import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://felixhtoo30.github.io",
  output: "static",
  integrations: [react(), sitemap()],
  vite: {
    ssr: {
      noExternal: ["@gsap/react", "gsap"],
    },
  },
});
