// @ts-check
// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  output: "server",
});
